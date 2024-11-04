const myLibrary = [];

class MyBook {
  constructor(title, author, numberOfPages, isReaded) {
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.isReaded = isReaded;
    this.info = function () {
      return `The  ${this.title} by ${this.author}, ${this.numberOfPages} pages, ${this.isReaded ? 'read' : 'not read yet'}`;
    };
    this.toggleRead = function () {
      this.isReaded = !this.isReaded;
    };
  }
}

const book1 = new MyBook('The Great Gatsby', 'F. Scott Fitzgerald', 218, true);
const book2 = new MyBook('To Kill a Mockingbird', 'Harper Lee', 324, false);
const book3 = new MyBook('1984', 'George Orwell', 328, true);
function addBookToLibrary(newBook) {
  myLibrary.push(newBook);
}

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);

function deleteFromList(index){
  myLibrary.splice(index,1);
}
//single book card
function addBookCard(container, book,index){
  const card = document.createElement('div');
  const deleteCard = document.createElement('button');
  deleteCard.classList.add('delete-card');
  deleteCard.textContent = 'Delete';
  deleteCard.addEventListener("click" , () => {
    deleteFromList(index);
    card.remove();
  });
  const EditCard = document.createElement('button');
  EditCard.classList.add('Edit-card');
  EditCard.textContent = 'Edit';
  EditCard.addEventListener("click", () => {
    document.querySelector("#title").value = book.title;
    document.querySelector("#author").value = book.author;
    document.querySelector("#pages").value = book.numberOfPages;
    document.querySelector(`input[name="read"][value="${book.isReaded}"]`).checked = true;
    dialog.showModal();
    const onSubmit = document.querySelector(".on-submit");
    onSubmit.addEventListener("click" , () =>{
      deleteFromList(index);
      myLibrary.push();
      card.remove();
    });
  });
  const toggleRead = document.createElement('button');
  toggleRead.classList.add('toggle-read');
  const item = document.createElement('p');
  item.textContent = book.info();
  toggleRead.textContent = book.isReaded ? 'Mark as Not Read' : 'Mark as Read';
  toggleRead.addEventListener("click", ()=>{
    book.toggleRead();
    item.textContent = book.info();
    toggleRead.textContent = book.isReaded ? 'Mark as Not Read' : 'Mark as Read';
  });
  card.classList.add('book-card');
  card.appendChild(item);
  card.appendChild(deleteCard);
  card.appendChild(EditCard);
  card.appendChild(toggleRead);
  container.appendChild(card);
}

function displayContent(array) {
  const container = document.createElement('div');
  container.className = "library-container";
  array.forEach((book,index) => addBookCard(container,book,index));
  document.body.appendChild(container);
}
displayContent(myLibrary);
console.log(myLibrary);

/*                */
const dialog = document.querySelector(".dialog-form");
const showDialog = document.querySelector(".dialog-form + .open-dialog");
const closeDialog = document.querySelector(".close-dialog");
const bookSubmit = document.querySelector("#bookForm");
showDialog.addEventListener("click",() => {
    dialog.showModal();
});

closeDialog.addEventListener("click",()=>{
    dialog.close();
});

bookForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const numberOfPages = parseInt(document.querySelector("#pages").value, 10);
  const isReaded = document.querySelector('input[name="read"]:checked').value === 'true';
  const newBook = new MyBook(title, author, numberOfPages, isReaded);
  addBookToLibrary(newBook);
  const container = document.querySelector(".library-container");
  addBookCard(container, newBook);

  // Close dialog and reset form
  dialog.close();
  bookForm.reset();
});