import connection from "../config/connection.js";

export async function inserirLog(acao, usuario_id) {
    const comando = `
        insert into tb_log (acao, usuario_id)
					        values (?, ?)
    `;

    let resposta = await connection.query(comando, [acao, usuario_id])
    let info = resposta[0];

    return info.insertId;
}

export async function listarLogs() {
    const comando = `
        select
            id,
            acao,
            usuario_id,
            data
        from tb_log
        order by data desc
    `;

    let registros = await connection.query(comando)
    return registros[0];
}
