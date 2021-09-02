// An Arrow Function(For Bonus Mark) For Getting Searched Data
const searchBook = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField
    .value;
    
// Clear Empty Field
    emptyField.innerText = '';

// Send Error Message For Empty Input Field
if(searchField.value === '') {  //Used === for Comparison for Bonus Mark
   emptyField.innerText = 'Please Write A Name Of Book';
   document.getElementById('search-result').innerText = '';
}
 
else {
// Use API URL 
    const url = `https://openlibrary.org/search.json?q=${searchText}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data.docs))
    }
    searchField.value = '';   
}
const emptyField = document.getElementById('empty-field');

// Show Search Result 
const displaySearchResult = books => {

//If No Result Found For The Searched Input
    if(books.length === 0){
        emptyField.innerText = 'No Result Found';
        document.getElementById('search-result').innerText = '';
    }

    else{
    const searchResult = document.getElementById('search-result');

// Clear previous Result
    searchResult.textContent = '';

// Dynamic Number Of Total Found Books 
    let showBook = 0;
    if( books.length <= 30 ) showBook = books.length;
    else showBook = 30;
    const result = `Showing ${showBook} Book From Search Result ${books.length} Book`;
    emptyField.innerText = result;
    let resultCount = 0;

// forEach Loop for Calculating Dynamic Number Of Total Printed Books 
    books.forEach(book => {
        resultCount++;
        if( resultCount <= 30){
//Loaded Data Of Each Book & Also used Cover Image For Bonus Mark
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card bg-light h-100">
            <img src=" https://covers.openlibrary.org/b/id/${book?.cover_i}-M.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h3 class="card-title text-primary mb-3">${book?.title}</h3>
              <h4 class="card-text text-success mb-3">${book?.author_name}</h4>
              <h5 class="card-text text-success">${book?.publisher}</h5>
              <h5 class="card-text ">${book?.first_publish_year}</h5>
            </div>
          </div>
        `;
        
        searchResult.appendChild(div);
        }
         })
    }
}