window.onload = function()
{
    let popUp = document.querySelector("#popUp");
    
    let button = document.querySelector("#button");
    
    let span = document.querySelector(".close");

    button.onclick = function() {
        popUp.style.display = "block";
    }
    
    span.onclick = function() {
        popUp.style.display = "none";
    }
    
    window.onclick = function(event) {
        if(event.target == popUp) {
            popUp.style.display = "none";
        }
    }    
}



