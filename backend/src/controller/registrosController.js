import * as repo from '../repository/registrosRepository.js';

import { Router } from "express";
import { autenticar } from '../utils/jwt.js';
const endpoints = Router();

endpoints.get('/livros/', autenticar, async (req, resp) => {
    try {
        let livros = await repo.listarLivros();
        resp.send(livros)
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.post('/livros/', autenticar, async (req, resp) => {
    try {
        if (!req.user.adm) {
            resp.status(403).send({
                erro: "Apenas administradores podem publicar livros"
            })
            return;
        }

        let livro = req.body;
        let id = await repo.inserirLivro(livro);

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
