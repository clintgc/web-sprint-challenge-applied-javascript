// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

import axios from 'axios';

// create parent array from div .cards-container
const cardContainer = document.querySelector('.cards-container');

//get content from server and iterate over each article calling createCard function
axios.get(`https://lambda-times-api.herokuapp.com/articles`)
    .then ( articleContent => {
        articleContent.data.articles.javascript.forEach( element => {
            cardContainer.appendChild(createCard(element));
        })
    articleContent.data.articles.bootstrap.forEach( element => {
        cardContainer.appendChild(createCard(element));
    })
    articleContent.data.articles.technology.forEach( element => {
        cardContainer.appendChild(createCard(element));
    })
    articleContent.data.articles.jquery.forEach( element => {
        cardContainer.appendChild(createCard(element));
    })
    articleContent.data.articles.node.forEach( element => {
        cardContainer.appendChild(createCard(element));
    })
})

//createCard function will create each individual element for each card.
function createCard(articleObj) {

let {headline, authorPhoto, authorName} = articleObj;

const cardDiv = document.createElement('div');
cardDiv.classList = 'card';
cardDiv.addEventListener('click', event => {
    console.log(headline);
})
const headlineDiv = document.createElement('div');
headlineDiv.classList = 'headline';
headlineDiv.textContent = headline;

const authorDiv = document.createElement('div');
authorDiv.classList.add = 'author';

const imgDiv = document.createElement('div');
imgDiv.classList.add = 'img-container';

const authorImg = document.createElement('img');
authorImg.innerHTML = authorPhoto;

const authorSpan = document.createElement('span')
authorSpan.textContent = `by ${authorName}`;

//append elements to parent
cardDiv.append(headlineDiv);
cardDiv.append(authorDiv);
authorDiv.append(imgDiv);
imgDiv.append(authorImg);
imgDiv.append(authorImg);

return cardDiv;
}