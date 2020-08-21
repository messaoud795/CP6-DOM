
// configuration of the button plus
    var btnPlus=Array.from(document.getElementsByClassName("fa-plus"));
   
    for(let i in btnPlus){
        btnPlus[i].addEventListener("click", function(){
       btnPlus[i].parentElement.nextElementSibling.innerHTML++;
       updateTotalPrice();
      });}

// configuration of the button minus
var btnMinus=Array.from(document.getElementsByClassName("fa-minus"));
var qty=Array.from(document.getElementsByClassName("itemQuantity"));
for(let i in btnMinus){
    console.log(parseInt(qty[i].textContent));
    btnMinus[i].addEventListener("click", function(){
        if ((parseInt(qty[i].textContent)!=1)){
             btnMinus[i].parentElement.previousElementSibling.innerHTML--;
            updateTotalPrice();}
  
  });}

// remove an item
var del=Array.from(document.getElementsByClassName("fa-folder-minus"));
for(let i in del){
    del[i].addEventListener("click", function(){
   del[i].parentElement.parentElement.remove();
   updateTotalPrice();
  });}

// setting of the like button
var like=Array.from(document.getElementsByClassName("fa-heart"));
for(let i in like){
    like[i].addEventListener("click", function(){
     this.style.color = this.style.color === "red" ? "gray" : "red";

//    like[i].style.color = "red";
  });}


// setting the total price
function updateTotalPrice(){
    var p=document.getElementById("totalPrice");
    var qty=Array.from(document.getElementsByClassName("itemQuantity"));
    var unit=Array.from(document.getElementsByClassName("price"));
var n=0;

for(let i in qty){

    n+=parseInt(qty[i].textContent)*parseInt(unit[i].textContent)
}
var s=n.toString()+"$";
p.innerHTML=s;
}
