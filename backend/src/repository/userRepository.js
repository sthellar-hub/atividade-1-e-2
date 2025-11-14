import connection from "../config/connection.js";
import crypto from "crypto-js";

export async function inserirUsuario(pessoa) {
    const comandoVerificar = `
        select id from tb_usuario where usuario = ?
    `;

    let registros = await connection.query(comandoVerificar, [pessoa.usuario]);
    if (registros[0].length > 0) {
        throw new Error("Usuário já existe");
    }

    const comando = `
        insert into tb_usuario (usuario, senha)
					        values (?, ?)
    `;

    let hash = crypto.SHA256(pessoa.senha).toString();

    let resposta = await connection.query(comando, [pessoa.usuario, hash])
    let info = resposta[0];

    return info.insertId;
}

export async function validarUsuario(pessoa) {
    const comando = `
        select
            id,
            usuario
        from tb_usuario
        where
            usuario = ?
            and senha = ?
    `;

    let hash = crypto.SHA256(pessoa.senha).toString();

    let registros = await connection.query(comando, [pessoa.usuario, hash])
    return registros[0][0];
}

export async function listarUsuarios() {
    const comando = `
        select
            id,
            usuario
        from tb_usuario
    `;

    let registros = await connection.query(comando)
    return registros[0];
}
