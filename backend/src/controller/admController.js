import { gerarToken } from '../utils/jwt.js';

import * as db from '../repository/admRepository.js';

import { Router } from "express";
const endpoints = Router();

endpoints.post('/entrar', async (req, resp) => {
    try {
        let pessoa = req.body;
        let adm = await db.validarAdm(pessoa);

        if (adm == null) {
            resp.status(401).send({ erro: "Usuário ou senha incorreto(s)" })
        } else {
            let token = gerarToken(adm);
            resp.send({
                "adm": adm,
                "token": token
            })
        }
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.post('/', async (req, resp) => {
    try {
        let pessoa = req.body;
        let id = await db.inserirAdm(pessoa);

        resp.send({
            novoId: id
        })
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

export default endpoints;