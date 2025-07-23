const container = document.querySelector('.container');


for (let n = 0; n < 16; n++){

    const columns = document.createElement('div');
    columns.classList.add('column');
    container.appendChild(columns);


    for (let n = 0; n < 16; n++) {
        const rows = document.createElement('div');
        rows.classList.add('row');
        columns.appendChild(rows);
        }
}









