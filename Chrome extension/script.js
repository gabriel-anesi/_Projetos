let myLeads = [];
const inputEl = document.querySelector('#input-el');
const inputBtn = document.getElementById('input-btn');
const ulEl = document.getElementById('ul-el');
const deleteBtn = document.getElementById('delete-btn');
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
const tabBtb = document.getElementById('tab-btn');

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    render(myLeads);
}

tabBtb.addEventListener('click', function () {
        let activelink = window.location.href
        myLeads.push(activelink);
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads);
});

function render(leads) {
    let listItems = "";
    for(let i = 0; i < leads.length; i++) {
        //another method if necessary at the bottom of the page
        listItems += `
        <li>
        <a target="_blank" href=https://${leads[i]}>https://${leads[i]}
        </a></li>`;
    }
        ulEl.innerHTML = listItems;
    }

deleteBtn.addEventListener('dblclick', function() {
    localStorage.clear();
    myLeads = []
    render(myLeads)
});

inputBtn.addEventListener('click', function() {
    myLeads.push(inputEl.value);
    inputEl.value = "";
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads);
})

//saving upon pressing Enter key:

inputEl.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        myLeads.push(inputEl.value);
        inputEl.value = "";
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads);
    }
});




         //ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"; //METHOD 1 - easier to understand
        
        //METHOD 2
    
/* const li = document.createElement('li'); //creating element and storing it in a variable
li.textContent = myLeads[i];
ulEl.append(li) //appending li to ul */
    