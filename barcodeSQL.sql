use barcode;

create table users (
id int(11) auto_increment,
email varchar (60) not null,
password varchar (60) not null,
role varchar(25) default 'guest',
first varchar(60) not null,
last varchar(60) not null,
created_at timestamp default now(),
primary key(id)
);

select * from users;

insert into users (email, password, first, last) values
("paula@test.com", "123", "Paula", "Suarez");

CREATE TABLE `offer_categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
);

select * from offer_categories;

insert into offer_categories (id, name) values
(1, "% Off"),
(2, "BOGO");

create table offers (
id int(11) auto_increment,
offer_categoryid int(11) not null,
`name` varchar(100) NOT NULL,
`description` varchar(255) NOT NULL,
created_at timestamp default current_timestamp,
primary key(id),
foreign key (offer_categoryid) references offer_categories(id)
);

select * from offers;

INSERT INTO offers (offer_categoryid, name, description) VALUE
(2, "Buy $10 get $10", "This is a placeholder description.");
