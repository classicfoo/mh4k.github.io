console.log("Hello")

var input = document.getElementById("input_box");
input.value = "aaa";

var content = document.getElementById("content");

var filler = document.createElement("div");
filler.setAttribute("id", "filler");
content.appendChild(filler)

var counter = 1;


function test() {

	//content.removeChild(filler)

	var m1 = document.createElement("p");
	m1.setAttribute("id", "m1");

	var m2 = document.createElement("p");
	m2.setAttribute("id", "m2");

	var box = counter % 2 == 0 ? m1 : m2 ;
	box.innerHTML = input.value


	content.appendChild(box)
	
	//content.appendChild(filler)

	//window.scrollTo(0,document.body.scrollHeight);
	content.scrollTo(0,content.scrollHeight);
	//content.scrollTop = content.scrollHeight;

	counter++;

	input.value = "aaa";

}

function scrollToBottom() {

	content.scrollTo(0,content.scrollHeight);
}
