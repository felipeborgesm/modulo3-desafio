# modulo3-desafio

Carlos Felipe

Felipe Ribeiro

Fernando Gustavo Silva

Laura Navarro

// Documentação 

Códigos prontos para teste:


let cleanCode = new Book('Clean Code', 'Code', 'Robert Martin', false);

let pragmaticProgrammer = new Book('The pragmatic programmer', 'code', 'David Thomas', true)

let drivenDesign = new Book('Domain-drive desing', 'software Design', 'Eric Evans', false)

let codigoLegado = new Book('Trabalho eficaz com código legado', 'codelgacy', 'Michael Feathers', false)

let kubernetes = new Book('Padrões para Kubernetes', 'cloud', 'Bilgin Ibryam', true)

let List = new BookList()

List.add(cleanCode)

List.add(pragmaticProgrammer)

List.add(drivenDesign)

List.add(codigoLegado)

List.add(kubernetes)

List.books // ver todos os livros  //

List.booksReaded // ver todos os livros que já foram lidos  //

List.booksNotReaded // ver todos os livros que não foram lidos  //

List.numBooksReaded // número de livros lidos  // 

List.numBooksNotReaded // número de livros não lidos  //

List.currentBookBeingRead // Livro sendo lido atualmente  //

List.nextBookToRead // Próximo livro há ser lido  //

List.lastBookRead  // último livro  //
