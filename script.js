const container = document.querySelector('.container');

const button = document.querySelector('button');

//random color generator
function generateColor(){
    const hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    let code = "";
    for(let i=0; i<6; i++){
     code += hexArray[Math.floor(Math.random()*16)];
    }
    return `#${code}`

   }

 
//opacity increment function and colour call
function darken (element) {
    let opacity = parseFloat(element.style.opacity) || 0;
    opacity = Math.min(opacity +0.1, 1);
    element.style.opacity = opacity;
    element.style.backgroundColor = generateColor();
    
}
  


//grid generation   
function hAS(value){

 //default value or if prompt is invalid   
if (value === undefined) {
    value = 16;
}

for (let n = 0; n < value; n++){

    let columns = document.createElement('div');
    columns.classList.add('column');
    container.appendChild(columns);
 

    //nested rows
    for (let n = 0; n < value; n++) {
        let rows = document.createElement('div');
        rows.classList.add('row');
        columns.appendChild(rows);
        rows.style.opacity = '0.1';

        //mouse listener and opacity call
        rows.addEventListener('mouseenter', (event) =>{

          
            rows.style.opacity = darken (event.target);
            
        })

    }}
}   
hAS();

//reset button logic
button.addEventListener("click", () => {
    
    let value = prompt('Lines per side?');

    if (value > 0 && value < 100) {
    container.innerHTML = '';//resets the entire container
    hAS(value);

    } else  {
    alert('Choose between 1 and 100 only.');
    container.innerHTML = '';
    hAS();
}
})






