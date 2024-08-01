import models from "../../services/db/association.js";
import https from 'https'
import Joi from "joi";

const validate = (data) => {
    console.log("Data before validating is: ",data)
    const schema = Joi.object({
        backer_id: Joi.number().required(),
        campaign_id: Joi.number().required(),
        donation_message: Joi.string().required(),
        donation_amount: Joi.number().min(100).required(),
        donation_information: Joi.boolean().required(),
        donation_type: Joi.string().required(),
    })

    return schema.validate(data)
}

export default (req,res,next) => {

    const payload = req.body;

    console.log("Donate body is: ",req.body)

    const { error } = validate(payload)

    if(error)
        return res.status(400).send({message: error.details[0].message})

    models.Donation.create(payload)
    .then((donation)=>{
        const jsonData = donation.toJSON()
        console.log("Data after creating",jsonData);
        const params = JSON.stringify({
            "email": req.user.payload.email,
            "amount": payload.donation_amount * 100,
            "callback_url": "http://localhost:7000/verify-donation",
            "metadata": {
                "donation_id": jsonData.donation_id,
            }
        });
    
        const options = {
            hostname: 'api.paystack.co',
            port: 443,
            path: '/transaction/initialize',
            method: 'POST',
            headers: {
              Authorization: `Bearer ${process.env.PAYSTACK_SECRET}`,
              'Content-Type': 'application/json'
            }
        }
        const payReq = https.request(options, payRes => {
            let data = ''
            payRes.on('data', (chunk) => {
              data += chunk
            });
          
            payRes.on('end', () => {
              console.log(JSON.parse(data));
              const paystack_response = JSON.parse(data);
              res.status(200).send({
                message: "Donation initialized", 
                donation: jsonData,
                auth_url: paystack_response?.data?.authorization_url,
                paystack_response
              })
            })
        })
        .on('error', error => {
            console.error(error);
            res.status(500).send("Paystack Error")
        })
        payReq.write(params);
        payReq.end();
    })
    .catch((error)=>{
        console.log("Error occurred while creating",error)
        req.error = error;
        next()
    })

}