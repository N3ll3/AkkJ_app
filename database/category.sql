-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:3306
-- Généré le :  jeu. 17 oct. 2019 à 20:37
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
-- Structure de la table `category`
--

DROP TABLE IF EXISTS `category`;
CREATE TABLE IF NOT EXISTS `category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=139 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `category`
--

INSERT INTO `category` (`id`, `name`) VALUES
(55, 'Abstract Strategy'),
(56, 'Action / Dexterity'),
(57, 'Adventure'),
(58, 'Age of Reason'),
(59, 'American Civil War'),
(60, 'American Indian Wars'),
(61, 'American Revolutionary War'),
(62, 'American West'),
(63, 'Ancient'),
(64, 'Animals'),
(65, 'Arabian'),
(66, 'Aviation / Flight'),
(67, 'Bluffing'),
(68, 'Book'),
(69, 'Card Game'),
(70, 'Children\'s Game'),
(71, 'City Building'),
(72, 'Civil War'),
(73, 'Civilization'),
(74, 'Collectible Components'),
(75, 'Comic Book / Strip'),
(76, 'Deduction'),
(77, 'Dice'),
(78, 'Economic'),
(79, 'Educational'),
(80, 'Electronic'),
(81, 'Environmental'),
(82, 'Expansion for Base-game'),
(83, 'Exploration'),
(84, 'Fan Expansion'),
(85, 'Fantasy'),
(86, 'Farming'),
(87, 'Fighting'),
(88, 'Game System'),
(89, 'Horror'),
(90, 'Humor'),
(91, 'Industry / Manufacturing'),
(92, 'Korean War'),
(93, 'Mafia'),
(94, 'Math'),
(95, 'Mature / Adult'),
(96, 'Maze'),
(97, 'Medical'),
(98, 'Medieval'),
(99, 'Memory'),
(100, 'Miniatures'),
(101, ' Modern Warfare'),
(102, 'Movies / TV / Radio theme'),
(103, 'Murder/Mystery'),
(104, 'Music'),
(105, 'Mythology'),
(106, 'Napoleonic'),
(107, 'Nautical'),
(108, 'Negotiation'),
(109, 'Novel-based'),
(110, 'Number'),
(111, 'Party Game'),
(112, 'Pike and Shot'),
(113, 'Pirates'),
(114, 'Political'),
(115, 'Post-Napoleonic'),
(116, 'Prehistoric'),
(117, 'Print & Play'),
(118, 'Puzzle'),
(119, 'Racing'),
(120, 'Real-time'),
(121, 'Religious'),
(122, 'Renaissance'),
(123, 'Science Fiction'),
(124, 'Space Exploration'),
(125, 'Spies/Secret Agents'),
(126, 'Sports'),
(127, 'Territory Building'),
(128, 'Trains'),
(129, 'Transportation'),
(130, 'Travel'),
(131, 'Trivia'),
(132, 'Video Game Theme'),
(133, 'Vietnam War'),
(134, 'Wargame'),
(135, 'Word Game'),
(136, 'World War I'),
(137, 'World War II'),
(138, 'Zombies');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
