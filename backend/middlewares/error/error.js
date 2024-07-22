const errorHandler = (req,res) => {
    if(req.error)
        return res.status(500).send({message: "Internal server error", error})
}

export default errorHandler;