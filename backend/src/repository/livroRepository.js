import con from "./connection.js";

export async function listarLivros() {
    const comando = `
        select * from tb_livro;
    `;

    let resposta = await con.query(comando)
    let info = resposta[0];

    return info;
}

export async function inserirLivro(livro) {
    const comando = `
        insert into tb_livro (titulo, autor, capa_url)
        values (?, ?, ?)
    `;

    let resposta = await con.query(comando, [livro.titulo, livro.autor, livro.capa_url])
    let info = resposta[0];

    return info.insertId;
}
