import * as repo from '../repository/livrosRepritory.js';
import { getAuthentication } from '../utils/jwt.js';
import { Router } from 'express'

const endpoints = Router();
const autenticador = getAuthentication();

endpoints.get('/curso', autenticador, async (req, resp) => {
    let registros = await repo.listarCursos();
    resp.send(registros);
  })
