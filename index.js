// Get Search Data 
const searchBook = () => {
    searchField = document.getElementById('search-field');
    const searchText = searchField
    .value;
    searchField.value = '';

// Use API URL 
    const url = `http://openlibrary.org/search.json?q=${searchText}`;
    //console.log(url); 
    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data.docs))
}

// Show Search Result 
const displaySearchResult = books => {
    //console.log(books);
    const searchResult = document.getElementById('search-result');

// Clear previous Result
    searchResult.textContent = '';
    books.forEach(book => {
        console.log(book);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div onclick="loadBookDetail(${book.idBook})" class="card bg-light h-100">
            <img src=" https://covers.openlibrary.org/b/id/${book?.cover_i}-M.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h3 class="card-title text-primary mb-3">${book?.title}</h3>
              <h4 class="card-text text-success mb-3">${book?.author_name}</h4>
              <h5 class="card-text text-success">${book?.publisher.slice(0, 5)}</h5>
              <h5 class="card-text ">${book?.first_publish_year}</h5>
            </div>
          </div>
        `;
        searchResult.appendChild(div);
    })
}