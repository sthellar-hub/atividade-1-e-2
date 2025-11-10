import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'

dotenv.config();

import adicionarRotas from './rotas.js'

const api = express();
api.use(cors());
api.use(express.json());

adicionarRotas(api);

api.listen(process.env.PORTA, () => console.log(`--> API subiu na porta ${process.env.PORTA}`));