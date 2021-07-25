'use strict';
let Total = 0;
let Bookshop = [];
function bookStore(name,price) {
    this.name = name;
    this. price = price;
    Bookshop.push(this)
    this.page = [];
    Total = Total + price;
}
bookStore.prototype.randpage = function() {
    this.page.push(Math.floor(Math.random()*(500-1+1)+1))
}
function setStorage() {
   let x = localStorage.setItem('bookStore',JSON.stringify(Bookshop))
}
function getStorage() {
    let data = JSON.parse(localStorage.getItem('bookStore'))
    let newshop;
    if(data !==null)
    {
        for (let i = 0; i < data.length; i++) {
         newshop = new bookStore(data[i].name,data[i].price)
         newshop.randpage()   
            
        }
        newshop.render()
    }
}
let form = document.getElementById('form');
form.addEventListener('submit',handleclick);
function handleclick(event){
    event.preventDefault();
    let bookname = event.target.name.value;
    let bookprice = event.target.price.value;
    let store = new bookStore(bookname,bookprice);
    store.randpage();
    setStorage();
    store.render();
}
let table = document.getElementById('table')
bookStore.prototype.render = function(){
    let tr = document.createElement('tr');
    table.appendChild(tr);
    let td = document.createElement('td')
    tr.appendChild(td);
    td.textContent = `${this.name}`;
    let td1 = document.createElement('td')
    tr.appendChild(td1);
    td1.textContent = `${this.price}`;
    let td2 = document.createElement('td')
    tr.appendChild(td2);
    td2.textContent = `${this.page}`;

    let tabelcontainer =document.getElementById('tablecontainer')
    let p = document.createElement('p')
    tabelcontainer.appendChild(p)
    p.textContent = `Total:${Total}`
} 


getStorage();