let myLibrary = {};


// local storage


function updateLocal () {
  myLibrary = localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
  myLibrary = JSON.parse(localStorage.getItem("myLibrary") || "[]");
}



window.onload = function () {

myLibrary = JSON.parse(localStorage.getItem("myLibrary") || "[]");
myLibrary.forEach(book => createBookCard(book)); 

}

// Local storage end


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
    constructor(title, author, pages, read, identity) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.identity = identity;
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
        let identity = (myLibrary.length);

        let book = new Book(title, author, pages, read, identity);

    	myLibrary.push(book);
        createBookCard(book);
        updateLocal();

      
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
    
    bookCard.dataset.identity = book.identity;

    bookCard.appendChild(title);
    bookCard.appendChild(author);
    bookCard.appendChild(pages);
    bookCard.appendChild(readButton);
    bookCard.appendChild(removeButton);
    bookGrid.appendChild(bookCard);

    let buttonListener = document.getElementsByClassName("removeButton");
    for (let i = 0 ; i < buttonListener.length; i++) {
        buttonListener[i].addEventListener('click' , resetLibrary, false) ; 
     }

     let buttonListenerRead = document.getElementsByClassName("readButton");
    for (let i = 0 ; i < buttonListenerRead.length; i++) {
        buttonListenerRead[i].addEventListener('click' , changeRead, false) ; 
     }



  }
// Create book div end

function changeRead () {

  let id = this.parentNode.dataset.identity

    let index = myLibrary.findIndex(checkArray);

    function checkArray(element) {
        for (i=0; i < myLibrary.length; i++) {
            if (element.identity == id) {
                return id;
            }
        }}

    myLibrary.forEach(function(element) {
      if (element.identity == id) {  
        if (element.read == "yes") {
          element.read = "no";
        } else if (element.read =="no") {
          element.read = "yes";
        }
    
    }

    const myNode = document.getElementById("bookGrid");
    while (myNode.firstChild) {
      myNode.removeChild(myNode.lastChild);
    }

    myLibrary.forEach(book => createBookCard(book)); 

    updateLocal();

})}



function resetLibrary () {
    
    let id = this.parentNode.dataset.identity
   

    let index = myLibrary.findIndex(checkArray);

    function checkArray(element) {
        for (i=0; i < myLibrary.length; i++) {
            if (element.identity == id) {
                return id;
            }
        }
    }

    const myNode = document.getElementById("bookGrid");
    while (myNode.firstChild) {
      myNode.removeChild(myNode.lastChild);
    }
  
    console.log(myLibrary);
    myLibrary.splice(index, 1);
    console.log(myLibrary);
   myLibrary.forEach(book => createBookCard(book)); 

   updateLocal();

    }


const bookSpace = document.querySelector('.bookSpace');


// Firebase 