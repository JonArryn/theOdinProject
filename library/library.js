"use strict";
const log = console.log;

// slections
const bookForm = document.querySelector(".book__form");
const submitBtn = document.getElementById("form__submit");
const libraryCntr = document.querySelector(".library__container");

let myLibrary = [];

function Book([title, author, numPages, readStatus]) {
  this.title = title;
  this.author = author;
  this.numPages = numPages;
  this.readStatus = readStatus;
  // ID uses last 6 digits of ms date converts to string then back to number lol
  this.bookId = +Date.now().toString().slice(-8);
}

const textContent = {
  title: "Title",
  author: "Author",
  numPages: "Number of Pages",
  readStatus: "Read Status",
  bookId: "Book ID",
};

function createTileContentDiv(text, className, data) {
  let div = document.createElement("div");
  div.textContent = `${text}: ${data}`;
  div.classList.add(className);
  return div;
}

function createButton(text, className) {
  let newBtn = document.createElement("button");
  newBtn.classList.add(className);
  newBtn.textContent = text;
  return newBtn;
}

// creates book tiles and is called by the createLibrary function
function createBookTile(book) {
  // creates tile div and class
  const newTile = document.createElement("div");
  newTile.classList.add("book__tile");
  // enumerate book properties and create divs containing data values
  for (let property in book) {
    // skips id property to prevent ID from being rendered in html
    if (property === "bookId") {
      continue;
    }
    // runs new book function to create divs that contain book info
    let newBook = createTileContentDiv(
      textContent[property],
      property,
      book[property]
    );
    // appends book html to newTile div
    newTile.appendChild(newBook);
    newTile.setAttribute("data-bookid", book.bookId);
  }

  // create and append buttons

  // creates appends div that contains both buttons to newTile div
  const btnDiv = document.createElement("div");
  btnDiv.classList.add("tile__button");
  newTile.appendChild(btnDiv);

  // runs functions to create and append status and delete button to btnDiv
  btnDiv.appendChild(createButton("Change Status", "change__status"));
  btnDiv.appendChild(createButton("Delete Book", "delete__book"));

  // appends new tile to library container
  libraryCntr.appendChild(newTile);
}

// loads and displays library
function createLibrary() {
  // clears library content and removes all existing html
  libraryCntr.textContent = "";
  libraryCntr.querySelectorAll("*").forEach((node) => node.remove());
  // iterates over myLibrary array
  myLibrary.forEach(function (book) {
    createBookTile(book);
  });
  buttonListener();
  log(myLibrary);
}

// // // change from array to object using values instead of building array (eventually)
// book form listener
bookForm.addEventListener("submit", function (event) {
  event.preventDefault();
  // creates form data object from the bookForm dom Element
  let data = new FormData(bookForm);
  // creates array from book form data
  let bookArray = Array.from(data.values());
  // creates new book and pushes it to the array
  myLibrary.push(new Book(bookArray));
  // re-creates library for display
  createLibrary();
});

// button styling listerner
function buttonListener() {
  const allBtns = document.querySelectorAll("button");
  allBtns.forEach((button) =>
    button.addEventListener("mousedown", function () {
      button.classList.add("clicked");
    })
  );
  allBtns.forEach((button) =>
    button.addEventListener("mouseup", function () {
      button.classList.remove("clicked");
    })
  );
}
