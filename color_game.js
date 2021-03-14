var numSquare=9;
var colors=[];
var colorpicker;
var squares = document.querySelectorAll(".square");
var discol = document.getElementById("discol");
var mesdis = document.getElementById("message");
var h1= document.querySelector("h1");
var buttonreset=document.querySelector("#reset");
var modeButton = document.querySelectorAll(".mode");


init();

function init()
{
	setupMode();
	setupSquare();
	reset();
}

function setupMode()
{
	for(var i=0; i< modeButton.length;i++)
	{
		modeButton[i].addEventListener("click",function(){
			modeButton[0].classList.remove("selected");
			modeButton[1].classList.remove("selected");
			modeButton[2].classList.remove("selected");
			this.classList.add("selected");
			if(this.textContent==="Easy"){
				numSquare=3;
			}
			else if(this.textContent==="Medium"){
				numSquare=6;
			}
			else if(this.textContent==="Hard")
			{
				numSquare=9;
			}
			//this.textContent ==="Easy" ? numSquare=3 : numSquare=6 ;
			reset();
		});
	}
}
/*Adding Event to EASY BUTTON */
/*easyBtn.addEventListener("click",function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	reset();
	numSquare=3;
	colors= generateRandonColor(numSquare);
	colorpicker = pickcolor();
	discol.textContent=colorpicker;

	for(var i=0; i<squares.length;i++)
	{
		if(colors[i])
		{
			squares[i].style.backgroundColor = colors[i];
		}
		else
		{
			squares[i].style.display="none";
		}
	}
});

/*Adding Event to HARD BUTTON */
/*hardBtn.addEventListener("click",function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	reset();
	numSquare=6;
	colors= generateRandonColor(numSquare);
	colorpicker = pickcolor();
	discol.textContent=colorpicker;

	for(var i=0; i<squares.length;i++)
	{
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display="block";
	}
});*/
/* FOR CREATING SQUARE BUTTON CONTAING RANDOM COLOR */
function setupSquare()
{
	for(var i=0;i<squares.length;i++)
	{
		//squares[i].style.backgroundColor = colors[i]; // adding colors to the squares.
		squares[i].addEventListener("click",function(){  // adding event to the squares
			var pickedcolor = this.style.backgroundColor;
			//alert(pickedcolor)
			if(pickedcolor === colorpicker){
				mesdis.textContent="Correct";
				mesdis.style.color=pickedcolor;
				buttonreset.textContent="Play Again ?";
				colorchange(pickedcolor);
				h1.style.backgroundColor=pickedcolor;
			}
			else{
				this.style.backgroundColor="#232323";
				mesdis.textContent="Try Again";
				mesdis.style.color="red";
			}
			
		});
	}
}

/* FOR CHANGING THE COLOR TO THE EACH SQUARES */
function colorchange(color){
	//loop through all squares
	for(var i=0;i<squares.length;i++)
	{
		//change each square color to match given color
		squares[i].style.backgroundColor=colorpicker;
	}
}
/* PICKING ONE OF THE RANDOM COLOR FOR GUESSING */
function pickcolor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

/* FOR CREATING RANDOM COLOR */
function generateRandonColor(num){
	//create an array
	var arr=[];
	for(var i=0;i<num;i++)
	{
		// select the random color and push into the array
		arr.push(randomColor());
	}
	return arr;
}

/* MAKING RANDOM COLOR USING RED , GREEN , BLUE COLOR */
function randomColor()
{
	// for "red" select random number between 0 - 255
	var r = Math.floor(Math.random()*256);
	// for "green" select random number between 0 - 255
	var g = Math.floor(Math.random()*256);
	// for "blue" select random number between 0 - 255
	var b = Math.floor(Math.random()*256);
	
	return "rgb(" + r + ", "+g+", "+b+")";

}

/* RESET BUTTON */
buttonreset.addEventListener("click",function(){
	// generate random colors;
	reset();
});
function reset()
{
	colors=	generateRandonColor(numSquare);
	// pick new random color from array
	colorpicker = pickcolor();
	// change display color 
	discol.textContent=colorpicker;
	buttonreset.textContent="New Colors";
	mesdis.textContent="";
	//chnage color to the squares
	for(var i=0;i<squares.length;i++)
	{
		if(colors[i]){
			squares[i].style.display ="block";
			squares[i].style.backgroundColor=colors[i];
		}
		else
		{
			squares[i].style.display="none";
		}
	}
	h1.style.backgroundColor="steelblue";
	
}