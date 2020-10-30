// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container
const containerHeader = document.querySelector('.header-container') //identify & create parent container to append child elements

function Header() {
    
    //create child elements
    const headerDiv = document.createElement('div');
    headerDiv.classList = 'header';

    const dateSpan = document.createElement('span');
    dateSpan.classList = 'date';
    dateSpan.textContent = 'October 30, 2020'

    const headerH1 = document.createElement('h1');
    headerH1.textContent = 'Lambda Times'

    const tempSpan = document.createElement('span');
    tempSpan.classList = 'temp';
    tempSpan.textContent = '98°';

    //append child elements to parent 'containerHeader' and nest grandchild elements into 'headerDiv'

    containerHeader.append(headerDiv);
    headerDiv.append(dateSpan);
    headerDiv.append(headerH1);
    headerDiv.append(tempSpan);

    return containerHeader;
}

Header ();
