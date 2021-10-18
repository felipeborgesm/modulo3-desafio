class Book {
    constructor(title, genre, author, read, readDate){
        this.title = title;
        this.genre = genre;
        this.author = author; //status não ta usando 
        this.read = read;
        this.readDate = new Date(); 
    }
}

class BookList {

    constructor(){
        this.booksReaded = []; 
        this.booksNotReaded = [];
        this.numbooksReaded = 0;
        this.numbooksNotReaded = 0;
        this.nextBookToRead = {};
        this.currentBookBeingRead = {};
        this.lastBookRead = {};
        this.books = [];
    }
    
    #updateNextBook = () => {
        if (this.booksNotReaded.length == 1){
            this.nextBookToRead = null; //para q o next book não seja o msm q o current
        }
        else
        {this.nextBookToRead = this.booksNotReaded[1];}
    };

    #updateCurrentBook = () => {
        if (this.booksNotReaded.length == 0){
            this.currentBookBeingRead = 'There is no book currently being read!';
        }
        else
        {this.currentBookBeingRead = this.booksNotReaded[0];}
    };

    #updateNumbers = () => {
        this.numbooksReaded = this.booksReaded.length;
        if(this.booksNotReaded[0] !== ''){
            this.numbooksNotReaded = this.booksNotReaded.length;
        }
    }

    add(newBook){ //mudar o nome da variável para ficar mais legivel
        this.books = [...this.books, newBook];

        if (newBook.read === true){
            this.booksReaded = [...this.booksReaded, newBook]
        }
        else {
            this.booksNotReaded = [...this.booksNotReaded, newBook]
        };

        this.#updateNextBook();
        this.#updateCurrentBook();
        this.#updateNumbers();
    }       

    finishCurrentBook(){
        this.currentBookBeingRead.read = true

        this.currentBookBeingRead.readDate = new Date()

        this.booksReaded = [...this.booksReaded, this.currentBookBeingRead];

        this.booksNotReaded = this.booksNotReaded.filter(book => book.read !== true );

        this.lastBookRead = this.booksReaded[this.booksReaded.length - 1];

        this.#updateNextBook();
        this.#updateCurrentBook();
        this.#updateNumbers();
    }       
}