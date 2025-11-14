import connection from "../config/connection.js";

<<<<<<< HEAD
export async function inserirLog(log) {
=======
export async function inserirLog(acao, usuario_id) {
>>>>>>> 02da750c61f62587dd4ef84393105d83bfd1f816
    const comando = `
        insert into tb_log (acao, usuario_id)
					        values (?, ?)
    `;

<<<<<<< HEAD
    let resposta = await connection.query(comando, [log.acao, log.usuario_id])
=======
    let resposta = await connection.query(comando, [acao, usuario_id])
>>>>>>> 02da750c61f62587dd4ef84393105d83bfd1f816
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
