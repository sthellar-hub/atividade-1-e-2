import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'

dotenv.config();

import adicionarRotas from './routes.js'

const api = express();
api.use(cors());
api.use(express.json());

adicionarRotas(api);

api.listen(process.env.PORT || 3001, () => console.log(`--> API subiu na porta ${process.env.PORT || 3001}`));
