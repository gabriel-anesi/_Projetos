let count = 0;
let totalCount = 0;
let countEl = document.getElementById('count-el');
let saveEl = document.getElementById('save-el');
let totalEl = document.getElementById('total-el');

function increment() {
    count += 1
    countEl.textContent = count;
} 

function decrement() {
    count -= 1
    countEl.textContent = count;
}

function save() {
    let countStr = count + ' - ';
    saveEl.textContent += ' ' + countStr;
    totalCount = totalCount + count;
    totalEl.textContent = totalCount;
    countEl.textContent = 0;
    count = 0;
}