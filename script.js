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
        let html = `<ul class="book-list rounded-md border-2 border-blue-400 bg-white w-full mx-auto">`;
        for (let i = 0 ;i < bookList.length; i++)
        {	
        html += `<li 
        class="book-list__item mb-2 mx-2 last:mb-0 p-3 text-indigo-900 last:border-b-0 border-b border-indigo-700 cursor-pointer">
        ${bookList[i].author} - ${bookList[i].title}
        </li>`;
        }
        html += `</ul>`;

    const existingElement = document.querySelector(".book-list");
    console.log(existingElement);
    const root = document.getElementById('root');
    if (existingElement) {
        root.removeChild(existingElement) //tar bort ul element om det finns
    }
    
    root.insertAdjacentHTML('beforeend', html); // lägger till ul om det finns
    }

