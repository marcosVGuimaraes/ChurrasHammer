CREATE DATABASE churras_hammer;

CREATE TABLE `compras` (
  `id_compra` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `descricao` varchar(150) NOT NULL,
  `categoria` varchar(7) NOT NULL,
  `valor` decimal(7,2) NOT NULL,
  `data_cadastro` datetime NOT NULL DEFAULT current_timestamp()
);


INSERT INTO `compras` (`id_compra`, `descricao`, `categoria`, `valor`, `data_cadastro`) VALUES
(1, 'Picanha', 'comida', '50.50', '2021-01-17 23:04:35'),
(7, 'Cerveja Itaipava', 'Bebida', '50.00', '2021-01-18 03:07:36'),
(12, 'Frango', 'comida', '89.99', '2021-01-18 14:50:19');



CREATE TABLE `convidado` (
  `id_convidado` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `id_participante` int(11) NOT NULL,
  `nome` varchar(100) NOT NULL,
  `consumo_bebida` tinyint(1) NOT NULL,
  `data_cadastro` datetime NOT NULL DEFAULT current_timestamp()
);


INSERT INTO `convidado` (`id_convidado`, `id_participante`, `nome`, `consumo_bebida`, `data_cadastro`) VALUES
(1, 1, 'Mariana Guimarães', 0, '2021-01-15 13:35:16'),
(9, 5, 'Fabia', 1, '2021-01-17 22:45:44'),


CREATE TABLE `participantes` (
  `id_participante` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `nome_participante` varchar(100) NOT NULL,
  `setor` varchar(50) NOT NULL,
  `consumo_bebida` tinyint(1) NOT NULL,
  `data_cadastro` datetime NOT NULL DEFAULT current_timestamp()
);


INSERT INTO `participantes` (`id_participante`, `nome_participante`, `setor`, `consumo_bebida`, `data_cadastro`) VALUES
(1, 'Marcos Guimarães', 'Desenvolvimento Web', 1, '0000-00-00 00:00:00'),
(5, 'Andreia Menezes', 'RH', 1, '2021-01-17 17:45:59'),
(10, 'Caio Lago', 'Contabilidade', 0, '2021-01-18 14:37:12');

