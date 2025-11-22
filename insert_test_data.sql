# Insert data into the tables

USE berties_books;

INSERT INTO books (name, price)VALUES('Brighton Rock', 20.25), ('Brave New World', 25.00), ('Animal Farm', 12.99);

INSERT INTO user_details(firstname, lastname, username, email, hashedPassword) VALUES ("sarah", "james", "sarahjames", "sarahjames@gmail.com");
