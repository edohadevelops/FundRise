import models from "../../services/db/association.js";
import https from 'https'
import Joi from "joi";

const validate = (data) => {
    const schema = Joi.object({
        backer_id: Joi.number().required(),
        campaign_id: Joi.number().required(),
        donation_message: Joi.string().required(),
        donation_amount: Joi.number().min(100).required(),
        donation_information: Joi.boolean().required(),
        donation_type: Joi.string().required(),
        email_address: Joi.string().email().required()
    })

    return schema.validate(data)
}

export default (req,res,next) => {

    const payload = req.body;

    const { error } = validate(payload)

    if(error)
        return res.status(400).send({message: error.details[0].message})

    const params = JSON.stringify({
        "email": payload.email_address,
        "amount": payload.donation_amount,
        "callback_url": "http://localhost:7000/verify-donation"
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
          console.log(JSON.parse(data))
        })
    })
    .on('error', error => {
        console.error(error)
    })

    models.Donation.create(payload)
    .then((data)=>{
        console.log("Data after creating",data);
        payReq.write(params);
        payReq.end();
    })
    .catch((error)=>{
        console.log("Error occurred while creating",error)
    })

}