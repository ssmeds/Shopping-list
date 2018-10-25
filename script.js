var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listItems = document.getElementsByTagName("LI");


//Checks length of list dynamically
function listLength() {
	return listItems.length;
}

//Add "Delete" buttons after existing listitems
for (var i = 0; i < listLength(); i++) {
	var btn = document.createElement("button");
	btn.appendChild(document.createTextNode("Delete"));
	listItems[i].appendChild(btn);
	btn.onclick = deleteAfterClick;
	}

//Toggles the class of "done" when listitem is clicked on
function toggleListItem(event) {
	if (event.target.tagName === "LI") {
		event.target.classList.toggle("done");
	}
};

//Returns the length of input
function inputLength() {
	return input.value.length;
}

//Creates the listitem along with the "Delete" button
function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	
	var newButton = document.createElement("button");
	newButton.appendChild(document.createTextNode("Delete"));
	li.appendChild(newButton);
	newButton.onclick = deleteAfterClick;
}

//If input is longer than 0, and user clicks the button "Enter" then it runs the function "createListElement"
function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

//If input is longer than 0, and user presses the key "Enter" then it runs the function "createListElement"
function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

//If user presses the "Delete" button then the listitem is removed
function deleteAfterClick(event) {
	event.target.removeEventListener("click", deleteAfterClick, false);
	event.target.parentNode.remove();
}


//EventListeners
button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", toggleListItem);
