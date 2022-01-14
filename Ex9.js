let containerElement = document.querySelector(".quick-links-outer-container")
let rowElements = Array.from(containerElement.querySelectorAll(".row"))
const backgroundColors = ['purple', 'green', 'orange']

rowElements.forEach((rowElement) => { 
	let linkElements = Array.from(rowElement.querySelectorAll("a"))
	
	linkElements.forEach((linkElement,index) => {		
		linkElement.href = "javascript:void(0);"
		
		linkElement.parentNode.addEventListener('click', event => {
			const catSections = document.querySelectorAll(".half-hero-outer-container a div")
			for(var catSection of catSections) {
				catSection.style.backgroundColor = backgroundColors[index]
			}
		})	
	})
})

let cameraDiv = document.querySelector(".half-hero-outer-container a[href$='8332']").parentNode.parentNode
let imageElements = Array.from(cameraDiv.querySelectorAll(".half-inner-module-image img"))

let networkingDiv = document.querySelector(".half-hero-outer-container a[href$='4011']").parentNode.parentNode
let networkImageElements = Array.from(networkingDiv.querySelectorAll(".half-inner-module-image img"))

networkImageElements.forEach((elem, index) => {
	elem.src = imageElements[index].src;
});

(function () {
  let powerDiv = document.querySelector(".half-hero-outer-container a[href$='8346']").parentNode.parentNode
  let priceDivs = Array.from(powerDiv.querySelectorAll(".half-hero-pricing"))
  let sum = priceDivs.map(x => parseFloat(x.innerText.split("$")[1])).reduce((a, b) => a + b, 0)
  alert(sum)
})()