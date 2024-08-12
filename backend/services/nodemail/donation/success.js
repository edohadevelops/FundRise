import nodemailer from 'nodemailer';
import createEmailTemplate from './templates/success.js';

const SendSuccessMail = (req,res) => {

    console.log("User is: ", process.env.GMAIL_USER, "Pass is: ",process.env.GMAIL_PASS)
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASS
        }
    })
    const html = createEmailTemplate("edoha")

    res.status(200).send(html)

    transporter.sendMail({
        from: `FundRise Reciepts <edohadevelops@gmail.com>`,
        to: "amenedoha@gmail.com",
        subject: "Donation Recieved",
        // text: "This is to notify you that your payment of 150,000 has been recieved successfully"
        html
    })
    .then((data)=>{
        console.log("Message sent",data)
        res.send("Message sent")
    })
    .catch((err)=>{
        console.log("Error occurred while sending the mail",err)
        res.send("Error occured: ",err)
    })
}

export default SendSuccessMail;