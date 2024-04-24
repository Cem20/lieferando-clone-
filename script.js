


// Order müssen nach dem ersten ausführen überall auf 0 gesetzt werden 

loadamounts();
loadtotalvalue();
loadorder();
loadsumerg();


function render() {
    ShowFood();
    document.getElementById('newmen').innerHTML = '';
    Basket();

    saveamount();
    savetotalvalue();
    sumerg();
    saveorder(); 
}

function ShowFood(){
    document.getElementById('menu').innerHTML = "";
    for (let i = 0; i < menus.length; i++) {
        document.getElementById('menu').innerHTML += `
        <div class="defgap" id="def${i}"><div> `;
        FoodCategoriesImg(i);
        FoodCategoriesImg();
        hello(i);
    }
}

function FoodCategoriesImg(i){
    if(i == 0){
        document.getElementById(`def${i}`).innerHTML +=`
        <img class="changeh" src="${imgs[i]}" alt="" srcset="">
        <div class="newp"> ${newid[i]} </div>
        `;
    }
    else if(i == 3){
        document.getElementById(`def${i}`).innerHTML += `
        <img class="changeh" src="${imgs[1]}" alt="" srcset="">
        <div class="newp">${newid[1]}</div>
        `;
    }
    else if(i == 5){
        document.getElementById(`def${i}`).innerHTML += `
        <img class="changeh" src="${imgs[2]}" alt="" srcset=""> 
        <div class="newp">${newid[2]}</div>
        `;
    }
}

function Basket(){
    newsum = 0;
    let ShoppingBag = document.getElementById('fdw');
    for (let j of order) {
        if (amounts[j] > 0) {
            totalvalue[j] = amounts[j] * prices[j];
            auslagern(totalvalue, j);
        }
    } 
    if(sum >= 10){
        DeliveryCosts = 0;
        DeliveryCostsReplace = 'Kostenfrei';
        
    }
    else{
        DeliveryCosts = 2.0;
        DeliveryCostsReplace = '2 €';
    }
     auslagerntwo();
     MinOrderVal(ShoppingBag);
}

function MinOrderVal(ShoppingBag){ 
    let OrderButtn = document.getElementById('order');
    if(sum >= 10){
        OrderButtn.classList.add('ColorChange');
        
    }
    let FreeDeliveryCosts = document.getElementById('DeliveryCosts');
    if(sum >= 10){
        FreeDeliveryCosts.classList.add('dn');
    }
    let MinValue = document.getElementById('MinVal');
    if(sum < 10 && sum >= 1){
        if(sum < 10){
            newsum = 10 - sum;
        }
        MinValue.classList.remove('dn');
        requiredAmount(MinValue);
    }
    else{
        MinValue.classList.add('dn');
    }
    if(sum > 0){
        BasketTemplate = ShoppingBag.classList.add('dn');
    }
    else{
        document.getElementById('OrderDetails').innerHTML = ``;
        BasketTemplate = ShoppingBag.classList.remove('dn');
        
    }  
}
// amounts muss runtergestezt werden
function issumgreater(){
    if (sum < 10) {
        alert('Die bestellung muss den Mindestbetrag von 10 euronen erfüllen');
    }
}

function addToBasket(index) {
    amounts[index]++;
    sum += prices[index];
    order.add(index);
     // Hinzugefügt
    render();
}

function setamountdown(index){
    amounts[index]--;
    sum -= prices[index];
  // if wert gleich 0 order.splice 0
  if(amounts[index] < 1){
    order.delete(index);
  }
    render();
}

function onlysetamountdown(nindex){
    amounts[nindex]++;
    sum += prices[nindex];
    render();
}

function deleverything(){
    amounts = [0, 0, 0, 0, 0, 0];
    sum = 0;
    order.clear();
    render();
}

// Save and Load im LocalStorage
function saveamount(){
    let dd = JSON.stringify(amounts);
    localStorage.setItem('Anzahl', dd);
}

function loadamounts(){
    let dd = localStorage.getItem('Anzahl');
    if(dd){
      amounts = JSON.parse(dd);
    }
}

function savetotalvalue(){
    let og = JSON.stringify(totalvalue);
    localStorage.setItem('TotalerWert', og)
}

function loadtotalvalue(){
    let og = localStorage.getItem('TotalerWert');
    if(og){
        totalvalue = JSON.parse(og);
    }
}

function sumerg(){
    let dj = JSON.stringify(sum);
    localStorage.setItem('TotaleSumme', dj);
}

function loadsumerg(){ 
    let dj = localStorage.getItem('TotaleSumme');
    if(dj){
        sum = JSON.parse(dj);
    }
}

function saveorder() {
    let orderArray = Array.from(order);
    let tu = JSON.stringify(orderArray);
    localStorage.setItem('Order', tu);
}

// Funktion zum Laden des Sets
function loadorder() {
    let tu = localStorage.getItem('Order');
    if (tu) {
        let orderArray = JSON.parse(tu);
        order = new Set(orderArray);
        
    }    
}


function responsivemenu(){
    let stylegel = document.getElementById('shoppingbasket');
    stylegel.classList.add('transl');
    document.getElementById('respmenchange').innerHTML = `
    <img class="respmen" onclick="closeMenu()" src="./htmimg/close.svg" alt="" srcset="">
    `;
}

function closeMenu(){
    let stylegel = document.getElementById('shoppingbasket');
    stylegel.classList.remove('transl');
    document.getElementById('respmenchange').innerHTML = `
    <img class="respmen" onclick="responsivemenu()" src="./htmimg/shopping.svg" alt="" srcset="">
    `;
}