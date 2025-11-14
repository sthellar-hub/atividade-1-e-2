import { gerarToken } from '../utils/jwt.js';

import * as repo from '../repository/userRepository.js';
import * as logRepo from '../repository/logRepository.js';

import { Router } from "express";
const endpoints = Router();

endpoints.post('/entrar/', async (req, resp) => {
    try {
        let pessoa = req.body;
        let usuario = await repo.validarUsuario(pessoa);

        if (usuario == null) {
            resp.send({ erro: "Usuário ou senha incorreto(s)" })
        } else {
            let token = gerarToken(usuario);
            await logRepo.inserirLog(`Usuário ${usuario.usuario} fez login`, usuario.id);
            resp.send({
                "usuario": usuario,
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

endpoints.post('/usuario/', async (req, resp) => {
    try {
        let pessoa = req.body;
        let id = await repo.inserirUsuario(pessoa);
        await logRepo.inserirLog(`Novo usuário ${pessoa.usuario} cadastrado`, id);

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

endpoints.get('/usuarios/', async (req, resp) => {
    try {
        let usuarios = await repo.listarUsuarios();
        resp.send(usuarios);
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

export default endpoints;
