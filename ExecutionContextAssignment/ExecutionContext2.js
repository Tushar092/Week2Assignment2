const library = {
  books: [
    { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 }
  ],

  addBook(book) {
    if (typeof book !== 'object' || book === null) {
      console.error("Invalid book. A book must be a non-null object.");
      return;
    }

    const { title, author, year } = book;


    if (typeof title !== 'string' || title.trim() === '') {
      console.error("Invalid or missing title.");
      return;
    }

    if (typeof author !== 'string' || author.trim() === '') {
      console.error("Invalid or missing author.");
      return;
    }

    if (typeof year !== 'number' || !Number.isInteger(year)) {
      console.error("Invalid or missing year. Year must be an integer.");
      return;
    }

    const existing = this.findBookByTitle(title);
    if (existing) {
      console.error(`A book with the title "${title}" already exists.`);
      return;
    }

    this.books.push({ title, author, year });
    console.log(`Book "${title}" added successfully.`);
  },

  findBookByTitle(title) {
    return this.books.find(book => book.title === title);
  },

  removeBook(title) {
    const index = this.books.findIndex(book => book.title === title);
    if (index !== -1) {
      const removed = this.books.splice(index, 1)[0];
      console.log(`Book "${removed.title}" removed.`);
    } else {
      console.warn(`Book titled "${title}" not found.`);
    }
  }
};

library.addBook({ author: "George Orwell", year: 1949 });


library.addBook({ title: "1984", author: "George Orwell", year: 1949 });

library.addBook({ title: "1984", author: "George Orwell", year: 1949 });

console.log("Books in library:", library.books);
console.log("Total books:", library.books.length);
