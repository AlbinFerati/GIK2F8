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
// const searchField = document.getElementById("searchField")

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
   renderBookList(filteredList);
}

function renderBookList(bookList) {
    //Vi gör en sträng som börjar med ett ul element och stänger med ett ul element
 

    const existingElement = document.querySelector(".book-list");
    console.log(existingElement);

    const root = document.getElementById('root');
    if (existingElement) {
        root.removeChild(existingElement) //tar bort ul element om det finns
    }
    if(bookList.length > 0) {
        root.insertAdjacentHTML('beforeend', BookList(bookList)); // lägger till ul om det finns
    }
}

