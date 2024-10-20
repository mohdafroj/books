-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 20, 2024 at 05:11 AM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `books`
--

-- --------------------------------------------------------

--
-- Table structure for table `book`
--

CREATE TABLE `book` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `author` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `book`
--

INSERT INTO `book` (`id`, `title`, `author`, `description`) VALUES
(2, 'This is title 2', 'This is author 2232323', 'This is description 221212'),
(3, 'This is title 3', 'This is author 3', 'This is description 3'),
(5, 'This is title 5', 'This is author 5', 'This is description 5'),
(6, 'This is title 6', 'This is author 6', 'This is description 6'),
(7, 'This is title 7', 'This is author 7', 'This is description 7'),
(8, 'This is title 8', 'This is author 8', 'This is description 8'),
(9, 'This is title 9', 'This is author 9', 'This is description 9'),
(10, 'This is title 10', 'This is author 10', 'This is description 10'),
(11, 'This is title 11', 'This is author 11', 'This is description 11'),
(12, 'This is title 12', 'This is author 12', 'This is description 12'),
(13, 'This is title 13', 'This is author 13', 'This is description 13'),
(14, 'This is title 14', 'This is author 14', 'This is description 14'),
(15, 'This is title 15', 'This is author 15', 'This is description 15'),
(16, 'This is title 16', 'This is author 16', 'This is description 16'),
(17, 'This is title 17', 'This is author 17', 'This is description 17'),
(18, 'This is title 18', 'This is author 18', 'This is description 18'),
(19, 'This is title 19', 'This is author 19', 'This is description 19'),
(20, 'This is title 20', 'This is author 20', 'This is description 20'),
(24, 'This is the best item of 2023', 'ssss', 'assss');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `book`
--
ALTER TABLE `book`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `book`
--
ALTER TABLE `book`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
