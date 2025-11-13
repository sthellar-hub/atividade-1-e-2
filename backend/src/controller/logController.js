import * as repo from '../repository/logRepository.js';

import { Router } from "express";
import { autenticar } from '../utils/jwt.js';
const endpoints = Router();

endpoints.post('/', async (req, resp) => {
    try {
        let log = req.body;
        let id = await repo.inserirLog(log.acao, log.usuario_id);

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

endpoints.get('/', autenticar, async (req, resp) => {
    try {
        let logs = await repo.listarLogs();
        resp.send(logs);
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

export default endpoints;
