let myLibrary = [];

function newBook (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        return '${title} by ${author}, ${pages} pages, ${read}.'
    }
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function displayBooks () {
    for (i=0, i < myLibrary.length, i++) {

    }
}

const bookSpace = document.querySelector('.bookSpace');

function createCell () {
    const cell = document.createElement('div')
    bookSpace.appendChild(cell).className = 'cell'
}