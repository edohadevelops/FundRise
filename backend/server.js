import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import {connectToDB} from './config/db.js';
// import { SyncDB } from './services/db/sync.js';
import {
    loginRoute,
    registerRoute,
    initialRoute,
    createCampaignRoute,
    getAllCampaigns
} from './routes/index.js';
// import uploadCampaign from './middlewares/campaign/upload.js';
import errorHandler from './middlewares/error/error.js';
// import { authUser } from './controllers/auth/auth.js';
export const app = express();



connectToDB();
// SyncDB();


app.use(cors({
    origin: 'http://localhost:7000',
    // methods: ['GET', 'POST', 'PUT', 'DELETE'],
    // allowedHeaders: ['Content-Type', 'Authorization']
}));
app.options("*",cors())
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/campaign',express.static('public/campaign/images'))

app.get("/",(req,res)=>{
    res.send("Welcome to fundrise app")
});

app.use('/api/login',loginRoute);
app.use('/api/register',registerRoute);
app.use('/api/initialize',initialRoute);
app.use('/api/campaign/create',createCampaignRoute);
app.use('/api/campaign/getAll',getAllCampaigns)


// Errors
app.use(errorHandler)




const port = process.env.PORT  || 5000;

app.listen(port,()=>{
    console.log("Listening for requests")
})