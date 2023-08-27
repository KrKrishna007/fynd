import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

//components
import Connection from './database/db.js';
import Router from './routes/route.js';

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;


const PORT = 8000;




dotenv.config();

const app = express();

Connection(username, password);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', Router);





app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));