import { gerarToken } from '../utils/jwt.js';

import * as repo from '../repository/admRepository.js';
import * as logRepo from '../repository/logRepository.js';

import { Router } from "express";
const endpoints = Router();

endpoints.post('/entrar', async (req, resp) => {
    try {
        let pessoa = req.body;
        let adm = await repo.validarAdm(pessoa);

        if (adm == null) {
            resp.status(401).send({ erro: "Usuário ou senha incorreto(s)" })
        } else {
            let token = gerarToken(adm);
            await logRepo.inserirLog(`Administrador ${adm.adm} fez login`, adm.id);
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
        let id = await repo.inserirAdm(pessoa);
        await logRepo.inserirLog(`Novo administrador ${pessoa.adm} cadastrado`, id);

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

endpoints.get('/', async (req, resp) => {
    try {
        let adms = await repo.listarAdms();
        resp.send(adms);
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

export default endpoints;
