import usuarioController from './controller/usuarioController.js'
import livroController from './controller/livroController.js'

export default function adicionarRotas(servidor) {
    servidor.use(usuarioController);
    servidor.use(livroController);
}