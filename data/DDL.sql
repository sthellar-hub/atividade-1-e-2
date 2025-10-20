# DATA DEFINITION LANGUAGE

DROP DATABASE IF EXISTS LivrariaDB;

CREATE DATABASE LivrariaDB;

USE LivrariaDB;

CREATE TABLE tb_livro (
	id int primary key auto_increment not null,
    titulo varchar(255) not null,
    autor varchar(255) not null,
    capa_url varchar(255) not null
);

CREATE TABLE tb_usuario (
	id int primary key auto_increment not null,
    usuario varchar(255) not null,
    senha varchar(255) not null
);
