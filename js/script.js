
const users = Array.from(document.querySelectorAll('li'));
const container = document.querySelector(`.page`);
createButtons(countPages(users.length));
const buttons = Array.from(document.querySelectorAll('button'))
let dividedUsers = divideUsers(users)
createPage(dividedUsers[0])
buttonClick(buttons, dividedUsers);

//inserts buttons at the bottom of the page
function createButtons(numberOfPages) {
    for(let i = 1; i <= numberOfPages; i++){
        container.insertAdjacentHTML(`beforeend`, button(i))
    }
}

//creates a button with the correct value
function button(number) {
    return ` <button type="button">${number}</button>`
}

//creates a page using the given array
function createPage(subArrayOfUsers) {
    const userList = document.querySelector(`.contact-list`)
    userList.innerHTML = null
    for(let i = 0; i < subArrayOfUsers.length; i ++) {
        userList.appendChild(subArrayOfUsers[i])
    }
}

//divides the array of users into array of array with 10 users in each
function divideUsers(arrayOfUsers) {
    let arrayOfArrays = [];
    while(arrayOfUsers.length) {
        arrayOfArrays.push(arrayOfUsers.splice(0, 10))
    }
    if(arrayOfArrays[arrayOfArrays.length-1].length < 10){
        arrayOfArrays[arrayOfArrays.length-2] = arrayOfArrays[arrayOfArrays.length-2].concat(arrayOfArrays.pop())
    }
    return arrayOfArrays
}

function countPages(numberOfUsers) {
    return Math.floor(numberOfUsers/10);
}

//adds an event listener for each button
function buttonClick(buttons, dividedUsers) {
    for(let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', () => createPage(dividedUsers[i]))
        console.log(buttons[i])
    }
}

