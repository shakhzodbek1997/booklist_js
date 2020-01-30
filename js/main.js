// Book Class: Represnts a book
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}


// UI Class: Handle UI Tasks
class UI {
    static displayBooks(){
        const StoreedBooks = [
            {
                title: 'Book one',
                author: 'Anonymous',
                isbn: '3434434'
            },
            {
                title: 'Book two',
                author: 'Anonymous',
                isbn: '4551545'
            }
        ];

        const books = StoreedBooks;

        books.forEach((book) => UI.addBookToList(book));
    }

    static addBookToList(book){
        const list = document.querySelector('#book-list');

        const  row = document.createElement('tr');

        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `;
        list.appendChild(row);
    }
}

// Store Class: Handles Storage

