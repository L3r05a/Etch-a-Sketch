const container = document.querySelector('.container');

const button = document.querySelector('button');

let value =  10;

function eAS(value){



for (let n = 0; n < value; n++){

    const columns = document.createElement('div');
    columns.classList.add('column');
    container.appendChild(columns);
 


    for (let n = 0; n < value; n++) {
        const rows = document.createElement('div');
        rows.classList.add('row');
        columns.appendChild(rows);
        rows.addEventListener('mouseenter', () =>{
            rows.style.backgroundColor = 'yellow'
        })


            button.addEventListener('click', () => {

            rows.style.backgroundColor = 'white';

            
    })
        }}
}     
       
eAS(value);



        // button.addEventListener('click', () => {
// reset
// let newValue = prompt ('New Grid?', 16);
// if (newValue >0 && newValue <100){
//     value = 0;
//     eAS(newValue);
// } else {
//     prompt ('too much, not enough');
// }

// })









