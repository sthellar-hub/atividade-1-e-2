import loginController from './controller/loginController'

export function adicionarRotas(api) {
    api.use(loginController)

    
}