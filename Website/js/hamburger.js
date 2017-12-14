let dropdownMenu = document.querySelector(".hamburger-icon");
let navigation = document.querySelector("#hamburger-nav");
let cross = document.querySelector(".closebtn");
let openClose = false;

$(dropdownMenu).click(function(){
    if(openClose == false){
        cross.style.fontSize = "40px";
        
        navigation.style.width = "200px";
        openClose = true;
        console.log("You're here");
    }
    else{
        navigation.style.width = "0px";
        openClose = false;
        
    }
});

$(cross).click(function(){
    navigation.style.width = "0px";
    openClose = false;


});

