function Book(title, author, numPages, haveRead) {
  this.title = title;
  this.author = author;
  this.numPages = numPages;
  this.haveRead = haveRead;
  this.info = function () {
    return `${title} by ${author}, ${numPages} pages, ${
      haveRead ? "has read already" : "not read yet"
    }`;
  };
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 296, true);

console.log(theHobbit.info());
console.log(theHobbit);
