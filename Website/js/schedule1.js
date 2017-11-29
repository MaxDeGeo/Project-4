window.onload = function() {
    ColorCreator();
}

function ColorCreator() {
    let cardArray = document.querySelectorAll("#cards-content div .col")
    let tempValue = 0;


    for(let x = 0; x < cardArray.length; x++)
    {
        switch(x % 7)
        {
            case 0:
            //cardArray[x].style.backgroundColor = "lightcoral";
            cardArray[x].style.backgroundColor = "red";
            break;

            case 1:
            //cardArray[x].style.backgroundColor = "lightsalmon";
            cardArray[x].style.backgroundColor = "orange";
            break;
            
            case 2:
            //cardArray[x].style.backgroundColor = "lightgoldenrodyellow";
            cardArray[x].style.backgroundColor = "yellow";
            break;

            case 3:
            //cardArray[x].style.backgroundColor = "lightgreen";
            cardArray[x].style.backgroundColor = "green";
            break;

            case 4:
            //cardArray[x].style.backgroundColor = "lightskyblue";
            cardArray[x].style.backgroundColor = "blue";
            break;

            case 5:
            //cardArray[x].style.backgroundColor = "lightindigo";
            cardArray[x].style.backgroundColor = "indigo";
            break;

            case 6:
            //cardArray[x].style.backgroundColor = "lightviolet";
            cardArray[x].style.backgroundColor = "violet";
            break;

            default:
            cardArray[x].style.backgroundColor = "black";
            break;
        }
    }
}