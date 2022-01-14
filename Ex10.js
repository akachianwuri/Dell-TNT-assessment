let filterHeaders = Array.from(document.querySelectorAll(".anavmfe__accordion__item .anavmfe__accordion__item__name"))
filterHeaders.splice(0,1)
let headerLinks = []

filterHeaders.forEach(filterHeader => {
	var linkText = filterHeader.innerText
	var a = document.createElement('a')
	a.style.paddingRight = "5px"
	var link = document.createTextNode(linkText)
    a.appendChild(link)
	
	const checkBoxes = Array.from(filterHeader.parentNode.parentNode.querySelectorAll(".anavmfe__accordion__row_item input"))
	var idList = checkBoxes.map(x => x.value).join(',')
	
	a.href = "/en-us/member/shop/dell-laptops/sr/laptops/xps?appliedRefinements=" + idList
	
	headerLinks.push(a)
})

let referenceDiv = document.getElementById("cat-fran-rows")
let headerLinksDiv = document.createElement("div")
headerLinks.forEach(headerLink => {
	headerLinksDiv.appendChild(headerLink)
})

referenceDiv.prepend(headerLinksDiv)