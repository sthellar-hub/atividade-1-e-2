import con from "./connection.js";

export async function listarLivros() {
    const comando = `
        select
            id,
            titulo,
            autor,
            capa_url
        from tb_livro
    `;

    let registros = await con.query(comando);
    return registros[0];
}

export async function inserirLivro(livro) {
    const comando = `
        insert into tb_livro (titulo, autor, capa_url)
        values (?, ?, ?)
    `;

    let resposta = await con.query(comando, [livro.titulo, livro.autor, livro.capa_url]);
    let info = resposta[0];

    return info.insertId;
}
