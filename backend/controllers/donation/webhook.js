import { createHmac } from 'node:crypto';
import models from '../../services/db/association.js';


export default (req,res) => {

    const secret = process.env.PAYSTACK_SECRET
    const hash = createHmac('sha512', secret).update(JSON.stringify(req.body)).digest('hex');

    console.log("Event came through")


    if(hash === req.headers['x-paystack-signature']){
        const event = req.body;
        res.send(200)
        console.log("Event from paystack is: ", event);
        if(event.event === "charge.success"  || event.event === "charge.failed" ){
            models.Donation.update(
                {
                    donation_status: event.data.status
                },
                {
                    where: {
                        donation_id: event.data.metadata.donation_id
                    }
                }
            )
            .then((data)=>{
                console.log("Donation updated successfully",data)
            })
            .catch((err)=>{
                console.log("Error occured while updating donation: ",err)
            })
        }

        
    }

    
}