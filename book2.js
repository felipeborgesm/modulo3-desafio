class Book {
    constructor(title, genre, author, read, current, date) { 
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.read = read;
        this.current = current;
        this.date = new Date(date)
    }
}

class BookList {
    constructor() {
        this.allBooks = [{}];
        this.numReadedBooks = [];
        this.numNotReadedBooks = [];
        this.currentBook = [{}]
    }
    add(book) { 
        if (book.read === true) {
            this.numReadedBooks = [...this.numReadedBooks, book]
            this.numReadedBooks = [...this.numNotReadedBooks, this.numNotReadedBooks.length]
        } else {
            this.numNotReadedBooks = [...this.numNotReadedBooks, book]
            this.numRNoteadedBooks = [...this.numNotReadedBooks, this.numNotReadedBooks.length]
        }
        book.current ? this.currentBook = [...this.currentBook, book] :
        this.currentBook = [...this.currentBook]
        this.allBooks = [...this.allBooks, book]
    }
    finishCurrentBook() {
        this.currentBook.date = new Date(Date.now())
        this.currentBook.read = true
        this.numReadedBooks = [...this.numReadedBooks, this.currentBook]
        this.currentBook.current = false
        this.currentBook = [...this.currentBook, this.numNotReadedBooks.shift()]
    } 
}