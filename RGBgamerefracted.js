var mode =6;
var colors = [];  
var pickedColor;

var squares = document.querySelectorAll(".square");
var messageDisplay = document.querySelector("#message");
var key = document.getElementById("key");
var h1 = document.querySelector("h1");
var modeButtons = document.querySelectorAll(".gamemode");
var resetButton = document.querySelector("#reset");

init();

function init(){
    //modeButttons event listeners
    setUpModeButtons();
    //set up square event listeners
    setUpSquares();

    reset();
}

function setUpModeButtons(){
    for(var i=0 ; i < modeButtons.length ; i++){
        modeButtons[i].addEventListener("click", function(){
            //hardcoding as only 2 butons
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this .classList.add("selected");

            this.textContent === "EASY" ? mode=3 : mode=6;
            reset();
        });
    }
}

function setUpSquares(){
    for( var i=0; i < squares.length ;i++ ){
        //adding click listeners to squares
        squares[i].addEventListener("click", function(){

            var clickedColor = this.style.backgroundColor;

            if(clickedColor === pickedColor){
                //correct

                messageDisplay.textContent = "correct";
                onCorrectAns(clickedColor);
                h1.style.backgroundColor = clickedColor;
                resetButton.textContent = "PLAY AGAIN?"

            } else{
                //wrong
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try again";
           }
        });
    }
}


function reset (){

    colors = genearteRandomColors(mode);
    pickedColor = colors[pickColor()];
    key.textContent = pickedColor;

    resetButton.textContent = "NEW COLORS";
    messageDisplay.textContent = "";

    for( var i=0; i < squares.length ;i++ ){
        if(colors[i]){
            squares[i].style.display="block";
            squares[i].style.backgroundColor = colors[i];
        } else{
            squares[i].style.display="none";
        }
    }
    h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", function(){
    reset();
})

function onCorrectAns(color){
    for( var i=0; i < squares.length ;i++ ){
         squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return random;
}

function genearteRandomColors(num){
    var arr =[];
    for(var i=0; i < num ; i++){
        arr.push(randomColor());
    }
    return arr;
}

function randomColor(){
    //red   green   blue
    var r=Math.floor(Math.random() * 256);
    var g=Math.floor(Math.random() * 256);
    var b=Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b +")";
}

