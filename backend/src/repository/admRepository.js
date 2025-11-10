import connection from "./connection.js";
import crypto from "crypto-js";

export async function inserirAdm(pessoa) {
    const comandoVerificar = `
        select id from tb_adm where adm = ?
    `;

    let registros = await connection.query(comandoVerificar, [pessoa.adm]);
    if (registros[0].length > 0) {
        throw new Error("Administrador já existe");
    }

    const comando = `
        insert into tb_adm (adm, senha)
					        values (?, ?)
    `;

    let hash = crypto.SHA256(pessoa.senha).toString();

    let resposta = await connection.query(comando, [pessoa.adm, hash])
    let info = resposta[0];

    return info.insertId;
}

export async function validarAdm(pessoa) {
    const comando = `
        select
            id,
            adm
        from tb_adm
        where
            adm = ?
            and senha = ?
    `;

    let hash = crypto.SHA256(pessoa.senha).toString();

    let registros = await connection.query(comando, [pessoa.adm, hash])
    return registros[0][0];
}

export async function listarAdms() {
    const comando = `
        select
            id,
            adm
        from tb_adm
    `;

    let registros = await connection.query(comando)
    return registros[0];
}
