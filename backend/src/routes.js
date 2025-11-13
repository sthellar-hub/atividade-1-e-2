import usuarioController from './controller/userController.js'
import admController from './controller/admController.js'
import registrosController from './controller/logController.js'

export default function adicionarRotas(api) {
    api.use(usuarioController);
    api.use('/adm', admController);
    api.use('/registros', registrosController);
}
