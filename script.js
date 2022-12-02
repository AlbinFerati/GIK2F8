 'use strict';
 /* Vad ska vi göra här? */

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
 
// const searchInput = document.children[0].children[1].children[1].children[1];
const searchField = document.getElementById("searchField")
console.log(searchField);

/* keydown, keyup */
//söker så fort ett nytt tecken trykcs ner
searchField.addEventListener("keyup", handleKeyPress);


function handleKeyPress(e) {
    // Ta emot/läsa av vätdet i inputfältet. 
    // Skicka värdet till searchBooks
    // searchBooks returnerar en filtrerad lista
    // Filtrerade listan skicaks till renderBookList
    searchBooks(e.target.value);
}


function searchBooks(searchTerm) {
    /* Loopa igenom bookList
    Förvarje varv i loopen, ta det aktuella elementet (boken)
    Jämför titeln med söktermen
    Om söktrermen finns någonstans i titeln, lägg till elementet i ny lista (filteredList) 
    Returnera filteredList eller anropar renderBookList?
    */
   const filteredList= [];
   for (let i = 0 ;i < bookList.length; i++) {
       const title = bookList[i].title.toLowerCase();
       if (title.indexOf(searchTerm.toLowerCase()) >= 0) {
        filteredList.push(bookList[i]);
       }
   } 
   console.log(filteredList);
}

function renderBookList(list) {
        /* Element i HTML-Listan visas eller döljs beroende på listans innehåll. */
        console.log(list);
    }

    