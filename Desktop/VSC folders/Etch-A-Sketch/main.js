function buildGrid(x, y, cellSize, gridElement) {
  gridElement.style.display = "grid";
  gridElement.style.gridTemplateColumns = `repeat(${x}, ${cellSize}px)`;
  gridElement.style.gridTemplateRows = `repeat(${y}, ${cellSize}px)`;
 
  let squares = new DocumentFragment();

  for (let i = 0; i < x * y; i++) {
    let square = document.createElement('div');
    square.className = 'square';
    squares.appendChild(square);
    square.addEventListener('mouseenter',() => {
    square.style.backgroundColor = 'black'
    })
  }

  gridElement.appendChild(squares);
  
}


buildGrid(11, 11, 25,  document.querySelector(".grid"));
  