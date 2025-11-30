# **Berties Book Shop Application**

## Brief Explanation
Modified code for Dynamic Web Applications module.
Master code @lewfer/gs-dwa-berties-books-initial-code

A books website that uses node.js, Express, EJS, SQL and dotenv.

## Securing Credentials
Dotenv helps users secure credentials.

For example:

.env
DB_HOST=localhost
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_NAME=berties_books
PORT=8000

index.js
const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

There is restricted access for accessing user lists, adding books and bargain books.

## Input Validation
Validation ensures that inputs are as they should be, e.g. an email is in the format of an email.

Input validation was added to the registration, login, search and add books page.

Included:
isEmail() validation to the registration and login pages so that the email is inputted in the correct format (e.g a@a.com)
.trim to prevent leading and trailing spaces
.notEmpty to ensure input fields are not empty and displayed it .withMessage("") to show the user what they need to input and how

## Input Sanitisation
Sanitisation cleans input fields to prevents XSS attacks and so that users can not maliciously access data.

Input sanitisation was added to the registration, login, search and add books page by adding .sanitize to requests.

## Running the application
npm install
node index.js

Browse to http://localhost:8000