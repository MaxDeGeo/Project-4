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

    $(".basic").spectrum({
        color: "#f00",
        change: function(color) {
            $("#basic-log").text("change called: " + color.toHexString());
        }
    });
    
    $("#full").spectrum({
        color: "#ECC",
        showInput: true,
        className: "full-spectrum",
        showInitial: true,
        showPalette: true,
        showSelectionPalette: true,
        maxSelectionSize: 10,
        preferredFormat: "hex",
        localStorageKey: "spectrum.demo",
        move: function (color) {
            
        },
        show: function () {
        
        },
        beforeShow: function () {
        
        },
        hide: function () {
        
        },
        change: function() {
            
        },
        palette: [
            ["rgb(0, 0, 0)", "rgb(67, 67, 67)", "rgb(102, 102, 102)",
            "rgb(204, 204, 204)", "rgb(217, 217, 217)","rgb(255, 255, 255)"],
            ["rgb(152, 0, 0)", "rgb(255, 0, 0)", "rgb(255, 153, 0)", "rgb(255, 255, 0)", "rgb(0, 255, 0)",
            "rgb(0, 255, 255)", "rgb(74, 134, 232)", "rgb(0, 0, 255)", "rgb(153, 0, 255)", "rgb(255, 0, 255)"], 
            ["rgb(230, 184, 175)", "rgb(244, 204, 204)", "rgb(252, 229, 205)", "rgb(255, 242, 204)", "rgb(217, 234, 211)", 
            "rgb(208, 224, 227)", "rgb(201, 218, 248)", "rgb(207, 226, 243)", "rgb(217, 210, 233)", "rgb(234, 209, 220)", 
            "rgb(221, 126, 107)", "rgb(234, 153, 153)", "rgb(249, 203, 156)", "rgb(255, 229, 153)", "rgb(182, 215, 168)", 
            "rgb(162, 196, 201)", "rgb(164, 194, 244)", "rgb(159, 197, 232)", "rgb(180, 167, 214)", "rgb(213, 166, 189)", 
            "rgb(204, 65, 37)", "rgb(224, 102, 102)", "rgb(246, 178, 107)", "rgb(255, 217, 102)", "rgb(147, 196, 125)", 
            "rgb(118, 165, 175)", "rgb(109, 158, 235)", "rgb(111, 168, 220)", "rgb(142, 124, 195)", "rgb(194, 123, 160)",
            "rgb(166, 28, 0)", "rgb(204, 0, 0)", "rgb(230, 145, 56)", "rgb(241, 194, 50)", "rgb(106, 168, 79)",
            "rgb(69, 129, 142)", "rgb(60, 120, 216)", "rgb(61, 133, 198)", "rgb(103, 78, 167)", "rgb(166, 77, 121)",
            "rgb(91, 15, 0)", "rgb(102, 0, 0)", "rgb(120, 63, 4)", "rgb(127, 96, 0)", "rgb(39, 78, 19)", 
            "rgb(12, 52, 61)", "rgb(28, 69, 135)", "rgb(7, 55, 99)", "rgb(32, 18, 77)", "rgb(76, 17, 48)"]
        ]
    });    
}

function AddItem() {

    let popUp = document.querySelector("#popUp");

    popUp.style.display = "none";

    let eventName = document.querySelector("#eventName");
    let days = document.querySelectorAll("#boxes input");
    let start = document.querySelector("#startSelect");
    let end = document.querySelector("#endSelect");
    let color = document.querySelector("#full");
    let grid = document.querySelectorAll(".activity-col");
    
    let startTime = start.options[start.selectedIndex];
    let endTime = end.options[end.selectedIndex];
    
    let height = "45px";
    let breakLine = document.createElement("br");

    let card = document.createElement("div");
    card.style.height = height;
    card.style.backgroundColor = color.value;

    let text = document.createElement("div");
    text.innerHTML = eventName.value;
    text.appendChild(breakLine);
    text.innerHTML += startTime.value + " - " + endTime.value;
    
    
    text.style.color = "black";
    text.style.paddingTop = "7px";

    card.appendChild(text);
    
    for(let x = 0; x < days.length; x++)
    {
        if(days[x].checked === true)
        {
            switch(days[x].value)
            {
                case "sunday":
                    for(let y = 0; y < grid.length; y++)
                    {
                        if($(grid[y]).hasClass("empty"))
                        {
                            grid[y].appendChild(card.cloneNode(true));
                            $(grid[y]).removeClass("empty");
                            break;
                        }
                        else
                        {
                            y += 6;
                        }
                    }
                    break;

                case "monday":
                    for(let y = 1; y < grid.length; y++)
                    {
                        if($(grid[y]).hasClass("empty"))
                        {
                            grid[y].appendChild(card.cloneNode(true));
                            $(grid[y]).removeClass("empty");
                            break;
                        }
                        else
                        {
                            y += 6;
                        }
                    }
                    break;

                case "tuesday":
                    for(let y = 2; y < grid.length; y++)
                    {
                        if($(grid[y]).hasClass("empty"))
                        {
                            grid[y].appendChild(card.cloneNode(true));
                            $(grid[y]).removeClass("empty");
                            break;
                        }
                        else
                        {
                            y += 6;
                        }
                    }
                    break;

                case "wednesday":
                    for(let y = 3; y < grid.length; y++)
                    {
                        if($(grid[y]).hasClass("empty"))
                        {
                            grid[y].appendChild(card.cloneNode(true));
                            $(grid[y]).removeClass("empty");
                            break;
                        }
                        else
                        {
                            y += 6;
                        }
                    }
                    break;

                case "thursday":
                    for(let y = 4; y < grid.length; y++)
                    {
                        if($(grid[y]).hasClass("empty"))
                        {
                            grid[y].appendChild(card.cloneNode(true));
                            $(grid[y]).removeClass("empty");
                            break;
                        }
                        else
                        {
                            y += 6;
                        }
                    }
                    break;

                case "friday":
                    for(let y = 5; y < grid.length; y++)
                    {
                        if($(grid[y]).hasClass("empty"))
                        {
                            grid[y].appendChild(card.cloneNode(true));
                            $(grid[y]).removeClass("empty");
                            break;
                        }
                        else
                        {
                            y += 6;
                        }
                    }
                    break;

                case "saturday":
                    for(let y = 6; y < grid.length; y++)
                    {
                        if($(grid[y]).hasClass("empty"))
                        {
                            grid[y].appendChild(card.cloneNode(true));
                            $(grid[y]).removeClass("empty");
                            break;
                        }
                        else
                        {
                            y += 6;
                        }
                    }
                    break;
            }
        }
    }
    document.querySelector("form").reset();
}

function Display(event) {

    let day = event.target.innerHTML;
    let grid = document.querySelectorAll(".activity-col");
    let width = grid[0].style.width;
    let height = "45px";

    if(event.target.style.color === "black")
    {
        event.target.style.color = "white";
    }
    else
    {
        event.target.style.color = "black";
    }

    switch(day)
    {
        case "Sunday":

            for(let x = 0; x < grid.length; x++)
            {
                if(grid[x].style.visibility === "visible")
                {
                    grid[x].style.visibility = "hidden";
                    x+=6;
                }
                else
                {
                    grid[x].style.visibility = "visible";
                    x+=6;
                }
            }
            break;

        case "Monday":
            for(let x = 1; x < grid.length; x++)
            {
                if(grid[x].style.visibility === "visible")
                {
                    grid[x].style.visibility = "hidden";
                    x+=6;
                }
                else
                {
                    grid[x].style.visibility = "visible";
                    x+=6;
                }
            }
            break;

        case "Tuesday":
            for(let x = 2; x < grid.length; x++)
            {
                if(grid[x].style.visibility === "visible")
                {
                    grid[x].style.visibility = "hidden";
                    x+=6;
                }
                else
                {
                    grid[x].style.visibility = "visible";
                    x+=6;
                }
            }
            break;

        case "Wednesday":
            for(let x = 3; x < grid.length; x++)
            {
                if(grid[x].style.visibility === "visible")
                {
                    grid[x].style.visibility = "hidden";
                    x+=6;
                }
                else
                {
                    grid[x].style.visibility = "visible";
                    x+=6;
                }
            }
            break;

        case "Thursday":
            for(let x = 4; x < grid.length; x++)
            {
                if(grid[x].style.visibility === "visible")
                {
                    grid[x].style.visibility = "hidden";
                    x+=6;
                }
                else
                {
                    grid[x].style.visibility = "visible";
                    x+=6;
                }
            }
            break;

        case "Friday":
            for(let x = 5; x < grid.length; x++)
            {
                if(grid[x].style.visibility === "visible")
                {
                    grid[x].style.visibility = "hidden";
                    x+=6;
                }
                else
                {
                    grid[x].style.visibility = "visible";
                    x+=6;
                }
            }
            break;

        case "Saturday":
            for(let x = 6; x < grid.length; x++)
            {
                if(grid[x].style.visibility === "visible")
                {
                    grid[x].style.visibility = "hidden";
                    x+=6;
                }
                else
                {
                    grid[x].style.visibility = "visible";
                    x+=6;
                }
            }
            break;
    }
}

