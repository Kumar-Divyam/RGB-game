var mode =6;

var easybtn = document.querySelector("#easybtn");
var hardbtn = document.querySelector("#hardbtn");

easybtn.addEventListener("click", function(){
    easybtn.classList.add("selected");
    hardbtn.classList.remove("selected");
    mode=3;
    colors = genearteRandomColors(mode);
    pickedColor = colors[pickColor()];
    key.textContent = pickedColor;
    for( var i=0; i < squares.length ;i++ ){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        } else{
            squares[i].style.display="none";
        }
    }
    h1.style.backgroundColor = "steelblue";
    messageDisplay.textContent = "";

});
hardbtn.addEventListener("click", function(){
    hardbtn.classList.add("selected");
    easybtn.classList.remove("selected");
    mode = 6;
    colors = genearteRandomColors(mode);
    pickedColor = colors[pickColor()];
    key.textContent = pickedColor;
    for( var i=0; i < squares.length ;i++ ){
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display="block";
    }
    h1.style.backgroundColor = "steelblue";
    messageDisplay.textContent = "";

});

var colors = genearteRandomColors(mode);

var squares = document.querySelectorAll(".square");
var pickedColor = colors[pickColor()];
var messageDisplay = document.querySelector("#message");

var key = document.getElementById("key");
var h1 = document.querySelector("h1");

resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", function(){
    colors = genearteRandomColors(mode);
    pickedColor = colors[pickColor()];
    key.textContent = pickedColor;
    for( var i=0; i < squares.length ;i++ ){
        squares[i].style.backgroundColor = colors[i];
    }

    h1.style.backgroundColor = "steelblue";
    messageDisplay.textContent = "";
    this.textContent = "NEW COLORS";
})

key.textContent = pickedColor;

for( var i=0; i < squares.length ;i++ ){

    squares[i].style.backgroundColor = colors[i];

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

