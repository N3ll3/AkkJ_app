-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:3306
-- Généré le :  Dim 20 oct. 2019 à 10:24
-- Version du serveur :  5.7.19
-- Version de PHP :  7.1.9

SET SQL_MODE
= "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT
= 0;
START TRANSACTION;
SET time_zone
= "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `akkj`
--

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE
IF NOT EXISTS `user` (
  `id` int
(11) NOT NULL AUTO_INCREMENT,
  `email` varchar
(180) COLLATE utf8mb4_unicode_ci NOT NULL,
  `roles` varchar
(255) NOT NULL,
  `password` varchar
(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `username` varchar
(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY
(`id`),
  UNIQUE KEY `UNIQ_8D93D649E7927C74`
(`email`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user`
  (`id`, `email
  `, `roles`, `password`, `username`) VALUES
(15, 'admin2@yopmail.fr', '[\"ROLE_ADMIN\", \"ROLE_USER\"]', '$2y$13$tlOwyvbicJiwiuBWjuxubOyqSWDddgn.XsMrXRjLJEIkNX7kkn6yS', 'admin2');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
