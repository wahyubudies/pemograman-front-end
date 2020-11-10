let button = document.getElementById("myButton");
let modal = document.getElementById("myModal");
let close = document.getElementById("close");

button.addEventListener("click", function(){
    modal.style.display = "block";
});
close.addEventListener("click", function(){
    modal.style.display = "none";
});
window.addEventListener("click", function(even){
    if(even.target == modal){
        modal.style.display = "none";
    }
});