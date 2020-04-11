import 'dotenv/config';
import express, { request } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import routes from './routes';
var fetch = require('node-fetch');

const app = express();
app.use(helmet());
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.header("Allow-Control-Allow-Origin", process.env.ORIGIN || "*");
  next();
})

app.use('/city', routes.city);
app.use('/zip', routes.zip);
app.use('/map', routes.map);
app.use('/', (req, res) => res.send("Welcome to a simple api proxy"));


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}!`);
})

console.log('Hello ever running Node.js project.');
console.log(process.env.MY_SECRET);