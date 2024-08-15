// inisialization
const inputBox = document.querySelector(".input-box");
const listContainer = document.querySelector(".list-container");
const alertText = document.querySelector(".alert");

// function add
const addTask = () => {
	if (
		inputBox.value
			.split("")
			.filter((e) => e.trim().length)
			.join("").length === 0
	) {
		alertText.innerHTML = "Tolong masukkan kata";
	} else {
		// append input to the list
		let li = document.createElement("li");
		li.innerHTML = inputBox.value;
		listContainer.appendChild(li);

		// append close button to the list
		let close = document.createElement("span");
		close.innerHTML = "\u00d7";
		close.className = "close";
		li.appendChild(close);
	}
	saveData();
	inputBox.value = "";
};

// when user click list to-do
listContainer.addEventListener(
	"click",
	function (e) {
		// e.target  ini akan berpengaruh ke semua child yang ada di dalam parent listContainer
		if (e.target.tagName === "LI") {
			e.target.classList.toggle("checked");
			saveData();
		} else if (e.target.tagName === "SPAN") {
			e.target.parentElement.remove(); // ini meremove parent dari span, yakni LI
			saveData();
		}
	},
	false
);

// store data in localStorage
function saveData() {
	localStorage.setItem("data", listContainer.innerHTML);
}
function showTask() {
	listContainer.innerHTML = localStorage.getItem("data");
}
// if user pressed enter in inputBox
inputBox.addEventListener("keydown", function (event) {
	if (event.key === "Enter") {
		addTask();
	}
});
showTask();
