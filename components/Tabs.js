// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element

import axios from 'axios'; //import axios

axios.get(`https://lambda-times-api.herokuapp.com/topics`) //get data
    .then( content => {
        const topicContainer = document.querySelector('.topics'); //identify parent element
        content.data.topics.forEach( element => { //loop through each topic and create element tab, text content and append to parent div.
            const tabDiv = document.createElement('div');
            tabDiv.classList.add('tab');
            tabDiv.textContent = element;
            topicContainer.appendChild(tabDiv);
        });
    });