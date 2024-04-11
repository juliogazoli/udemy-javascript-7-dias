function createBook(title, author, pages) {
    const book = {
        bookTitle: title,
        bookAuthor: author,
        bookPages: pages,

        printBook: function () {
            console.log('printing...')
        }
    }
    return book
}

const book1 = createBook('Atomic', 'James', 306)
const book2 = createBook('Think', 'Napolean', 450)

book1.color = 'White'

console.log(book1)
console.log(book2)