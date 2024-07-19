const errorHandler = (req,res) => {
    res.status(500).send({message: "Internal server error", error})
}

export default errorHandler;