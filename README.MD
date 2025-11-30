# Berties Books

Modified code for Dynamic Web Applications module.

A books website that uses node.js, Express, EJS, SQL and dotenv.

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

To install and run:
npm install
node index.js

Browse http://localhost:8000