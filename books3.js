class Book {
    constructor(title, genre, author, read){
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.read = read;
        this.readDate = new Date()
    }
    
}




class Booklist {
    constructor(){
        this.books = [];
        this.booksReaded = [];
        this.numbooksReaded = this.booksReaded.length;
        this.booksNotReaded = [];
        this.numbooksNotReaded = this.booksNotReaded.length;
        this.nextBookToRead = {};
        this.currentBookBeingRead = {};
        this.lastBookRead = {}
    }
    
    add(book){
        this.books = [...this.books, book]
        
        if (book.read === true){
        this.booksReaded = [...this.booksReaded, book]
        } else {
        this.booksNotReaded = [...this.booksNotReaded, book];
        }
        this.currentBookBeingRead = this.booksNotReaded[0];
        this.nextBookToRead = this.booksNotReaded[1]; 
        this.numbooksReaded = this.booksReaded.length;
        this.numbooksNotReaded = this.booksNotReaded.length;

    }       

    finishCurrentBook(book){
        book.read = true
        book.readDate = Date.now(readDate)
        this.booksReaded = [...this.booksReaded, book]
        this.lastBookRead = this.booksReaded[this.booksReaded.length - 1]
        this.booksNotReaded = this.booksNotReaded.filter(book => book.read !== true )

        this.nextBookToRead = this.booksNotReaded[1]; 

        this.numbooksReaded = this.booksReaded.length;
        this.numbooksNotReaded = this.booksNotReaded.length;
        
    }       
}