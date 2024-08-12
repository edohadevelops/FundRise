const createEmailTemplate  = ({amount,reference,campaign_name,campaign_img,date,}) => {
    return (
        `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" >
                <meta http-equiv="X-UA-Compatible" content="IE=edge" >
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <style>
                    body{
                        margin: 0;
                        font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
                    }
                    table{
                        border-spacing: 0;
                    }
                    td{
                        padding: 0;
                    }
                    img{
                        border: 0;
                    }
                    p{
                        margin: 0;
                    }
                    .wrapper{
                        table-layout: fixed;
                        width: 100%;
                        /* max-width: 600px; */
                        /* background-color: #w; */
                        padding-bottom: 60px;
                    }
                    .email-content{
                        width: 100%;
                        max-width: 500px;
                        padding: 0 0 20px;
                        color: #44413d;
                        /* box-shadow: 0 0 25px rgba(0, 0, 0, .15); */
                        border: 1px solid rgba(0, 0, 0, .15);
                        text-align: center;
                        
                    }
                    .donate-btn{
                        background-color: #187070;
                        padding: 10px;
                        text-decoration: none;
                        color: #ffffff;
                    }
                    a{
                        color: white;
                    }
                    /* h1{
                        padding: 0;
                        margin: 0;
                    } */
                    
                </style>
            </head>
            <body>
                <center class="wrapper">
                    <table class="email-content" style="width: 100%;">
                        <tr>
                            <td style="line-height: 0; padding: 15px;">
                                <a href="http://localhost:7000/" style="color: white;" ><img src="https://res.cloudinary.com/dvpwdppy2/image/upload/v1723449323/Fundrise/fundrise-logo_x8d4uo.png" alt="FUNDRISE" width="500" style="max-width: 100%; background-color: #187070;"></a>
                            </td>
                        </tr>
                        <tr>
                            <td style="line-height: 0; background-color: #fafafa; padding: 20px 0;">
                                <table width="100%">
                                    <tr>
                                        <td style="padding: 0 0 5px;">
                                            <img src="https://res.cloudinary.com/dvpwdppy2/image/upload/v1723449323/Fundrise/success-icon_wpvoiq.png" alt="" width="60" >
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 15px; text-align: center;">
                                            <p style="margin: 0;font-size: 18px;">Your donation has been received</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 15px; text-align: center;">
                                            <p style="margin: 0;font-size: 25px; font-weight: 800;">N ${amount}</p>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td style="background-color: #fafafa; padding: 0 0 30px;">
                                <img 
                                    src="${
                                        campaign_img ? 
                                        campaign_img :
                                        "https://res.cloudinary.com/dvpwdppy2/image/upload/v1723449323/Fundrise/CampaignImg_b5iho6.webp"
                                    }" 
                                    alt="" 
                                    width="200" 
                                    style="max-width: 100%;"
                                >
                            </td>
                        </tr>
                        <tr>
                            <td style="padding: 10px 20px;">
                                <tr>
                                    <td style="background-color: white;">
                                        <p style="font-weight: 700; color: #44413d;">Transaction Summary</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="padding: 0 20px;">
                                        <table width="100%">
                                            <tr>
                                                <td style="text-align: start;padding: 10px 0; border-bottom: 1px solid #e2e2e2;">
                                                    <p>Campaign Name</p>
                                                </td>
                                                <td style="text-align:end;padding: 10px 0; border-bottom: 1px solid #e2e2e2;">
                                                    <p ">${campaign_name}</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="text-align: start;padding: 10px 0; border-bottom: 1px solid #e2e2e2;">
                                                    <p>Donation Amount</p>
                                                </td>
                                                <td style="text-align:end;padding: 10px 0; border-bottom: 1px solid #e2e2e2;">
                                                    <p>N ${amount}</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="text-align: start;padding: 10px 0; border-bottom: 1px solid #e2e2e2;">
                                                    <p>Transaction Reference</p>
                                                </td>
                                                <td style="text-align:end;padding: 10px 0; border-bottom: 1px solid #e2e2e2;">
                                                    <p>${reference}</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="text-align: start;padding: 10px 0; border-bottom: 1px solid #e2e2e2;">
                                                    <p>Transaction date</p>
                                                </td>
                                                <td style="text-align:end;padding: 10px 0; border-bottom: 1px solid #e2e2e2;">
                                                    <p>6 Aug 2024</p>
                                                </td>
                                            </tr>
                                        
                                        </table>
                                    </td>
                                </tr>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding-top: 20px;">
                                <table style="width: 100%;">
                                    <tr>
                                        <td style="width:60%;"></td>
                                        <td>
                                            <a href="http://localhost:7000/donate/19" class="donate-btn" style="color: white;">Donate again</a>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>

                </center>
            </body>
            </html>
        `
    )
}

export default createEmailTemplate;