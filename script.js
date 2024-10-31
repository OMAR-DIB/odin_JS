const myLibrary = [];

function MyBook(title, author, numberOfPages, isReaded) {
  this.title = title;
  this.author = author;
  this.numberOfPages = numberOfPages;
  this.isReaded = isReaded;
  this.info = function () {
    return `The  ${this.title} by ${this.author}, ${this.numberOfPages} pages, ${isReaded ? 'read' : 'not read yet'}`;
  };
}

const book1 = new MyBook('The Great Gatsby', 'F. Scott Fitzgerald', 218, true);
const book2 = new MyBook('To Kill a Mockingbird', 'Harper Lee', 324, false);
const book3 = new MyBook('1984', 'George Orwell', 328, true);
function addBookToLibrary(newBook, book, b) {
  myLibrary.push(newBook, book, b);
}

addBookToLibrary(book1, book2, book3);

function displayContent(array) {
  const container = document.createElement('div');
  container.className = "library-container";
  // for (i=0;i <array.length;i++){
  //   const item=array[i];
  //   let card = document.createElement('p');
  //   card.textContent = item.info();
  //   container.appendChild(card);
  //   container.className = "cont";
  // }
  array.forEach(element => {
    const card = document.createElement('div');
    card.classList.add('book-card');
    const item = document.createElement('p')
    item.textContent = element.info();
    card.appendChild(item);
    container.appendChild(card);
  });
  document.body.appendChild(container);
}
displayContent(myLibrary);
console.log(myLibrary);
