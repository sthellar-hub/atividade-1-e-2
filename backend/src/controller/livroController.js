import * as db from '../repository/livroRepository.js';

import { Router } from "express";
import { autenticar } from '../utils/jwt.js';
const endpoints = Router();

endpoints.get('/livros/', autenticar, async (req, resp) => {
    try {
        let livros = await db.listarLivros();
        resp.send(livros)
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

export default endpoints;