var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
const btn = document.querySelector("button");

function setGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value  + ")";
	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

function defaultColor(){
	// body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	// css.textContent = body.style.background + ";";
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value  + ")";
	css.textContent = body.style.background + ";";
}

// function defaultColor1(){
// 	color1.value = #020566; 
// 	// body.style.background.slice(26, 40);
// }


body.addEventListener("onload", defaultColor());

function randomise() {
    color1.value = randomColor();
    color2.value = randomColor();
    setGradient();
}

btn.addEventListener('click', randomise)


// const randomNumber = () => {
//     const random1=(Math.floor(Math.random()*100));
//     const random2=(Math.floor(Math.random()*100));
// 	const random3=(Math.floor(Math.random()*100));
// 	const random4=(Math.floor(Math.random()*100));
//     const random5=(Math.floor(Math.random()*100));
//     const random6=(Math.floor(Math.random()*100));

//     body.style.background = `linear-gradient(to right,rgb(${random1},${random2},${random3}),rgb(${random4},${random5},${random6}))`;
// 	css.textContent = body.style.background + ';'
// }

// btn.addEventListener("click", randomNumber)


// // get a random rgb value in hex format (00-FF)
// const getRandomHexDigit = (start = 0, end = 255) => {
// 	const randomNumber = Math.floor(Math.random() * (end + 1)) + start;
// 	const hexNumber = randomNumber.toString(16);
// 	return hexNumber.length === 1 ? "0" + hexNumber : hexNumber;
//   };
  
//   // get a random color in hex format
//   const getRandomColor = (input) => {
// 	const red = getRandomHexDigit();
// 	const green = getRandomHexDigit();
// 	const blue = getRandomHexDigit();
// 	const randomColor = `#${red}${green}${blue}`;
// 	return randomColor;
//   };
  
//   // randomize the colors in both color pickers
//   const getRandomColors = () => {
// 	color1.value = getRandomColor();
// 	color2.value = getRandomColor();
// 	setBodyGradient();
//   }
  