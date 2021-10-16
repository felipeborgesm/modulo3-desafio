
class Book {
    constructor(title, genre, author, status, read, readDate){
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.status = status;
        this.read = read; //true or false 
        //this.reading = reading;
        this.readDate = new Date(readDate)
    }
    
}

class Booklist {
    constructor(){
        this.booksread = booksread;    
        this.booksNotRead = booksNotRead;
        this.nextBook = nextBook;
        this.currentBook = currentBook;
        this.lastBook = lastBook;
        this.books = [];
        this.booksReaded = [];
        this.booksNotReaded = [];
    }
    
    add(book){
         this.books = [...books, book]
        if (book.read = true){
        this.booksReaded = [...booksReaded, book]
        } else{
        this.booksNotReaded = [...booksNotReaded, book];
        }
        // todo: check if book is already in the list
    }       

     book = book => {}

     bookReaded = book => {
            book.read = true;
            this.booksReaded = [...booksReaded, book]
        }

     //     dateReaded = book => book.readDate; // testar

     get lastBookReaded(){
        this.lastBook = booksReaded.length - 1
        return this.lastBook;
    }


    // array.shift()


     bookToRead(){
         
    }
     
     // todo: 
 

    finishCurrentBook(book){

    // should mark the book that is currently being read as "read"

    // Give it a read date of new Date(Date.now())

    // Change the last book read to be the book that just got finished

    // Change the current book to be the next book to be read

    // Change the next book to be read property to be the first unread book you find in the list of books

}

// .add(book)
// should add a book to the books list.

// .finishCurrentBook()
// should mark the book that is currently being read as "read"
// Give it a read date of new Date(Date.now())
// Change the last book read to be the book that just got finished
// Change the current book to be the next book to be read
// Change the next book to be read property to be the first unread book you find in the list of books


// Booklists and Books might need more methods than that. Try to think of more that might be useful.
