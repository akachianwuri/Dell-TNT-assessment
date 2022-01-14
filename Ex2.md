const allParagraphs = document.querySelectorAll("p");
//remove last element
const allParagraghsExceptLast = Array.from(allParagraphs).slice(0, -1);

allParagraghsExceptLast.forEach(elem => {
	elem.addEventListener('click', event => {
	  // do something
	});
});