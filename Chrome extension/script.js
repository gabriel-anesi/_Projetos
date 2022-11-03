let myLeads = [];
const inputEl = document.querySelector('#input-el');
const inputBtn = document.getElementById('input-btn');
const ulEl = document.getElementById('ul-el');

inputBtn.addEventListener('click', function() {
    myLeads.push(inputEl.value);
    inputEl.value = "";
    renderLeads();
})

function renderLeads() {

let listItems = "";
for(let i = 0; i < myLeads.length; i++) {
     //ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"; //METHOD 1 - easier to understand
    
    //METHOD 2

/*     const li = document.createElement('li'); //creating element and storing it in a variable
    li.textContent = myLeads[i];
    ulEl.append(li) //appending li to ul */

    listItems += "<li><a target='_blank' href= '" + 'https://' + myLeads[i] + "'>" + myLeads[i] + "</a></li>";
}
    ulEl.innerHTML = listItems;
}