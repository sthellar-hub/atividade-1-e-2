# DATA DEFINITION LANGUAGE

DROP DATABASE IF EXISTS TrabalhoDB;

CREATE DATABASE TrabalhoDB;

USE TrabalhoDB;

CREATE TABLE tb_usuario (
	id int primary key auto_increment not null,
    usuario varchar(255) not null,
    senha varchar(255) not null
);

CREATE TABLE tb_adm (
	id int primary key auto_increment not null,
    adm varchar(255) not null,
    senha varchar(255) not null
);

CREATE TABLE tb_log (
	id int primary key auto_increment not null,
    acao varchar(255) not null,
    usuario_id int,
    data datetime default current_timestamp,
    foreign key (usuario_id) references tb_usuario(id)
);
