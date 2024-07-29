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
    getAllCampaigns,
    getAllCategories,
    getCampaignById,
    makeDonation
} from './routes/index.js';
import errorHandler from './middlewares/error/error.js';
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

app.get("/",getAllCampaigns);

app.use('/api/login',loginRoute);
app.use('/api/register',registerRoute);
app.use('/api/initialize',initialRoute);
app.use('/api/campaign/create',createCampaignRoute);
app.use('/api/campaign/getAll',getAllCampaigns);
app.use('/api/categories/getAll',getAllCategories);
app.use('/api/campaign/getById',getCampaignById);
app.use('/api/donate',makeDonation);



// Errors
app.use(errorHandler)




const port = process.env.PORT  || 5000;

app.listen(port,()=>{
    console.log("Listening for requests")
})