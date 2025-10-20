import usuarioController from './controller/usuarioController.js'
import livroController from './controller/livroController.js'
import admController from './controller/admController.js'

export default function adicionarRotas(servidor) {
    servidor.use(usuarioController);
    servidor.use(livroController);
    servidor.use('/adm', admController);
}
