let myLeads = ["awesomelead.com", "epiclead.com", "greatlead.com"];
const inputEl = document.querySelector('#input-el');
const inputBtn = document.getElementById('input-btn');
const ulEl = document.getElementById('ul-el');

inputBtn.addEventListener('click', function() {
    myLeads.push(inputEl.value);

    
})
for(let i = 0; i < myLeads.length; i++) {
    
    //ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"; //METHOD 1 - easier to understand
    
    //METHOD 2

    const li = document.createElement('li'); //creating element and storing it in a variable
    li.textContent = myLeads[i];
    ulEl.append(li) //appending li to ul
}