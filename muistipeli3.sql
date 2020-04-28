-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 28.04.2020 klo 07:56
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

--
-- Vedos taulusta `tilit`
--

INSERT INTO `tilit` (`pnimi`, `ssana`, `avatar`, `email`) VALUES
('Aku', 'root', 1, 'info@edu.keuda.fi'),
('Mikki', 'root', 2, 'info@keuda.fi');

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
-- Vedos taulusta `tulokset`
--

INSERT INTO `tulokset` (`tulos_id`, `tilit_fk`, `arvaukset`, `aika`, `tyyppi`) VALUES
(1, 'Aku', 29, 240, '4x4'),
(2, 'Aku', 29, 240, '4x4'),
(3, 'Mikki', 24, 360, '4x4');

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
  MODIFY `tulos_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Rajoitteet vedostauluille
--

--
-- Rajoitteet taululle `tulokset`
--
ALTER TABLE `tulokset`
  ADD CONSTRAINT `tulokset_ibfk_1` FOREIGN KEY (`tilit_fk`) REFERENCES `tilit` (`pnimi`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
