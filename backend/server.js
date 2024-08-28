import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import {connectToDB} from './config/db.js';
import { SyncDB } from './services/db/sync.js';
import {
    loginRoute,
    registerRoute,
    initialRoute,
    createCampaignRoute,
    getAllCampaigns,
    getAllCategories,
    getCampaignById,
    makeDonation,
    paystackHook,
    verifyDonation,
    onBoardingRoute,
    likeRouter,
    getUserByUsernameRouter,
    getAllCampaignsByUsernameRouter,
    getAllDonationsByUsernameRouter,
    getAllDonationsByUseridRouter,
    followRouter
} from './routes/index.js';
import errorHandler from './middlewares/error/error.js';
// import SendSuccessMail from './services/nodemail/donation/success.js';

const app = express();



connectToDB();
SyncDB();


app.use(cors({
    origin: 'http://localhost:7000',
    // methods: ['GET', 'POST', 'PUT', 'DELETE'],
    // allowedHeaders: ['Content-Type', 'Authorization']
}));
app.options("*",cors())
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/assets',express.static('public'))
// app.use("/assets/donation",express.static('public/templates/donation'))

app.get("/",(req,res)=>{
    res.send("Welcome to fundrise")
    console.log("welcome")
});
// 

app.use('/api/login',loginRoute);
app.use('/api/register',registerRoute);
app.use('/api/onboarding',onBoardingRoute);
app.use('/api/initialize',initialRoute);
app.use('/api/campaign/create',createCampaignRoute);
app.use('/api/campaign/getAll',getAllCampaigns);
app.use('/api/categories/getAll',getAllCategories);
app.use('/api/campaign/getById',getCampaignById);
app.use('/api/donate',makeDonation);
app.use('/api/donation/verify',verifyDonation);
app.use('/api/like',likeRouter);
app.use('/api/user/getByUsername',getUserByUsernameRouter);
app.use('/api/campaign/getUsersCampaigns',getAllCampaignsByUsernameRouter);
app.use('/api/donation/getDonationsByUsername',getAllDonationsByUsernameRouter);
app.use('/api/donation/getDonationsByUserid',getAllDonationsByUseridRouter);
app.use('/api/follow',followRouter);


app.use('/paystack/webhook',paystackHook)



// Errors
app.use(errorHandler)




const port = process.env.PORT  || 5000;

app.listen(port,()=>{
    console.log("Listening for requests")
})