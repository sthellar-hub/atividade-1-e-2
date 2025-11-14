import * as repo from '../repository/logRepository.js';

import { Router } from "express";
import { autenticar } from '../utils/jwt.js';
const endpoints = Router();

endpoints.post('/', async (req, resp) => {
    try {
        let log = req.body;
<<<<<<< HEAD
=======
        if (!log.acao || !log.usuario_id) {
            resp.status(400).send({
                erro: "Ação e usuário_id são obrigatórios"
            })
            return;
        }
>>>>>>> 02da750c61f62587dd4ef84393105d83bfd1f816
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
