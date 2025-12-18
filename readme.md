library-api/
│
├── server.js
├── config/
│   └── db.js
├── routes/
│   ├── authors.js
│   ├── books.js
│   └── categories.js
├── controllers/
│   ├── authorsController.js
│   ├── booksController.js
│   └── categoriesController.js
└── models/
    ├── Author.js
    ├── Book.js
    └── Category.js 



-----------------------------------------------     
CREATE TABLE authors (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    bio TEXT
);

CREATE TABLE categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT
);

CREATE TABLE books (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(150) NOT NULL,
    author_id INT,
    category_id INT,
    published_year INT,
    FOREIGN KEY (author_id) REFERENCES authors(id),
    FOREIGN KEY (category_id) REFERENCES categories(id)
);