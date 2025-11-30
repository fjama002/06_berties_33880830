# Berties Books

## Brief Explanation
Modified code for Dynamic Web Applications module.

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
Validation ensures that input fields are not empty and gives the user a reason why their process did not go through as they may have intended e.g. "input required".

Input validation was added to the registration, login and search books page. 

Included isEmail() validation to the registration and login pages so that the email is inputted in the correct format (e.g a@a.com).

To install and run:
npm install
node index.js

Browse http://localhost:8000