let myLibrary = [];


 // Modal open/close

document.addEventListener("DOMContentLoaded", function() {
    let modalWrapper = document.getElementById("modal_wrapper");
    let modalWindow  = document.getElementById("modal_window");
 
  
    let openModal = function(e)
    {
      modalWrapper.className = "overlay";
      modalWindow.style.marginTop = (-modalWindow.offsetHeight)/2 + "px";
      modalWindow.style.marginLeft = (-modalWindow.offsetWidth)/2 + "px";
      e.preventDefault();
    };
  
    let closeModal = function(e)
    {
      modalWrapper.className = "";
      e.preventDefault();
    };
  
    let clickHandler = function(e) {
      if(e.target.tagName == "DIV") {
        if(e.target.id != "modal_window") closeModal(e);
      }
    };
  
    let keyHandler = function(e) {
      if(e.keyCode == 27) closeModal(e);
    };
  
    document.getElementById("modal_open").addEventListener("click", openModal, false);
    document.getElementById("modal_close").addEventListener("click", closeModal, false);
    document.addEventListener("click", clickHandler, false);
    document.addEventListener("keydown", keyHandler, false);
  }, false);

  // Modal open/close end


// Book construction

class Book {
    constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}}

 function formSubmit (){

        let title = document.getElementById("title").value;
    	let author = document.getElementById("author").value;
    	let pages = document.getElementById("pages").value;
        let read = document.getElementsByName('readStatus');
            if (read[0].checked) {
                read = "yes";
            } else if (read[1].checked) {
                read = "no";
            };

        let book = new Book(title, author, pages, read)
    	myLibrary.push(book);
        createBookCard(book);
      
    }

// Book construction end


// Create book div

function createBookCard(book) {
    const bookGrid = document.getElementById("bookGrid")
    const bookCard = document.createElement("div");
    const title = document.createElement("h3");
    const author = document.createElement("h3");
    const pages = document.createElement("h3");
    const readButton = document.createElement("button");
    const removeButton = document.createElement("button");
  
    bookCard.classList.add("bookCard");
    title.classList.add("bookText");
    author.classList.add("bookText");
    pages.classList.add("bookText");
    readButton.classList.add("button");
    readButton.classList.add("readButton");
    removeButton.classList.add("button");
    removeButton.classList.add("buttonRed");
    removeButton.classList.add("removeButton");
  
    title.textContent = book.title;
    author.textContent = book.author;
    pages.textContent = `${book.pages} pages`;
    removeButton.textContent = "Remove";
    readButton.style.width = "120px";
    if (book.read == "yes") {
      readButton.textContent = "Read";
    } else {
      readButton.textContent = "Not read";
    }
  
    bookCard.appendChild(title);
    bookCard.appendChild(author);
    bookCard.appendChild(pages);
    bookCard.appendChild(readButton);
    bookCard.appendChild(removeButton);
    bookGrid.appendChild(bookCard);
  }
// Create book div end

/* function displayBooks () {
    for (i=0, i < myLibrary.length, i++) {
        createBookCard(book);
    }
}
*/

const bookSpace = document.querySelector('.bookSpace');

function createCell () {
    const cell = document.createElement('div')
    bookSpace.appendChild(cell).className =('cell')
}

  
 

 