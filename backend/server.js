import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import {connectToDB} from './config/db.js';
import { SyncDB } from './services/db/sync.js';
import {
    loginRoute,
    registerRoute
} from './routes/index.js';
const app = express();



connectToDB();
SyncDB();


app.use(cors({
    origin: 'http://localhost:4000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.options("*",cors())
app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.get("/", (req,res)=>{
    res.send('Welcome to fundrise app')

});

app.use('/login',loginRoute);
app.use('/register',registerRoute);




const port = process.env.PORT  || 5000;

app.listen(port,()=>{
    console.log("Listening for requests")
})