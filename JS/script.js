const eleGrid = document.querySelector('.grid');

createGrid(100, eleGrid);

// FUNCTION

function createGrid(numCells, eleContainer) {
	for (let i = 0; i < numCells; i++) {
		eleContainer.innerHTML += `<div class="cell"> ${i + 1} </div>`;
	}
}