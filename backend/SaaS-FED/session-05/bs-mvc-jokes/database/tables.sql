/*  
 * ONE LINE PURPOSE OF THE FILE 
 * 
 * Author:  YOUR NAME 
 * Created: YYYY-MM-DD
 * Version: 1.0
 * 
 */

CREATE TABLE jokes (
    id bigint;
    question text;
    answer text;
    tags varchar(192);
    created_at datetime;
    updated_at datetime;
    author_id bigint;
    PRIMARY KEY (`id`),  
    FULLTEXT `joke_text` (`joke`),  
    FULLTEXT `tag_index` (`tags`);
);


CREATE TABLE users (
    id bigint;
    given_name varchar(64);
    family_name varchar(64);
    email varchar(320);
    user_password varchar(255);
    created_at datetime;
    updated_at datetime;
    PRIMARY KEY (`id`),  
    UNIQUE `email_index` (`email`),  
    INDEX  `given_family`(`given_name`,`family_name`),  
    INDEX  `family_given`(`family_name`,`given_name`)
);