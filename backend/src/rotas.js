import usuarioController from './controller/usuarioController.js'
import admController from './controller/admController.js'
import registrosController from './controller/registrosController.js'

export default function adicionarRotas(api) {
    api.use(usuarioController);
    api.use('/adm', admController);
    api.use(registrosController);
}
