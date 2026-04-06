-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Erstellungszeit: 06. Apr 2026 um 11:57
-- Server-Version: 10.4.32-MariaDB
-- PHP-Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Datenbank: `klub-der-tollen-tiere`
--

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `akademie`
--

CREATE TABLE `akademie` (
  `id` int(11) NOT NULL,
  `level` varchar(50) NOT NULL,
  `levelEn` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Daten für Tabelle `akademie`
--

INSERT INTO `akademie` (`id`, `level`, `levelEn`) VALUES
(1, 'keine', 'none'),
(2, 'Bronze', 'Bronze'),
(3, 'Silber', 'Silver'),
(4, 'Gold', 'Gold'),
(5, 'Platin', 'Platinum');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `contest_statuen`
--

CREATE TABLE `contest_statuen` (
  `id` int(11) NOT NULL,
  `wettbewerbId` int(11) NOT NULL,
  `statueId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `farbvarianten`
--

CREATE TABLE `farbvarianten` (
  `id` int(11) NOT NULL,
  `tierId` int(11) NOT NULL,
  `herkunftId` int(11) NOT NULL,
  `release` varchar(20) DEFAULT NULL,
  `bild` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Daten für Tabelle `farbvarianten`
--



-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `farbvarianten_texte`
--

CREATE TABLE `farbvarianten_texte` (
  `id` int(11) NOT NULL,
  `farbvarianteId` int(11) NOT NULL,
  `spracheCode` varchar(191) NOT NULL,
  `name` varchar(191) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Daten für Tabelle `farbvarianten_texte`
--



-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `gehege`
--

CREATE TABLE `gehege` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `nameEn` varchar(50) NOT NULL,
  `namegehege` varchar(50) NOT NULL,
  `namegehegeEn` varchar(50) NOT NULL,
  `pfad` varchar(50) NOT NULL,
  `preis` int(11) DEFAULT NULL,
  `preisartId` int(11) DEFAULT NULL,
  `kostenvergroesserung` int(11) DEFAULT NULL,
  `preisartvergroesserungId` int(11) DEFAULT NULL,
  `platzbedarf` int(11) DEFAULT NULL,
  `hintergrundfarbe` varchar(10) NOT NULL,
  `schriftfarbe` varchar(10) NOT NULL,
  `bild` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Daten für Tabelle `gehege`
--


-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `gehegedeko`
--

CREATE TABLE `gehegedeko` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `name-en` varchar(255) DEFAULT NULL,
  `gehege` int(11) NOT NULL,
  `preis` int(11) DEFAULT NULL,
  `preisart` int(11) DEFAULT NULL,
  `popularitaet` int(11) DEFAULT NULL,
  `platzbedarf` int(11) DEFAULT NULL,
  `bild` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `gehegespielgeraet`
--

CREATE TABLE `gehegespielgeraet` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `nameEn` varchar(255) DEFAULT NULL,
  `gehegeId` int(11) NOT NULL,
  `preis` int(11) DEFAULT NULL,
  `preisartId` int(11) DEFAULT NULL,
  `reparatur` int(11) DEFAULT NULL,
  `reparaturpreisartId` int(11) DEFAULT NULL,
  `bild` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Daten für Tabelle `gehegespielgeraet`
--

INSERT INTO `gehegespielgeraet` (`id`, `name`, `nameEn`, `gehegeId`, `preis`, `preisartId`, `reparatur`, `reparaturpreisartId`, `bild`) VALUES
(101, 'Spielgrube', 'Play mudhole', 100, 2000, 1, 100, 1, 'gras-spielgrube.jpeg'),
(102, 'Spielteich', 'Play pond', 100, 5, 2, 100, 1, 'gras-spielteich.jpeg'),
(103, 'Spielstamm', 'Play trunk', 100, 2000, 1, 100, 1, 'gras-spielstamm.jpeg'),
(104, 'Spielbaum', 'Play tree', 100, 2000, 1, 100, 1, 'gras-spielbaum.jpeg'),
(105, 'Spielbalken', 'Play hurdle', 100, 2000, 1, 100, 1, 'gras-spielbalken.jpeg'),
(201, 'Spielpfahl', 'Play totem', 200, 4000, 1, 350, 1, 'steppe-spielpfahl.jpeg'),
(202, 'Speilhügel', 'Play hill', 200, 12, 2, 350, 1, 'steppe-spielhuegel.jpeg'),
(301, 'Spielseile', 'Play rope', 300, 8000, 1, 200, 1, 'wald-spielseil.jpg'),
(302, 'Spielfelsen', 'Play rocks', 300, 8000, 1, 200, 1, 'wald-spielfelsen.jpeg'),
(303, 'Spielbaum', 'Play tree', 300, 20, 2, 200, 1, 'wald-spielbaum.jpeg'),
(401, 'Spielbaum', 'Play Tree', 400, 32, 2, 500, 1, 'berg-spielbaum.jpeg'),
(402, 'Spielfelsen', 'Play rocks', 400, 12000, 1, 500, 1, 'berg-spielfelsen.jpeg'),
(501, 'Spielfelsen', 'Play plateau', 500, 16000, 1, 750, 1, 'savanne-spielfelsen.jpg'),
(502, 'Spielbaum', 'Play tree', 500, 16000, 1, 750, 1, 'savanne-spielbaum.jpeg'),
(503, 'Spielgrube', 'Play mudhole', 500, 45, 2, 750, 1, 'savanne-spielgrube.jpeg'),
(504, 'Spielteich', 'Play pond', 500, 50, 2, 750, 1, 'savanne-spielteich.jpeg'),
(601, 'Spielschaukel', 'Play swing', 600, 50, 2, 1000, 1, 'dschungel-spielschaukel.jpeg'),
(602, 'Spielstämme', 'Play structure', 600, 50, 2, 1000, 1, 'dschungel-spielstaemme.jpeg'),
(603, 'Spielstein', 'Play island', 600, 50, 2, 1000, 1, 'dschungel-spielstein.jpeg'),
(701, 'Eisrutsche', 'Ice slide', 700, 55, 2, 1250, 1, 'eis-eisrutsche.jpeg'),
(702, 'Spielfelsen', 'Play rocks', 700, 60, 2, 1250, 1, 'eis-spielfelsen.jpeg'),
(703, 'Spielseile', 'Play ropes', 700, 58, 2, 1250, 1, 'eis-spielseile.jpeg'),
(801, 'Spielinsel', 'Play island', 800, 58, 2, 1500, 1, 'wasser-spielinsel.jpeg'),
(802, 'Spielbogen', 'Play arch', 800, 22000, 1, 1500, 1, 'wasser-spielboden.jpeg'),
(1101, 'Spielrad', 'Play wheel', 1100, 50, 2, 1150, 1, 'blattdickicht-spielrad.jpeg'),
(1102, 'Spielgebüsch', 'Play leaf pile', 1100, 15000, 1, 1150, 1, 'balttdickicht-spielgebuesch.jpeg'),
(1201, 'Spielwippe', 'Play see-saw', 1200, 55, 2, 1350, 1, 'felsenwueste-spielwippe.jpeg'),
(1202, 'Spielfelsen', 'Play rocks', 1200, 55, 2, 1350, 1, 'felsenwueste-spielfelsen.jpeg'),
(2101, 'Spielwrack', 'Play wreck', 2100, 60, 2, 1150, 1, 'suesswasser-spielwrack.jpeg'),
(2102, 'Spielpflanze', 'Play plant', 2100, 35000, 1, 1150, 1, 'suesswasser-spielpflanze.jpeg'),
(2201, 'Spielbogen', 'Play arch', 2100, 65, 2, 1350, 1, 'salzwasser-spielbogen.jpeg'),
(2202, 'Spielsteuerrad', 'Ships play wheel', 2200, 65, 2, 1350, 1, 'salzwasser- spielsteuerrad.jpeg'),
(3101, 'Spielzeug', 'Toy', 3100, 60, 2, 1350, 1, 'noctarium-spielzeug.jpeg');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `gehegestall`
--

CREATE TABLE `gehegestall` (
  `id` int(11) NOT NULL,
  `gehege` int(11) NOT NULL,
  `preis` int(11) DEFAULT NULL,
  `preisart` int(11) DEFAULT NULL,
  `level1` int(11) DEFAULT NULL,
  `preisartlevel1` int(11) DEFAULT NULL,
  `updatezeit1` int(11) DEFAULT NULL,
  `level2` int(11) DEFAULT NULL,
  `preisartlevel2` int(11) DEFAULT NULL,
  `updatezeit2` int(11) DEFAULT NULL,
  `level3` int(11) DEFAULT NULL,
  `preisartlevel3` int(11) DEFAULT NULL,
  `updatezeit3` int(11) DEFAULT NULL,
  `bild` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `gehegetrog`
--

CREATE TABLE `gehegetrog` (
  `id` int(11) NOT NULL,
  `gehege` int(11) NOT NULL,
  `preis` int(11) DEFAULT NULL,
  `preisart` int(11) DEFAULT NULL,
  `bild` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `gehegewasserstelle`
--

CREATE TABLE `gehegewasserstelle` (
  `id` int(11) NOT NULL,
  `gehege` int(11) NOT NULL,
  `preis` int(11) DEFAULT NULL,
  `preisart` int(11) DEFAULT NULL,
  `reparatur` int(11) DEFAULT NULL,
  `reparaturpreisart` int(11) DEFAULT NULL,
  `bild` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `herkunft`
--

CREATE TABLE `herkunft` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `nameen` varchar(50) NOT NULL,
  `nametiere` varchar(50) NOT NULL,
  `bild` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Daten für Tabelle `herkunft`
--

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `klubrollen`
--


-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `mitglieder`
--

CREATE TABLE `mitglieder` (
  `id` int(11) NOT NULL,
  `upjersname` varchar(50) NOT NULL,
  `webseitename` varchar(50) DEFAULT NULL,
  `webseitenpasswort` varchar(100) DEFAULT NULL,
  `wikiname` varchar(50) DEFAULT NULL,
  `name` varchar(50) DEFAULT NULL,
  `upjersid` varchar(10) DEFAULT NULL,
  `sprache` varchar(20) DEFAULT NULL,
  `aktiv` varchar(5) NOT NULL,
  `seit` varchar(20) DEFAULT NULL,
  `klubstatus` int(11) DEFAULT NULL,
  `webseitestatus` int(11) DEFAULT NULL,
  `klubrang` int(11) DEFAULT NULL,
  `level` int(11) DEFAULT NULL,
  `akademie` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Daten für Tabelle `mitglieder`
--

INSERT INTO `mitglieder` (`id`, `upjersname`, `webseitename`, `webseitenpasswort`, `wikiname`, `name`, `upjersid`, `sprache`, `aktiv`, `seit`, `klubstatus`, `webseitestatus`, `klubrang`, `level`, `akademie`) VALUES
(1000, 'Ronny', 'Ronny', '', 'Ronny', 'Ronny Schneider', 'GxR-V0', 'de', 'ja', '21.05.2020', 3, 3, 20, 112, 5),
(2000, 'Luna', 'Luna', '$2y$10$qJPzvOfPTlc17VeTHPLz1uYTBJIFCOCsJia.0oiHqC2i9qFAPN9nK', 'Luna', 'Melanie Busse', 'lOUjf5', 'de', 'ja', '05.11.2020', 2, 3, 0, 114, 0),
(3000, 'Micha', 'Micha', '', 'Micha', 'Michael Meinel', 'rfiQmk', 'de', 'ja', '05.11.2020', 2, 2, 20, 120, 5),
(4000, 'Jonathan', 'Jonathan', '', 'Jonathan', 'Miriam Elsäßer', '4rO2ET', 'de', 'ja', '08.12.2020', 2, 2, 20, 111, 5),
(6000, 'PamsyMac', 'PamsyMac', '', 'PamsyMac', 'Pam Maclean', '3DRvoR', 'en', 'ja', '13.01.2021', 1, 1, 17, 104, 5),
(7000, 'Paul', 'Paul', '', 'Paul', 'Paul Macura', 'AYFE2A', 'de', 'ja', '16.08.2021', 1, 1, 20, 111, 5),
(8000, 'Claudi', 'Claudi', '', 'Claudi', 'Claudia Ko', 'Wtpi8n', 'de', 'ja', '11.09.2021', 1, 1, 20, 111, 5),
(9000, 'Idefix', 'Idefix', '', 'Idefix', 'Jenny Schäfer', 'DWIHrr', 'de', 'ja', '13.10.2021', 1, 2, 20, 113, 5),
(11000, 'LiLu', 'LiLu', '', 'LiLu', '', '', 'de', 'ja', '17.12.2023', 1, 1, 12, 109, 5),
(12000, 'Dries', 'Dries', '', 'Dries', '', 'HURC_7', 'en', 'ja', '21.02.2024', 1, 1, 9, 104, 5),
(14000, 'Kars', 'Kars', '', 'Kars', '', '', 'en', 'ja', '22.08.2024', 1, 1, 9, 97, 5),
(15000, 'Patricia', 'Patricia', '', 'Patricia', '', '', 'en', 'ja', '22.08.2024', 1, 1, 5, 96, 5),
(16001, 'Webse', NULL, NULL, NULL, NULL, NULL, NULL, 'ja', NULL, NULL, NULL, NULL, NULL, NULL),
(16002, 'GABBERHEAD', NULL, NULL, NULL, NULL, NULL, NULL, 'ja', NULL, NULL, NULL, NULL, NULL, NULL),
(16003, 'Jakob', NULL, NULL, NULL, NULL, NULL, NULL, 'ja', NULL, NULL, NULL, NULL, NULL, NULL),
(16004, 'JAKOB2', NULL, NULL, NULL, NULL, NULL, NULL, 'ja', NULL, NULL, NULL, NULL, NULL, NULL),
(16005, 'Jonathan2', NULL, NULL, NULL, NULL, NULL, NULL, 'ja', NULL, NULL, NULL, NULL, NULL, NULL),
(16006, 'Zoomiania', NULL, NULL, NULL, NULL, NULL, NULL, 'ja', NULL, NULL, NULL, NULL, NULL, NULL);


--
-- Tabellenstruktur für Tabelle `mitgliederrang`
--

CREATE TABLE `mitgliederrang` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `name-en` varchar(255) DEFAULT NULL,
  `level` int(11) NOT NULL,
  `exp-zum-naechsten-level` int(11) DEFAULT NULL,
  `bild` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Daten für Tabelle `mitgliederrang`
--

INSERT INTO `mitgliederrang` (`id`, `name`, `name-en`, `level`, `exp-zum-naechsten-level`, `bild`) VALUES
(1, 'Kleiner Hase', 'Small Bunny', 1, 0, ''),
(2, 'Schlauer Fux', 'Clever Fox', 2, 500, ''),
(3, 'Frecher Affe', 'Mischievous Monkey', 3, 1500, ''),
(4, 'Mächtiger Bär', 'Mighty Bear', 4, 3000, ''),
(5, 'Stolzer Löwe', 'Proud Lion', 5, 5500, ''),
(6, 'Eleganter Schwan', 'Elegant Swan', 6, 8500, ''),
(7, 'Kühner Adler', 'Bold Eagle', 7, 12500, ''),
(8, 'Unermütlicher Panda', 'Tireless Panda', 8, 18500, ''),
(9, 'Lebhafter Mandrill', 'Lively Mandrill', 9, 26500, ''),
(10, 'Fleissiges Rentier', 'Rugged Reindeer', 10, 36500, ''),
(11, 'Harter Wildhund', 'Tough Wild Dog', 11, 56500, ''),
(12, 'Kräftiges Bison', 'Strong Bison', 12, 96500, ''),
(13, 'Furchtloser Gepard', 'Fearless Cheetah', 13, 156500, ''),
(14, 'Cleverer Delfin', 'Brainy Dolphin', 14, 236500, ''),
(15, 'Entschlossener Komodowaran', 'Determined Komodo Dragon', 15, 336500, ''),
(16, 'Gutmütiger Elefant', 'Easygoing Elephant', 16, 0, ''),
(17, 'Heldenhafter Kaiserpinguin', 'Heroic Emperor Pengiun', 17, 0, ''),
(18, 'Unverzichtbarer Bengal Tiger', 'Indispensable Bengal Tiger', 18, 0, ''),
(19, 'Legendärer Weißer Tiger', 'Legendary White Tiger', 19, 0, ''),
(20, 'Sagenhafter Malteser Tiger', 'Mythical Maltese Tiger', 20, 0, '');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `mitgliederstatuen`
--

CREATE TABLE `mitgliederstatuen` (
  `id` int(11) NOT NULL,
  `statueId` int(11) NOT NULL,
  `mitgliederId` int(11) NOT NULL,
  `puzzleteile` int(11) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Daten für Tabelle `mitgliederstatuen`
--



-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `mitgliederwettbewerbfarbvarianten`
--

CREATE TABLE `mitgliederwettbewerbfarbvarianten` (
  `id` int(11) NOT NULL,
  `farbId` int(11) NOT NULL,
  `mitgliederId` int(11) NOT NULL,
  `puzzleteile` varchar(20) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Daten für Tabelle `mitgliederwettbewerbfarbvarianten`
--



-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `preisart`
--

CREATE TABLE `preisart` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `nameen` varchar(50) DEFAULT NULL,
  `bild` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Daten für Tabelle `preisart`
--

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `sprachen`
--

CREATE TABLE `sprachen` (
  `code` varchar(5) NOT NULL,
  `name` varchar(50) NOT NULL,
  `flagge` varchar(191) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Daten für Tabelle `sprachen`
--

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `tiere`
--

CREATE TABLE `tiere` (
  `id` int(11) NOT NULL,
  `gehegeId` int(11) NOT NULL,
  `spielgeraetId` int(11) DEFAULT NULL,
  `stalllevel` int(11) DEFAULT NULL,
  `preis` int(11) DEFAULT NULL,
  `preisartId` int(11) DEFAULT NULL,
  `zuchtkosten` int(11) DEFAULT NULL,
  `zuchtdauer` int(11) DEFAULT NULL,
  `startprozent` int(11) DEFAULT NULL,
  `platzbedarf` int(11) DEFAULT NULL,
  `popularitaet` int(11) DEFAULT NULL,
  `verkaufswert` int(11) DEFAULT NULL,
  `auswildern` int(11) DEFAULT NULL,
  `release` varchar(10) DEFAULT NULL,
  `bild` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Daten für Tabelle `tiere`
--


-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `tierherkunft`
--

CREATE TABLE `tierherkunft` (
  `id` int(11) NOT NULL,
  `tierid` int(11) NOT NULL,
  `herkunftId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Daten für Tabelle `tierherkunft`
--



-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `tier_gehege_kapazitaet`
--

CREATE TABLE `tier_gehege_kapazitaet` (
  `tierId` int(11) NOT NULL,
  `anzahlTiere` int(11) NOT NULL,
  `felder` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Daten für Tabelle `tier_gehege_kapazitaet`
--



-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `tier_texte`
--

CREATE TABLE `tier_texte` (
  `id` int(11) NOT NULL,
  `tierId` int(11) NOT NULL,
  `spracheCode` varchar(5) NOT NULL,
  `name` varchar(255) NOT NULL,
  `beschreibung` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Daten für Tabelle `tier_texte`
--


-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `image` text DEFAULT NULL,
  `role` varchar(20) NOT NULL DEFAULT 'Besucher',
  `last_login` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Daten für Tabelle `users`
--

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `wettbewerbe`
--

CREATE TABLE `wettbewerbe` (
  `id` int(11) NOT NULL,
  `start` datetime(3) NOT NULL,
  `ende` datetime(3) NOT NULL,
  `aktiv` int(11) NOT NULL,
  `tierTeilgenommenId` varchar(20) DEFAULT NULL,
  `ergebnis` varchar(20) DEFAULT NULL,
  `platz` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `wettbewerbfarbvarianten`
--

CREATE TABLE `wettbewerbfarbvarianten` (
  `id` int(11) NOT NULL,
  `tierId` int(11) NOT NULL,
  `farbvarianteId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Daten für Tabelle `wettbewerbfarbvarianten`
--



-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `wettbewerbstatuen`
--

CREATE TABLE `wettbewerbstatuen` (
  `id` int(11) NOT NULL,
  `tierId` int(11) NOT NULL,
  `preis` int(20) DEFAULT NULL,
  `preisartId` int(20) DEFAULT NULL,
  `popularitaet` int(20) DEFAULT NULL,
  `verkaufspreis` int(20) DEFAULT NULL,
  `bild` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Daten für Tabelle `wettbewerbstatuen`
--



-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `wettbewerb_ergebnisse`
--

CREATE TABLE `wettbewerb_ergebnisse` (
  `id` int(11) NOT NULL,
  `contest_id` int(11) NOT NULL,
  `member_id` int(11) NOT NULL,
  `tier_id` int(11) NOT NULL,
  `level` int(11) NOT NULL,
  `anzahl` int(11) NOT NULL,
  `zeitpunkt` datetime(3) NOT NULL DEFAULT current_timestamp(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Daten für Tabelle `wettbewerb_ergebnisse`
--



-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `xp`
--

CREATE TABLE `xp` (
  `id` int(11) NOT NULL,
  `tierId` int(11) NOT NULL,
  `xpart` varchar(20) NOT NULL,
  `wert` int(11) DEFAULT NULL,
  `zeit` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Daten für Tabelle `xp`
--



-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `_prisma_migrations`
--

CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) NOT NULL,
  `checksum` varchar(64) NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) NOT NULL,
  `logs` text DEFAULT NULL,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `applied_steps_count` int(10) UNSIGNED NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indizes der exportierten Tabellen
--

--
-- Indizes für die Tabelle `akademie`
--
ALTER TABLE `akademie`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `akademieindex` (`id`);

--
-- Indizes für die Tabelle `contest_statuen`
--
ALTER TABLE `contest_statuen`
  ADD PRIMARY KEY (`id`),
  ADD KEY `contest_statuen_wettbewerbId_fkey` (`wettbewerbId`),
  ADD KEY `contest_statuen_statueId_fkey` (`statueId`);

--
-- Indizes für die Tabelle `farbvarianten`
--
ALTER TABLE `farbvarianten`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `farbvariantenindex` (`id`),
  ADD KEY `farbvarianten_tierId_idx` (`tierId`),
  ADD KEY `farbvarianten_herkunftId_fkey` (`herkunftId`);

--
-- Indizes für die Tabelle `farbvarianten_texte`
--
ALTER TABLE `farbvarianten_texte`
  ADD PRIMARY KEY (`id`),
  ADD KEY `farbvarianten_texte_farbvarianteId_fkey` (`farbvarianteId`);

--
-- Indizes für die Tabelle `gehege`
--
ALTER TABLE `gehege`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `gehegeindex` (`id`);

--
-- Indizes für die Tabelle `gehegedeko`
--
ALTER TABLE `gehegedeko`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `gehegedekoindex` (`id`);

--
-- Indizes für die Tabelle `gehegespielgeraet`
--
ALTER TABLE `gehegespielgeraet`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `gehegespielgeraetindex` (`id`);

--
-- Indizes für die Tabelle `gehegestall`
--
ALTER TABLE `gehegestall`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `gehegestallindex` (`id`);

--
-- Indizes für die Tabelle `gehegetrog`
--
ALTER TABLE `gehegetrog`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `gehegeTrogindex` (`id`);

--
-- Indizes für die Tabelle `gehegewasserstelle`
--
ALTER TABLE `gehegewasserstelle`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `gehegewasserstelleindex` (`id`);

--
-- Indizes für die Tabelle `herkunft`
--
ALTER TABLE `herkunft`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `herkunftindex` (`id`);

--
-- Indizes für die Tabelle `klubrollen`
--
ALTER TABLE `klubrollen`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `klubrollenindex` (`id`);

--
-- Indizes für die Tabelle `mitglieder`
--
ALTER TABLE `mitglieder`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Indizes für die Tabelle `mitgliederlevel20`
--
ALTER TABLE `mitgliederlevel20`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `mitgliederlevel20index` (`id`);

--
-- Indizes für die Tabelle `mitgliederrang`
--
ALTER TABLE `mitgliederrang`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Indizes für die Tabelle `mitgliederstatuen`
--
ALTER TABLE `mitgliederstatuen`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `mitgliederstatuenindex` (`id`);

--
-- Indizes für die Tabelle `mitgliederwettbewerbfarbvarianten`
--
ALTER TABLE `mitgliederwettbewerbfarbvarianten`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `mitgliederwettbewerbFarbvariantenindex` (`id`);

--
-- Indizes für die Tabelle `preisart`
--
ALTER TABLE `preisart`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `preisartindex` (`id`);

--
-- Indizes für die Tabelle `sprachen`
--
ALTER TABLE `sprachen`
  ADD PRIMARY KEY (`code`);

--
-- Indizes für die Tabelle `tiere`
--
ALTER TABLE `tiere`
  ADD PRIMARY KEY (`id`),
  ADD KEY `tiere_gehegeId_fkey` (`gehegeId`),
  ADD KEY `tiere_preisartId_fkey` (`preisartId`);

--
-- Indizes für die Tabelle `tierherkunft`
--
ALTER TABLE `tierherkunft`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `herkunftindex` (`id`),
  ADD KEY `tierherkunft_tierid_idx` (`tierid`),
  ADD KEY `tierherkunft_herkunftId_idx` (`herkunftId`);

--
-- Indizes für die Tabelle `tier_gehege_kapazitaet`
--
ALTER TABLE `tier_gehege_kapazitaet`
  ADD PRIMARY KEY (`tierId`,`anzahlTiere`);

--
-- Indizes für die Tabelle `tier_texte`
--
ALTER TABLE `tier_texte`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `tier_texte_tierId_spracheCode_key` (`tierId`,`spracheCode`);

--
-- Indizes für die Tabelle `users`
--
ALTER TABLE `users`
  ADD UNIQUE KEY `users_id_key` (`id`),
  ADD UNIQUE KEY `users_email_key` (`email`);

--
-- Indizes für die Tabelle `wettbewerbe`
--
ALTER TABLE `wettbewerbe`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `wettbewerbe` (`id`);

--
-- Indizes für die Tabelle `wettbewerbfarbvarianten`
--
ALTER TABLE `wettbewerbfarbvarianten`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `wettbewerbfarbvariantenindex` (`id`),
  ADD UNIQUE KEY `wettbewerbfarbvarianten_tierId_key` (`tierId`),
  ADD UNIQUE KEY `wettbewerbfarbvarianten_farbvarianteId_key` (`farbvarianteId`);

--
-- Indizes für die Tabelle `wettbewerbstatuen`
--
ALTER TABLE `wettbewerbstatuen`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `wettbewerbstatuenindex` (`id`),
  ADD UNIQUE KEY `wettbewerbstatuen_tierId_key` (`tierId`);

--
-- Indizes für die Tabelle `wettbewerb_ergebnisse`
--
ALTER TABLE `wettbewerb_ergebnisse`
  ADD PRIMARY KEY (`id`),
  ADD KEY `wettbewerb_ergebnisse_contest_id_idx` (`contest_id`),
  ADD KEY `wettbewerb_ergebnisse_member_id_idx` (`member_id`);

--
-- Indizes für die Tabelle `xp`
--
ALTER TABLE `xp`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `xpindex` (`id`),
  ADD KEY `xp_tierId_idx` (`tierId`);

--
-- Indizes für die Tabelle `_prisma_migrations`
--
ALTER TABLE `_prisma_migrations`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT für exportierte Tabellen
--

--
-- AUTO_INCREMENT für Tabelle `akademie`
--
ALTER TABLE `akademie`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT für Tabelle `contest_statuen`
--
ALTER TABLE `contest_statuen`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT für Tabelle `farbvarianten`
--
ALTER TABLE `farbvarianten`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=113;

--
-- AUTO_INCREMENT für Tabelle `farbvarianten_texte`
--
ALTER TABLE `farbvarianten_texte`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=255;

--
-- AUTO_INCREMENT für Tabelle `gehege`
--
ALTER TABLE `gehege`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4005;

--
-- AUTO_INCREMENT für Tabelle `herkunft`
--
ALTER TABLE `herkunft`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT für Tabelle `klubrollen`
--
ALTER TABLE `klubrollen`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT für Tabelle `mitglieder`
--
ALTER TABLE `mitglieder`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16007;

--
-- AUTO_INCREMENT für Tabelle `mitgliederlevel20`
--
ALTER TABLE `mitgliederlevel20`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16055;

--
-- AUTO_INCREMENT für Tabelle `mitgliederrang`
--
ALTER TABLE `mitgliederrang`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT für Tabelle `mitgliederstatuen`
--
ALTER TABLE `mitgliederstatuen`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16052;

--
-- AUTO_INCREMENT für Tabelle `mitgliederwettbewerbfarbvarianten`
--
ALTER TABLE `mitgliederwettbewerbfarbvarianten`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16009;

--
-- AUTO_INCREMENT für Tabelle `preisart`
--
ALTER TABLE `preisart`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT für Tabelle `tiere`
--
ALTER TABLE `tiere`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3155;

--
-- AUTO_INCREMENT für Tabelle `tierherkunft`
--
ALTER TABLE `tierherkunft`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31092;

--
-- AUTO_INCREMENT für Tabelle `tier_texte`
--
ALTER TABLE `tier_texte`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=866;

--
-- AUTO_INCREMENT für Tabelle `wettbewerbe`
--
ALTER TABLE `wettbewerbe`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=71;

--
-- AUTO_INCREMENT für Tabelle `wettbewerbfarbvarianten`
--
ALTER TABLE `wettbewerbfarbvarianten`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT für Tabelle `wettbewerbstatuen`
--
ALTER TABLE `wettbewerbstatuen`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=56;

--
-- AUTO_INCREMENT für Tabelle `wettbewerb_ergebnisse`
--
ALTER TABLE `wettbewerb_ergebnisse`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=297;

--
-- AUTO_INCREMENT für Tabelle `xp`
--
ALTER TABLE `xp`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31234;

--
-- Constraints der exportierten Tabellen
--

--
-- Constraints der Tabelle `contest_statuen`
--
ALTER TABLE `contest_statuen`
  ADD CONSTRAINT `contest_statuen_statueId_fkey` FOREIGN KEY (`statueId`) REFERENCES `wettbewerbstatuen` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `contest_statuen_wettbewerbId_fkey` FOREIGN KEY (`wettbewerbId`) REFERENCES `wettbewerbe` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints der Tabelle `farbvarianten`
--
ALTER TABLE `farbvarianten`
  ADD CONSTRAINT `farbvarianten_herkunftId_fkey` FOREIGN KEY (`herkunftId`) REFERENCES `herkunft` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `farbvarianten_tierId_fkey` FOREIGN KEY (`tierId`) REFERENCES `tiere` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints der Tabelle `farbvarianten_texte`
--
ALTER TABLE `farbvarianten_texte`
  ADD CONSTRAINT `farbvarianten_texte_farbvarianteId_fkey` FOREIGN KEY (`farbvarianteId`) REFERENCES `farbvarianten` (`id`) ON UPDATE CASCADE;

--
-- Constraints der Tabelle `tiere`
--
ALTER TABLE `tiere`
  ADD CONSTRAINT `tiere_gehegeId_fkey` FOREIGN KEY (`gehegeId`) REFERENCES `gehege` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `tiere_preisartId_fkey` FOREIGN KEY (`preisartId`) REFERENCES `preisart` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints der Tabelle `tierherkunft`
--
ALTER TABLE `tierherkunft`
  ADD CONSTRAINT `tierherkunft_herkunftId_fkey` FOREIGN KEY (`herkunftId`) REFERENCES `herkunft` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `tierherkunft_tierid_fkey` FOREIGN KEY (`tierid`) REFERENCES `tiere` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints der Tabelle `tier_gehege_kapazitaet`
--
ALTER TABLE `tier_gehege_kapazitaet`
  ADD CONSTRAINT `tier_gehege_kapazitaet_tierId_fkey` FOREIGN KEY (`tierId`) REFERENCES `tiere` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints der Tabelle `tier_texte`
--
ALTER TABLE `tier_texte`
  ADD CONSTRAINT `tier_texte_tierId_fkey` FOREIGN KEY (`tierId`) REFERENCES `tiere` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints der Tabelle `wettbewerbstatuen`
--
ALTER TABLE `wettbewerbstatuen`
  ADD CONSTRAINT `wettbewerbstatuen_tierId_fkey` FOREIGN KEY (`tierId`) REFERENCES `tiere` (`id`) ON UPDATE CASCADE;

--
-- Constraints der Tabelle `wettbewerb_ergebnisse`
--
ALTER TABLE `wettbewerb_ergebnisse`
  ADD CONSTRAINT `wettbewerb_ergebnisse_contest_id_fkey` FOREIGN KEY (`contest_id`) REFERENCES `wettbewerbe` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `wettbewerb_ergebnisse_member_id_fkey` FOREIGN KEY (`member_id`) REFERENCES `mitglieder` (`id`) ON UPDATE CASCADE;

--
-- Constraints der Tabelle `xp`
--
ALTER TABLE `xp`
  ADD CONSTRAINT `xp_tierId_fkey` FOREIGN KEY (`tierId`) REFERENCES `tiere` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
