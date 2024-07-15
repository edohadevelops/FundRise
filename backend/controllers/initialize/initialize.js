export default (req,res) => {
    return res.status(200).send({message: "Authorized user",initialData: req.user})
}