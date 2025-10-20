import con from "./connection.js";

export async function listarLivros() {
    const comando = `
        select * from tb_livro;
    `;

    let resposta = await con.query(comando)
    let info = resposta[0];
    
    return info;
}