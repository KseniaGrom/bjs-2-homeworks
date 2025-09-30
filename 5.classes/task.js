class PrintEditionItem {
    constructor(name,releaseDate,pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        this.state = this.state * 1.5;
    }

    set state(newState) {
        if (newState < 0 ) {
            this._state = 0;
        } else if (newState > 100 ) {
            this._state = 100;
        } else {
            this._state = newState;
        }
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super (name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super (name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super (author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
    super (author, name, releaseDate, pagesCount);
    this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
    super (author, name, releaseDate, pagesCount);
    this.type = "detective";
    }
}

class Library {
    constructor(name, books) {
        this.name = name;
        this.books = [];
    }
    
    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        let bookFoundBy = this.books.find(book => book[type] === value);
        if (bookFoundBy !== undefined) {
            return bookFoundBy;
        } else {
            return null;
        }
    }

    giveBookByName(bookName) {
        let bookNameIndex = this.books.findIndex(book => book.name === bookName);
        if (bookNameIndex !== -1) {
            let indexBook = this.books[bookNameIndex];
            this.books.splice(indexBook, 1);
            return indexBook;
        } else {
            return null;
        }
    }
}