const url = 'https://gik2f8-labs.herokuapp.com/books';

async function getAll() {
    const result = await fetch(url);
    const jsonData = await result.json();
    return jsonData;
}

//samma som ovan men med .then
/* function getAll() {
   return fetch(url)
        .then((result) => result.json())
        .then((jsonData) => jsonData);

        bookListPromise.then((bookList) => console.log(bookList));
}
 */
