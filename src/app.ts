import * as dotenv from 'dotenv';
import express from 'express';
import bodyParser from "body-parser";
import ExpressRotuer from './express.router';
import connectDB from './config/database';
import errorHandler from './middleware/error.middleware';

dotenv.config();

const app = express();
const expressRoutes = new ExpressRotuer(app);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(errorHandler);
expressRoutes.init();
connectDB();

const port = process.env.PORT || 2500;

app.listen(port, () => {
  console.log(`                                                
  _____         _     _____            _____     
 |     |_ _ ___|_|___|  _  |___ ___   |     |___ 
 | | | | | |_ -| |  _|     | . | . |  |  |  |   |
 |_|_|_|___|___|_|___|__|__|  _|  _|  |_____|_|_|
                           |_| |_|               
 
 `)
  console.log(`Running on port ${port}!`);
});


export default app;