const book = {
    bookTitle: 'Atomic Habits',
    bookAuthor: 'James Clear',
    bookPages: 306,
    bookChaptters: {
        chap1: 'Fundamentals',
        chap2: '1st law',
    },
    printBook: function () {
        console.log('printing...')
    }
}

book.printBook()