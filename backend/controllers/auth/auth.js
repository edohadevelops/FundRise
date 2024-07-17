import 'dotenv/config';
import jwt from 'jsonwebtoken';

export const auth = async(req,res,next) => {
    const authHeader = req.headers['authorization'];
    const authToken = authHeader && authHeader.split(' ')[1];

    jwt.verify(authToken,process.env.JWT_SECRET,(err,user)=>{
        if(err)
            return res.status(401).send({message: "Unauthorized access"})
        req.user = user
        next()
    })

}

export const authUser = async (req,res,next) => {
    const authHeader = req.headers['authorization'];
    const authToken = authHeader && authHeader.split(' ')[1];

    jwt.verify(authToken,process.env.JWT_SECRET,(err,user)=>{
        // console.log("User is: ",user)
        if(err || user.payload.role !== 'user' )
            return res.status(401).send({message: 'Unauthorized access'})
        req.user = user;
        next();
    })
}

export const authAdmin = async (req,res,next) => {
    const authHeader = req.headers['authorization'];
    const authToken = authHeader && authHeader.split(' ')[1];

    jwt.verify(authToken,process.env.JWT_SECRET,(err,user)=>{
        if(err || user.payload.role !== 'admin' )
            return res.status(401).send({message: 'Unauthorized access'})
        req.user = user;
        next();
    })
}

export const authSuperAdmin = async (req,res,next) => {
    const authHeader = req.headers['authorization'];
    const authToken = authHeader && authHeader.split(' ')[1];

    jwt.verify(authToken,process.env.JWT_SECRET,(err,user)=>{
        if(err || user.role !== 'super-admin' )
            return res.status(401).send({message: 'Unauthorized access'})
        req.user = user;
        next();
    })
}

