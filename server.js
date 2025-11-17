class Book {
  #keyCode = 199924856;
  constructor(title, author, yearPublished) {
    this.author = author;
    this.title = title;
    this.yearPublished = yearPublished;
  }
  // instance methodss
  getSummary() {
    return `${this.title} by ${this.author} in ${this.yearPublished}`;
  }
  // getter specail method enables access to property (protected or internal)
  get keyCode() {
    return this.#keyCode;
  }
  //setter  specail method enables setting or modifying a property
  set keyCode(newKeyCode) {
    if (newKeyCode > 20_000) {
      this.#keyCode = newKeyCode;
    } else console.log("Error");
  }
  // static mehtos
  static compareYears(book1, book2) {
    if (book1.yearPublished < book2.yearPublished) return book1;
    else return book2;
  }
}

const book1 = new Book("BookA", "Author", 2005);
const book2 = new Book("BookB", "Author", 2000);
console.log(Book.compareYears(book1, book2));

console.log(book1.getSummary());

console.log(book1.keyCode);

book1.keyCode = 30000;
console.log(book1.keyCode);
