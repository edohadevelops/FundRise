const errorHandler = (req,res) => {
    if(req.error)
        console.log("The error is: ",req.error)
        return res.status(500).send({message: "Internal server error", error: req.error})
}

export default errorHandler;