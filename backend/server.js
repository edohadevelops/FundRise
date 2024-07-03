import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import {connectToDB} from './config/db.js';
import { SyncDB } from './services/db/sync.js';
import { default as associate} from './services/db/association.js';
import {
    loginRoute,
    registerRoute
} from './routes/index.js';
const app = express();

app.use(cors());
app.use(express.json())

connectToDB();
associate();
SyncDB();


app.get("/", (req,res)=>{
    res.send('Welcome to fundrise app')
});

app.use('/login',loginRoute);
app.use('/register',registerRoute);




const port = process.env.PORT  || 5000;

app.listen(port,()=>{
    console.log("Listening for requests")
})