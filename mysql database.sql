 -- drop DATABASE spotify;
CREATE DATABASE spotify;
use spotify;
CREATE TABLE IF NOT EXISTS `artist`(
    `artist_id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `cover_img` VARCHAR(255) NOT NULL,
    `upload_at` DATE NOT NULL,
    PRIMARY KEY(`artist_id`)
);
CREATE TABLE IF NOT EXISTS `album`(
    `album_id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `artist_id` INT NOT NULL ,
    `cover_img` VARCHAR(255) NOT NULL,
    `created_at` DATE NOT NULL,
    `upload_at` DATE NOT NULL,
    PRIMARY KEY (`album_id`),
    FOREIGN KEY(`artist_id`) REFERENCES `artist`(`artist_id`)
);
CREATE TABLE `song`(
    `song_id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `youtube_link` VARCHAR(255) NOT NULL,
    `album_id` INT NOT NULL ,
    `artist_id` INT NOT NULL ,
    `length` INT NOT NULL,
    `track_number` INT NOT NULL,
    `lyrics` VARCHAR(255) NOT NULL,
    `created_at` DATE NOT NULL,
    `upload_at` DATE NOT NULL,
    PRIMARY KEY (`song_id`),
    FOREIGN KEY(`artist_id`) REFERENCES `artist`(`artist_id`),
    FOREIGN KEY(`album_id`) REFERENCES `album`(`album_id`)
);

CREATE TABLE IF NOT EXISTS `playlist`(
    `playlist_id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `cover_img` VARCHAR(255) NOT NULL,
    `created_at` DATE NOT NULL,
    `upload_at` DATE NOT NULL,
    PRIMARY KEY (`playlist_id`)
);


-- insert into user(name,email,created_at,upload_at,password,is_admin,preferences,remember_token) values('dor kachlon','dor1kachlon@gmail.com',"2020-09-08","2020-09-08",'123456789',false,'{"key1":"value1"}',true);
CREATE TABLE IF NOT EXISTS `user`(
    `user_id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `created_at` DATE NOT NULL,
    `upload_at` DATE NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `is_admin` BOOLEAN NOT NULL,
    `preferences` JSON NOT NULL,
    `remember_token` BOOLEAN NOT NULL,
    PRIMARY KEY(`user_id`)
);

CREATE TABLE IF NOT EXISTS `playlist_song`(
    `id` INT NOT NULL AUTO_INCREMENT,
    `playlist_id` INT NOT NULL NULL,
    `song_id` INT NOT NULL NULL,
    PRIMARY KEY(`id`),
    FOREIGN KEY(`song_id`) REFERENCES `song`(`song_id`),
   	FOREIGN KEY(`playlist_id`) REFERENCES `playlist`(`playlist_id`)
);

CREATE TABLE IF NOT EXISTS `user_song`(
    `id` INT NOT NULL AUTO_INCREMENT,
    `user_id` INT NOT NULL,
    `song_id` INT NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY(`user_id`) REFERENCES `user`(`user_id`),
   	FOREIGN KEY(`song_id`) REFERENCES `song`(`song_id`)
);

CREATE TABLE IF NOT EXISTS `user_playlist`(
    `id` INT NOT NULL AUTO_INCREMENT,
    `user_id` INT NOT NULL,
    `playlist_id` INT NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY(`playlist_id`) REFERENCES `playlist`(`playlist_id`),
   	FOREIGN KEY(`user_id`) REFERENCES `user`(`user_id`)
);

CREATE TABLE IF NOT EXISTS `user_album`(
    `id` INT NOT NULL AUTO_INCREMENT,
    `user_id` INT NOT NULL,
    `album_id` INT NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY(`album_id`) REFERENCES `album`(`album_id`),
   	FOREIGN KEY(`user_id`) REFERENCES `user`(`user_id`)
);

CREATE TABLE IF NOT EXISTS `interactions`(
    `id` INT NOT NULL AUTO_INCREMENT,
    `user_id` INT NOT NULL,
    `song_id` INT NOT NULL,
    `is_liked` BOOLEAN NOT NULL,
    `play_count` INT NOT NULL,
    `created_at` DATE NOT NULL,
    PRIMARY KEY(`id`),
 	FOREIGN KEY(`user_id`) REFERENCES `user`(`user_id`),
    FOREIGN KEY(`song_id`) REFERENCES `song`(`song_id`)
);
    