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
      
    }

// Book construction end


/* function displayBooks () {
    for (i=0, i < myLibrary.length, i++) {

    }
}
*/

const bookSpace = document.querySelector('.bookSpace');

function createCell () {
    const cell = document.createElement('div')
    bookSpace.appendChild(cell).className =('cell')
}

  
 

 