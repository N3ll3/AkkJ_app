-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:3306
-- Généré le :  jeu. 17 oct. 2019 à 20:38
-- Version du serveur :  5.7.19
-- Version de PHP :  7.1.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `akkj`
--

-- --------------------------------------------------------

--
-- Structure de la table `mechanism`
--

DROP TABLE IF EXISTS `mechanism`;
CREATE TABLE IF NOT EXISTS `mechanism` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=64 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `mechanism`
--

INSERT INTO `mechanism` (`id`, `name`) VALUES
(10, 'Acting'),
(11, 'Action / Movement Programming'),
(12, 'Action Point Allowance System'),
(13, 'Area Control / Area Influence'),
(14, 'Area Enclosure'),
(15, 'Area Movement'),
(16, 'Area-Impulse'),
(17, 'Auction/Bidding'),
(18, 'Betting/Wagering'),
(19, 'Campaign / Battle Card Driven'),
(20, 'Card Drafting'),
(21, 'Chit-Pull System'),
(22, 'Commodity Speculation'),
(23, 'Cooperative Play'),
(24, 'Crayon Rail System'),
(25, 'Deck / Pool Building'),
(26, 'Dice Rolling'),
(27, 'Grid Movement'),
(28, 'Hand Management'),
(29, 'Hex-and-Counter'),
(30, 'Hidden Traitor'),
(31, 'Line Drawing'),
(32, 'Memory'),
(33, 'Modular Board'),
(34, 'Paper-and-Pencil'),
(35, 'Partnerships'),
(36, 'Pattern Building'),
(37, 'Pattern Recognition'),
(38, 'Pick-up and Deliver'),
(39, 'Player Elimination'),
(40, 'Point to Point Movement'),
(41, 'Press Your Luck'),
(42, 'Rock-Paper-Scissors'),
(43, 'Role Playing'),
(44, 'Roll / Spin and Move'),
(45, 'Rondel'),
(46, 'Route/Network Building'),
(47, 'Secret Unit Deployment'),
(48, 'Set Collection'),
(49, 'Simulation'),
(50, 'Simultaneous Action Selection'),
(51, 'Singing'),
(52, 'Stock Holding'),
(53, 'Storytelling'),
(54, 'STR-01 Competitive Games'),
(55, 'Take That'),
(56, 'Tile Placement'),
(57, 'Time Track'),
(58, ' Trading'),
(59, 'Trick-taking'),
(60, 'Variable Phase Order'),
(61, 'Variable Player Powers'),
(62, 'Voting'),
(63, 'Worker Placement');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
