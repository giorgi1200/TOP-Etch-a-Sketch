const container = document.getElementById('container');
const slider = document.getElementById('slider');
const sizeDisplay = document.getElementById('size');
const colorPicker = document.getElementById('favcolor');
const eraserButton = document.getElementById('eraserButton');

let isMouseDown = false;
let isEraserActive = false;

function createGrid(size) {
  container.innerHTML = '';
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.addEventListener('mousedown', function () {
      isMouseDown = true;
      if (isEraserActive) {
        square.style.backgroundColor = 'white';
      } else {
        square.style.backgroundColor = colorPicker.value;
      }
    });
    square.addEventListener('mouseover', function () {
      if (isMouseDown) {
        if (isEraserActive) {
          square.style.backgroundColor = 'white';
        } else {
          square.style.backgroundColor = colorPicker.value;
        }
      }
    });
    square.addEventListener('mouseup', function () {
      isMouseDown = false;
    });
    container.appendChild(square);
  }
}

function updateGridSizeDisplay(size) {
  document.getElementById('gridSize').innerText = size;
}

const defaultSize = 16;
createGrid(defaultSize);
updateGridSizeDisplay(defaultSize);

slider.addEventListener('input', function () {
  const size = this.value;
  updateGridSizeDisplay(size);
  createGrid(size);
});

eraserButton.addEventListener('click', function () {
  isEraserActive = !isEraserActive;
  if (isEraserActive) {
    eraserButton.style.backgroundColor = '#ccc'; 
  } else {
    eraserButton.style.backgroundColor = ''; 
  }
});
clearButton.addEventListener('click', function () {
    createGrid(slider.value); 
  });