-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Apr 03, 2018 at 01:33 PM
-- Server version: 5.6.34-log
-- PHP Version: 7.1.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `zoo_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `id` varchar(3000) COLLATE utf8_unicode_ci NOT NULL,
  `page_id` varchar(3000) COLLATE utf8_unicode_ci NOT NULL,
  `name` text COLLATE utf8_unicode_ci NOT NULL,
  `text_comment` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`id`, `page_id`, `name`, `text_comment`) VALUES
('', '150', 'Linas', 'Koks nuostabus gyvunas!'),
('', '150', 'Dar', 'dar'),
('', '150', 'Pabandymui', 'Pabandymui'),
('', '150', 'Komentatorius', 'Dar vienas komentaras'),
('', '150', 'Gedas', 'Labai fainas gyvÅ«nas. Turiu tokius 2, labai linksmi ir paÅ¡ele!');

-- --------------------------------------------------------

--
-- Table structure for table `pasiulymai`
--

CREATE TABLE `pasiulymai` (
  `id` smallint(30) NOT NULL,
  `page_id` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `vartotojo_name` text COLLATE utf8_unicode_ci NOT NULL,
  `name` text COLLATE utf8_unicode_ci NOT NULL,
  `text` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `pasiulymai`
--

INSERT INTO `pasiulymai` (`id`, `page_id`, `vartotojo_name`, `name`, `text`) VALUES
(6, '150', 'Algirdas', 'Straipsni', 'Siulau straipsni apie kenguras'),
(7, '150', 'Vytautas', 'Straipsni', 'SiÅ«lau pridÄ—ti straipsni apie anglÅ³ buldogus.'),
(8, '150', 'Arnas', 'Naujiena', 'SiÅ«lyÄiau pridÄ—ti daugiau naujienÅ³ iÅ¡ gyvÅ«nÅ³ pasaulio, labai Ä¯domÅ³ skaityti. GaleÄiau padÄ—ti raÅ¡yti jas.');

-- --------------------------------------------------------

--
-- Table structure for table `straipsniai`
--

CREATE TABLE `straipsniai` (
  `id` smallint(6) NOT NULL,
  `page_id` smallint(6) NOT NULL,
  `turinys` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `straipsniai`
--

INSERT INTO `straipsniai` (`id`, `page_id`, `turinys`) VALUES
(11, 0, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_answer`
--

CREATE TABLE `tbl_answer` (
  `id` int(11) NOT NULL,
  `question_id` int(11) NOT NULL,
  `answer` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `tbl_answer`
--

INSERT INTO `tbl_answer` (`id`, `question_id`, `answer`) VALUES
(1, 1, 'Viena'),
(2, 1, 'Du'),
(3, 1, 'Trys'),
(4, 1, 'Daugiau nei trys'),
(5, 1, 'Kol kas neturiu'),
(6, 2, 'Sunys'),
(7, 2, 'Kates'),
(8, 2, 'Grauzikas'),
(9, 2, 'Akvariumas'),
(10, 2, 'Kita'),
(11, 3, 'Juodas'),
(12, 3, 'Baltas'),
(13, 3, 'Pilkas'),
(14, 3, 'Margas'),
(15, 3, 'Kitoks');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_poll`
--

CREATE TABLE `tbl_poll` (
  `id` int(11) NOT NULL,
  `question_id` int(11) NOT NULL,
  `answer_id` int(11) NOT NULL,
  `member_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_question`
--

CREATE TABLE `tbl_question` (
  `id` int(11) NOT NULL,
  `question` varchar(255) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `tbl_question`
--

INSERT INTO `tbl_question` (`id`, `question`) VALUES
(1, 'Kiek gyvunu turite?'),
(2, 'Koki gyvuna turite?'),
(3, 'Kokios spalvos jusu gyvunas?');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `pasiulymai`
--
ALTER TABLE `pasiulymai`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `straipsniai`
--
ALTER TABLE `straipsniai`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_answer`
--
ALTER TABLE `tbl_answer`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_poll`
--
ALTER TABLE `tbl_poll`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_question`
--
ALTER TABLE `tbl_question`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `pasiulymai`
--
ALTER TABLE `pasiulymai`
  MODIFY `id` smallint(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT for table `straipsniai`
--
ALTER TABLE `straipsniai`
  MODIFY `id` smallint(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
--
-- AUTO_INCREMENT for table `tbl_answer`
--
ALTER TABLE `tbl_answer`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
--
-- AUTO_INCREMENT for table `tbl_poll`
--
ALTER TABLE `tbl_poll`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=65;
--
-- AUTO_INCREMENT for table `tbl_question`
--
ALTER TABLE `tbl_question`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
