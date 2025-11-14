import usuarioController from './src/controller/userController.js'
import admController from './src/controller/admController.js'
import registrosController from './src/controller/logController.js'

export default function adicionarRotas(api) {
    api.use(usuarioController);
    api.use('/adm', admController);
    api.use('/registros', registrosController);
}
