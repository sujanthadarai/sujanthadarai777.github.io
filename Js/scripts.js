//an alert box with the message "Hello TEJ!" is displayed when index.html page is loaded

window.addEventListener("load", function(){
    alert("Hello TEJ!")
})


const samosaPriceInput =document.getElementById("samosa-price");
const teaPriceInput =document.getElementById("tea-price");

const samosaPrice=samosaPriceInput.value;
const teaPrice=teaPriceInput.value;

console.log("samosa price:" + samosaPrice);
console.log("tea price:" + teaPrice);

//for increment and decrement  value for somasa quantity
let samosaquantity = 1;
const samosaquantity1 = document.getElementById("samosa-quantity");
 function increment1(){
    samosaquantity++;
    samosaquantity1.value = samosaquantity;

 }

 function decrement1(){
    if(samosaquantity>1){
        samosaquantity--;
        samosaquantity1.value= samosaquantity;
    }
 }
//for increment and decrement  value for tea quantity
let teaquantity =1;
const teaquantity1 = document.getElementById("tea-quantity")
function increment2(){
    teaquantity++;
    teaquantity1.value = teaquantity;

 }

 function decrement2(){
    if(teaquantity>1){
        teaquantity--;
        teaquantity1.value= teaquantity;
    }
 }


 //calculation of total
 function CalculateTotal() {
    let price1= parseFloat(document.getElementById("samosa-price").value);
    let quantity1=parseInt(document.getElementById("samosa-quantity").value);
    let samosatotal = price1 * quantity1;
    document.getElementById("samosa-total").value = samosatotal;

    let price2= parseFloat(document.getElementById("tea-price").value);
    let quantity2=parseInt(document.getElementById("tea-quantity").value);
    let teatotal = price2 * quantity2;
    document.getElementById("tea-total").value = teatotal;

    const samosaPrice1=parseFloat(document.getElementById("samosa-total").value);
    const teaPrice1=parseFloat(document.getElementById("tea-total").value);
    const totalPrice= samosaPrice1 + teaPrice1;
    document.getElementById("total-price").value=totalPrice;

    const vatValue = totalPrice * 0.13;
    document.getElementById("vat").value=vatValue;

    const tipValue = totalPrice * 0.1;
    document.getElementById("tip").value = tipValue;

    const GrandTotal = totalPrice + vatValue + tipValue;
    document.getElementById("grand-total").value = GrandTotal;



 }







  