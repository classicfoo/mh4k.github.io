console.log("Hello")

var input = document.getElementById("input_box");
//input.value = "aaa";

var filler = document.createElement("div");
filler.setAttribute("id", "filler");
document.getElementById("body").appendChild(filler)

var counter = 1;


function test() {

	document.getElementById("body").removeChild(filler)

	var m1 = document.createElement("p");
	m1.setAttribute("id", "m1");

	var m2 = document.createElement("p");
	m2.setAttribute("id", "m2");

	// var box = m1;
	//
	// if (counter / 2 === 0) {
	//   box = m1
	// } else {
	//   box = m2;
	// }

	var box = counter % 2 == 0 ? m1 : m2 ;
	box.innerHTML = input.value


	document.getElementById("body").appendChild(box)
	
	document.getElementById("body").appendChild(filler)

	window.scrollTo(0,document.body.scrollHeight);

	counter++;

	//input.value = "";

}
