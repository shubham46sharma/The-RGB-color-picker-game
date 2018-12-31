var numSquares = 6;
var colors = [];
var colorPicked;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var modeButton = document.querySelectorAll(".mode");
colorDisplay.textContent = colorPicked;



init();

function init(){
		//mode Button Event Listeners
	setUpModeButtons();
	setUpSquares();
	resetData();
}

function setUpModeButtons(){
	for(var i = 0; i<modeButton.length; i++){
		modeButton[i].addEventListener("click", function(){
		modeButton[0].classList.remove("selected");
		modeButton[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent === "Easy" ? numSquares = 3 : numSquares = 6; 
		resetData();
	});
	}
}

function  setUpSquares(){
	for(var i=0;i<squares.length;i++){
			//Add listener Event
			squares[i].addEventListener("click", function(){
			var colorClicked = this.style.background;
			if(colorClicked===colorPicked){
				messageDisplay.textContent = "Correct!";
				changeColor(colorClicked);
				reset.textContent = "Play Again?";
				h1.style.background = colorClicked;
			}
			else{
				messageDisplay.textContent = "Try Again!!";
				this.style.background = "#232323";
			}
		});
	}

}



function resetData(){
	reset.textContent = "New Colors";
		colors = pickRandomColor(numSquares);
		colorPicked = pickColor();
	colorDisplay.textContent = colorPicked;
	messageDisplay.textContent = "";
	for(var i = 0; i<squares.length;i++){
	if(colors[i]){
	squares[i].style.display="block";
	squares[i].style.background=colors[i];		
	}
		else{
			squares[i].style.display="none";		
		}
		h1.style.background = "steelblue";
	}
}

reset.addEventListener("click",function(){
	resetData();
	
});

function changeColor(color){
	for(var i = 0; i < squares.length; i++){
		squares[i].style.background = color;
	}
}

function pickColor(){
	var selectedColor = Math.floor(Math.random() * colors.length);
	return colors[selectedColor];
}

function pickRandomColor(num){
	//create an array
	var arr =[];
	//repeat num times
	for(var i=0; i < num; i++){
		arr[i] = randomColor();
	}
	//return array
	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	"rgb(r, g, b)"
	return	"rgb(" +r+ ", " +g+ ", " +b+ ")";
}


