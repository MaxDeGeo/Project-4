window.onload = function() {
    
    ColorCreator();
    $( ".draggable" ).draggable({
        revert: "invalid",
        appendTo: 'body',
        stack: ".draggable",
        helper: 'clone',
        start: function(ev, ui) {
            ui.helper.width($(this).width());
        }
    });

    console.log("Working");
    $( ".droppable" ).droppable({
        tolerance: 'pointer',
        hoverClass: 'highlight',
        drop: function(event, ui) {
            if ($(this).hasClass("droppable")) {
                $(this).removeClass("empty").addClass("filled");
                /*
                if(ui.draggable === null)
                {
                    $(this).droppable("enabled");
                }
                else
                {
                    $(this).droppable("disable");    
                }
                */
                $(ui.draggable).draggable("disable");
                
            } else {
              return false;
            }
            let item = ui.draggable;
            
            if (!ui.draggable.closest('.empty').length) item = item.draggable(); // if item was dragged from the source list - clone it
            //this.innerHTML = ''; // clean the placeholder
            //item.css({
              //top: 15,
              //left: 15
            //}).appendTo(this); // append item to placeholder 
            item.clone().appendTo($(this));
            item.draggable("enable");
        }
        });
        
        $(".target").on('click', '.closer', function() {
          var item = $(this).closest('.item');
          item.fadeTo(200, 0, function() {
            item.remove();
          }) 
        });   
}

function LockInPlace(schedulePosition, contentElement) {
    let thisPosition = schedulePosition;
    
    let content = contentElement;

    content.style.top = schedulePosition.style.top;
    content.style.left = schedulePosition.style.left;
}

function ColorCreator() {

    let cardArray;

    if($(window).width() <= 375)
    {
        cardArray = document.querySelectorAll("#responsive-cards-content div .col");
    }
    else
    {
        cardArray = document.querySelectorAll("#cards-content div .col")        
    }
    
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
