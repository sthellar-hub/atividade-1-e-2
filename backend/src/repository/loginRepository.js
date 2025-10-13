import { connection } from "./connection.js";


export async function consultarCredenciais(email, senha) {
  const comando = `
    SELECT id,
           email,
           role,
           criacao
      FROM login
     WHERE email = ?
       and senha = MD5(?)
  `;

  const [registros] = await connection.query(comando, [email, senha]);
  return registros[0];
}


export async function criarConta(novoLogin) {
  const comando = `
    INSERT INTO login (email, senha, role, criacao)
               VALUES (?, MD5(?), ?, ?);
  `;

  const [info] = await connection.query(comando, [
    novoLogin.email,
    novoLogin.senha,
    novoLogin.role,
    new Date()
  ]);
  return info.insertId;
}
