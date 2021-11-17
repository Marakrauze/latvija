//button pop up container

let container = document.getElementById('container');

function myFunction() {
    

        if (container.style.display === 'none') {
            container.style.display = 'block';
        } else {
            container.style.display = 'none';
        }

};

function myFunctionTwo() {
    let container = document.getElementById('containerTwo');

        if (container.style.display === 'none') {
            container.style.display = 'block';
        } else {
            container.style.display = 'none';
        }

};

function myFunctionThree() {
    let container = document.getElementById('containerThree');

        if (container.style.display === 'none') {
            container.style.display = 'block';
        } else {
            container.style.display = 'none';
        }

};


//drag and drop pictures

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();

    let data = ev.dataTransfer.getData("text");
    let evtarget = ev.target;

    if (evtarget == "[object HTMLImageElement]"){
        evtarget = evtarget.parentNode;
    }
    else {
        ev.target.appendChild(document.getElementById(data));
    }
}

//game reset

    function reset1(){
var container = document.getElementById("game1");
container.innerHTML= html;
}                
var html;
window.onload = function(){
    html = document.getElementById('game1').innerHTML;
};         


//flip function

    let card = document.getElementById('card');

        card.addEventListener("click", function() {
            
        card.style.transform = "rotateY(180deg)";
        card.style.transitionDuration = "1.5s";

        });

    let cardTwo = document.getElementById('cardTwo');

        cardTwo.addEventListener("click", function() {
            
        cardTwo.style.transform = "rotateY(180deg)";
        cardTwo.style.transitionDuration = "1.5s";

        });

        let cardThree = document.getElementById('cardThree');

        cardThree.addEventListener("click", function() {
            
        cardThree.style.transform = "rotateY(180deg)";
        cardThree.style.transitionDuration = "1.5s";

        });
  