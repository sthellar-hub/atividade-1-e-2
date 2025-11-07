import usuarioController from './controller/usuarioController.js'
import admController from './controller/admController.js'
import registrosController from './controller/registrosController.js'

export default function adicionarRotas(servidor) {
    servidor.use(usuarioController);
    servidor.use('/adm', admController);
    servidor.use(registrosController);
}
