let sectionElement = document.getElementById("bottomcontent")
let articleElements = sectionElement.querySelectorAll("article")

for(var articleElement of articleElements) {  
	let headerText = articleElement.querySelector("h5").innerText
	const firstWord = headerText.split(" ")[0]
	
	let itemList = articleElement.querySelectorAll("li a")
	
	for(var itemElement of itemList) {
		itemElement.innerText = firstWord  + " - " + itemElement.innerText
	}
}