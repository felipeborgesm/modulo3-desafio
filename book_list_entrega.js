class Book {
  constructor(title, genre, author, read) {
    this.title = title;
    this.genre = genre;
    this.author = author;
    this.read = read;
    this.readDate = new Date();
  }
}

class BookList {
  constructor() {
    this.booksReaded = [];
    this.booksNotReaded = [];
    this.numBooksReaded = 0;
    this.numBooksNotReaded = 0;
    this.nextBookToRead = {};
    this.currentBookBeingRead = {};
    this.lastBookRead = {};
    this.books = [];
  }

  _updateNextBook = () => {
    this.booksNotReaded.length === 1
      ? (this.nextBookToRead = "There is no next book to be read!")
      : (this.nextBookToRead = this.booksNotReaded[1]);
  };

  _updateCurrentBook = () => {
    this.booksNotReaded.length === 0
      ? (this.currentBookBeingRead = "There is no book currently being read!")
      : (this.currentBookBeingRead = this.booksNotReaded[0]);
  };

  _updateNumbers = () => {
    this.numBooksReaded = this.booksReaded.length;
    if (this.booksNotReaded[0] !== "") {
      this.numBooksNotReaded = this.booksNotReaded.length;
    }
  };

  _lastReaded = () => {
    return (this.lastBookRead = this.booksReaded[this.booksReaded.length - 1]);
  }

  add(newBook) {
    this.books = [...this.books, newBook];
    newBook.read === true
      ? (this.booksReaded = [...this.booksReaded, newBook])
      : (this.booksNotReaded = [...this.booksNotReaded, newBook]);
    this._updateNextBook();
    this._updateCurrentBook();
    this._updateNumbers();
    this._lastReaded();
  }

  finishCurrentBook() {
    this.currentBookBeingRead.read = true;

    this.currentBookBeingRead.readDate = new Date()
      .toJSON()
      .slice(0, 10)
      .replace(/-/g, "/");

    this.booksReaded = [...this.booksReaded, this.currentBookBeingRead];

    this.booksNotReaded = this.booksNotReaded.filter(
      (book) => book.read !== true
    );

    this._updateNextBook();
    this._updateCurrentBook();
    this._updateNumbers();
    this._lastReaded();
  }
}
