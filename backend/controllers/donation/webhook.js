import { createHmac } from 'node:crypto';
import models from '../../services/db/association.js';
import SendSuccessMail from '../../services/nodemail/donation/success.js';
import updateCampaign from '../../services/donation/update.js';


export default (req,res) => {

    const secret = process.env.PAYSTACK_SECRET
    const hash = createHmac('sha512', secret).update(JSON.stringify(req.body)).digest('hex');

    console.log("Event came through")


    if(hash === req.headers['x-paystack-signature']){
        const { event, data:paystackData} = req.body;
        const { metadata } = paystackData
        res.send(200)
        // console.log("Event from paystack is: ", event);
        console.log("Data from paystack is: ", paystackData);
        if(event === "charge.success"  || event === "charge.failed" ){
            // Handle Updating Donation
            models.Donation.update(
                {
                    donation_status: paystackData.status
                },
                {
                    where: {
                        donation_id: paystackData.metadata.donation_id
                    }
                }
            )
            .then((data)=>{
                // console.log("Donation updated successfully",data)
                
            })
            .catch((err)=>{
                console.log("Error occured while updating donation: ",err)
            })

            updateCampaign(metadata.campaign_id,paystackData.amount)

            // Handle Email Sending

            models.Donation.findByPk(metadata.donation_id,{
                include: [
                    {
                        model: models.Campaign,
                        attributes: ["title","campaign_img"]
                    }
                ]
            })
            .then((data)=>{
                const jsonData = data.toJSON()
                const details = {
                    status: paystackData.status,
                    amount: paystackData.amount / 100,
                    reference: paystackData.reference,
                    date: paystackData.paid_at,
                    message: jsonData.donation_message,
                    campaign_name: jsonData.Campaign.title,
                    campaign_img: jsonData.Campaign.campaign_img,
                }
                console.log("Details to pass to email sender is: ",details);
                SendSuccessMail(details)
            })
            .catch((err)=>{
                console.log("Error occurred while getting donation",err)
            })
        }

        
    }

    
}