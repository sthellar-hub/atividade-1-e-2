import con from "./connection.js";
import crypto from "crypto-js";

export async function inserirAdm(pessoa) {
    const comando = `
        insert into tb_adm (adm, senha) 
					        values (?, ?)
    `;

    let hash = crypto.SHA256(pessoa.senha).toString();
    
    let resposta = await con.query(comando, [pessoa.adm, hash])
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

    let registros = await con.query(comando, [pessoa.adm, hash])
    return registros[0][0];
}