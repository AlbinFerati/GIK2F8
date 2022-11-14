 'use strict';
 /* Vad ska vi göra här? */
 
const searchInput = null;
const bookList = [
    {
        id: 1, 
        author: 'Charles Dickens',
        title: 'Oliver Twist'
    },
    {
        id: 2, 
        author: 'William Shakespear', 
        title: 'Hamlet'
    }
];

function handleKeyPress(input) {
    // Ta emot/läsa av vätdet i inputfältet. 
    // Skicka värdet till searchBooks
    // searchBooks returnerar en filtrerad lista
    // Filtrerade listan skicaks till renderBookList
    searchBooks(input);
}

function searchBooks(searchTerm) {
    /* Loopa igenom bookList
    Förvarje varv i loopen, ta det aktuella elementet (boken)
    Jämför titeln med söktermen
    Om söktrermen finns någonstans i titeln, lägg till elementet i ny lista (filteredList) 
    Returnera filteredList eller anropar renderBookList?
    */
    const filteredList = [];
    for(let i = 0; i < bookList.length; i++) {
        const title = bookList[i].title.toLowerCase(); 
        if (title.indexOf(searchTerm.toLowerCase()) >= 0) {
            console.log("match?");
            filteredList.push(bookList[i]);
        }
    }
    renderBookList(filteredList);
    
}

/* searchBooks('e'); */
handleKeyPress('e')

function renderBookList(list) {
    /* Element i HTML-Listan visas eller döljs beroende på listans innehåll. */
    console.log(list);
}