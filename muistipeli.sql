-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 27.04.2020 klo 17:53
-- Palvelimen versio: 10.4.11-MariaDB
-- PHP Version: 7.4.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `muistipeli`
--

-- --------------------------------------------------------

--
-- Rakenne taululle `tilit`
--

CREATE TABLE `tilit` (
  `pnimi` varchar(20) COLLATE utf8_swedish_ci NOT NULL,
  `ssana` varchar(100) COLLATE utf8_swedish_ci NOT NULL,
  `avatar` int(11) NOT NULL,
  `email` varchar(50) COLLATE utf8_swedish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_swedish_ci;

-- --------------------------------------------------------

--
-- Rakenne taululle `tulokset`
--

CREATE TABLE `tulokset` (
  `tulos_id` int(11) NOT NULL,
  `tilit_fk` varchar(20) COLLATE utf8_swedish_ci NOT NULL,
  `arvaukset` int(11) NOT NULL,
  `aika` int(11) NOT NULL,
  `tyyppi` varchar(10) COLLATE utf8_swedish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_swedish_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tilit`
--
ALTER TABLE `tilit`
  ADD PRIMARY KEY (`pnimi`);

--
-- Indexes for table `tulokset`
--
ALTER TABLE `tulokset`
  ADD PRIMARY KEY (`tulos_id`),
  ADD KEY `tilit_fk` (`tilit_fk`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tulokset`
--
ALTER TABLE `tulokset`
  MODIFY `tulos_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Rajoitteet vedostauluille
--

--
-- Rajoitteet taululle `tilit`
--
ALTER TABLE `tilit`
  ADD CONSTRAINT `tilit_ibfk_1` FOREIGN KEY (`pnimi`) REFERENCES `tulokset` (`tilit_fk`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
