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

//grid generation   
function hAS(value){

 //defaults value or if prompt is invalid   
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

        //mouse colour 
        rows.addEventListener('mouseenter', () =>{

            rows.style.backgroundColor =generateColor();
            
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






