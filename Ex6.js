let parentDiv = document.getElementById('tt-content');
let divToMoveFirst = parentDiv.childNodes.item(2)
let divToMove = parentDiv.childNodes.item(3)
let removedDivFirst = parentDiv.removeChild(divToMoveFirst)
let removedDiv = parentDiv.removeChild(divToMove)

let referenceDiv = parentDiv.childNodes.item(4)

parentDiv.insertBefore(removedDivFirst, referenceDiv)
parentDiv.insertBefore(removedDiv, referenceDiv)