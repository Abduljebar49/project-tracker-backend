import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import logger from 'morgan';
import userRoute from './routes/user.js'
dotenv.config();

const port = process.env.PORT;

const app: Express = express();
app.use(express.json());
app.use(logger('dev'));
app.use(express.static("./public"));
app.use('/api',userRoute);
app.listen(3000,()=>console.log("listening on port 3000"));