const btn_reset = document.querySelector(".reset");
const btn_black = document.querySelector(".black_pen");
const btn_wheel = document.querySelector(".color_wheel");
const btn_erase = document.querySelector(".Erase_tool");
const input_color = document.getElementById("colorPicker")
//const board = document.querySelector

function buildGrid(x, y, cellSize, gridElement) {

  gridElement.style.display = "grid";
  gridElement.style.gridTemplateColumns = `repeat(${x}, ${cellSize}px)`;
  gridElement.style.gridTemplateRows = `repeat(${y}, ${cellSize}px)`;
 
  let squares = new DocumentFragment();

  for (let i = 0; i < x * y; i++) {
    let square = document.createElement('div');
    square.className = 'square';
    squares.appendChild(square);
    
    btn_black.addEventListener('click', (event) => {
      console.log(event.button)
      const state = document.getElementById("mode");
              state.textContent = 'Black pen';
    
          if (event.button === 0){ // activates draw event only when left button is clicked
            
            square.addEventListener('mousemove', function() {
              const state = document.getElementById("mode");
              
              
            });

          } 
         
          
      /* if (flag === 0 && event.button === 0 ){ // check if button has been clicked while hover effect is on
          console.log("OUTPUT");
      } */
          
    });

    btn_reset.addEventListener('click', () => { //?reset the board
      square.style.backgroundColor = 'white';
      const state = document.getElementById("mode");
      state.textContent = 'Reset board';
    });


    input_color.addEventListener('input', () => { //? change color by choice
      const state = document.getElementById("mode");
      state.textContent = 'Color choice';
      
      square.addEventListener('mousemove', function(){ //? move event with color speificed
        square.style.backgroundColor = input_color.value;
        

      });
      
    });

    btn_erase.addEventListener('click', () => {
      const state = document.getElementById("mode");
      state.textContent = 'Eraser';

      square.addEventListener('mousemove' ,function() {
        square.style.backgroundColor = 'white';
        
      });

    });

  }

  gridElement.appendChild(squares);
  
}




buildGrid(50, 50, 10,  document.querySelector(".grid"));
console.log("hello");




/* 

when button clicked flag == 1

when button clicked again flag = 0


if right button clicked flag = 0


check what flag is == to

	if flag == 1 and button clicked ( how to check if right button is clicked) and how to detect it 
		stop event from running ( how to stop and event)
	if flag == 0 and button clicked
		run event 
	else 
		keep running


======================================= */