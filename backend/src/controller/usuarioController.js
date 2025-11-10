import { gerarToken } from '../utils/jwt.js';

import * as repo from '../repository/usuarioRepository.js';

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
