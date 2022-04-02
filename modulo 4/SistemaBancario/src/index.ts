
import express, {Request, Response} from 'express'; 
import cors from 'cors';
// import { users } from './data';
  

const app = express();

app.use(express.json());
app.use(cors());