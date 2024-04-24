function hello(i){
    document.getElementById('menu').innerHTML += `
    <div class="asas" onclick="addToBasket(${i})" >
          <div id="cc${i}">${menus[i]}</div>
          <div class="rri" id="iop${i}">${desc[i]}</div>
          <div class="cf" id="zu${i}">Wahl aus: ${choice[i]}</div>
          <div class="pfm" id="dd${i}">${prices[i]} €</div>
          <p class="HinzFormate" id="formateHinzP${i}">Hinz.</p>
    </div>
  `;
}

function auslagern(totalvalue, j){
    document.getElementById('newmen').innerHTML += `
    <div class="neformated">
      <div class="formated">
            <div class="newflex">
             <div class="hs">
              <div class="font" id="ulp${j}">${amounts[j]}</div>
              <div class="font">${menus[j]}</div>
             </div>
              <div class="pp" id="pricing${j}">${totalvalue[j]} €</div> 
            </div> 
            <div class = "nfs"> 
                <div id="del${j}" onclick="setamountdown(${j})"> <button class="newwatch"><img src="./imgforbasket/increase.svg"></button></div>
                <div class="newamount" id="amounto${j}"> ${amounts[j]}</div>
                <div id="ddtw${j}" onclick="onlysetamountdown(${j})"><button class="newwatch"><img src="./imgforbasket/add.svg" alt="" srcset=""></button></div>
           </div>         
        </div>
       </div>
    </div>
    <hr>   
        `;
}

function auslagerntwo(){
    document.getElementById('OrderDetails').innerHTML = `
       <div class="butform">
        <div class="zwischensum">
            <p>Zwischensumme</p>
            <p>${sum} €</p>
        </div>
        <div class = "zwischensum">
            <p>Liferkosten</p>
            <p>${DeliveryCostsReplace}</p>
        </div> 
          <div class="formatep">  
             <p id="DeliveryCosts">Die Liferkosten sind ab 10€ kostenfrei</p>
          </div>    
         <div class="butformate">
            <button  id="order"  class="but2" onclick="issumgreater()">Bezahlen (${sum + DeliveryCosts}€)</button>
          </div>
        </div> 
    `;
}

function requiredAmount(MinValue){
    MinValue.innerHTML = `<div class="formated tt">
    <div class="vers">
        <div class="spez1">
            <p>Benötigter Betrag, um den</p>
            <p>Mindestbestellwert zu erreichen</p>
        </div>
        <div class="spez2">
            <p>${newsum} €</p>
        </div>
    </div>
<div>
`;
}