
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;


CREATE TABLE `students` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;


INSERT INTO `students` (`id`, `name`, `email`, `phone`) VALUES
(3, 'Fatima', 'fatima.f@gmail.com', '9985654343'),
(4, 'Shweta', 'shweta@gmail.com', '9976565789'),
(5, 'Raksha', 'raksha@gmail.com', '9885456543'),
(6, 'Sneha', 'sneha@gmail.com', '9556764342'),
(7, 'Aishwariya', 'aishwariya@gmail.com', '9445654876'),
(8, 'Parveen', 'parveen@gmail.com', '9975645342'),
(12, 'Aisha', 'aisha@gmail.com', '9654567654'),
(13, 'Fawad', 'fawad@gmail.com', '9956765665'),
(14, 'Wahid', 'wahid@gmail.com', '9667876787');

ALTER TABLE `students`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `students`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
