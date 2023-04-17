{
    'use strict';

    const select = {
        templateOf: {
            book: '#template-book',
        },
        booksPanel: {
            wrapper: '.books-panel',
            bookslist: '.books-list',
        },
        itemBook: {
            image: '.book__image',
        },
    };

    const templates = {
        book: Handlebars.compile(document.querySelector(select.templateOf.book).innerHTML),
    };

    const render = function () {
        const thisBook = this;
        thisBook.data = dataSource.books;
        for (let book in dataSource.books) {
            const bookName = dataSource.books[book];
            const generatedHTML = templates.book(bookName);
            thisBook.element = utils.createDOMFromHTML(generatedHTML);
            const bookContainer = document.querySelector(select.booksPanel.booksList);
            bookContainer.appendChild(thisBook.element);
            console.log('HTML:', generatedHTML);
        }
    };
    const favouriteBooks = [];
    function initActions() {
        const click = document.querySelectorAll(select.itemBook.image);
        for (let item of click) {
            item.addEventListener('dblclick', function (event) {
                event.preventDefault();
                item.classList.add('favourite');
                const bookID = item.getAttribute('data-id');
                favouriteBooks.push(bookID);
                console.log('Item:', item);
                console.log('Favourite:', favouriteBooks);
            });
        }
    }
    render();
    initActions();
}