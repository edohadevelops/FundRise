import https from 'https'

export default (req,res,next) => {
    if(!req.params.reference)
        return res.status(404).send({message: "Reference not found"})
    const reference = req.params.reference;

    const options = {
        hostname: 'api.paystack.co',
        port: 443,
        path: `/transaction/verify/${reference}`,
        method: 'GET',
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET}`
        }
    }
    const payReq = https.request(options, payRes => {
        let data = ''
      
    payRes.on('data', (chunk) => {
        data += chunk
    });
      
    payRes.on('end', () => {
        const details = JSON.parse(data);

        res.status(200).send({status: details?.data?.status, details})
        
    })
    }).on('error', error => {
        console.error(error)
        req.error = error;
        next()
    })

    payReq.end();

}