class Book {
    constructor(title, genre, author, read){
        this.title = title;
        this.genre = genre;
        this.author = author;  
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
        this.booksNotReaded.length === 1 ? this.nextBookToRead = 'There is no next book to me read!' : this.nextBookToRead = this.booksNotReaded[1];
    };

    #updateCurrentBook = () => {
        this.booksNotReaded.length === 0 ? this.currentBookBeingRead = 'There is no book currently being read!' : this.currentBookBeingRead = this.booksNotReaded[0];
    };

    #updateNumbers = () => {
        this.numbooksReaded = this.booksReaded.length;
        if(this.booksNotReaded[0] !== ''){
            this.numbooksNotReaded = this.booksNotReaded.length;
        }
    }

    #lastReaded(){
        return this.lastBookRead = this.booksReaded[this.booksReaded.length - 1];
    }

    add(newBook){ //mudar o nome da variável para ficar mais legivel
        newBook.read === true ?  this.booksReaded = [...this.booksReaded, newBook] : this.booksNotReaded = [...this.booksNotReaded, newBook];
        this.#updateNextBook();
        this.#updateCurrentBook();
        this.#updateNumbers();
        this.#lastReaded();
    }       

    finishCurrentBook(){
        this.currentBookBeingRead.read = true

        this.currentBookBeingRead.readDate = new Date().toJSON().slice(0,10).replace(/-/g,'/')

        this.booksReaded = [...this.booksReaded, this.currentBookBeingRead];

        this.booksNotReaded = this.booksNotReaded.filter(book => book.read !== true );

        this.#updateNextBook();
        this.#updateCurrentBook();
        this.#updateNumbers();
        this.#lastReaded();
    }       
}

let cleanCode = new Book('Clean Code', 'Code', 'Robert Martin', false);
let pragmaticProgrammer = new Book('The pragmatic programmer', 'code', 'David Thomas', false)
let drivenDesign = new Book('Domain-drive desing', 'software Design', 'Eric Evans', false)
let codigoLegado = new Book('Trabalho eficaz com código legado', 'codelgacy', 'Michael Feathers', false)
let kubernetes = new Book('Padrões para Kubernetes', 'cloud', 'Bilgin Ibryam', true)

let codeList = new BookList
codeList.add(cleanCode)
codeList.add(pragmaticProgrammer)
codeList.add(drivenDesign)
codeList.add(codigoLegado)
codeList.add(kubernetes)