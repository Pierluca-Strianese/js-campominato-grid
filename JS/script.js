const eleGrid = document.querySelector('.grid');

createGrid(100, eleGrid);

const listCells = document.querySelectorAll('.cell');
for (let i = 0; i < listCells.length; i++) {
	const cell = listCells[i];
	cell.addEventListener('click',
		function colorCell() {
			console.log('cliccata cella n°', i + 1);
			this.classList.toggle('clicked');
		}
	);
}

// FUNCTION

function createGrid(numCells, eleContainer) {
	for (let i = 0; i < numCells; i++) {
		eleContainer.innerHTML += `<div class="cell"> ${i + 1} </div>`;
	}
}