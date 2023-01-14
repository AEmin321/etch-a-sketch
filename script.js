const grid=document.querySelector('.grid');
const bgInputColor=document.querySelector('#bgcolor');
const newButton=document.querySelector('.new');

window.addEventListener('load',()=>{
    createGrid(16,16);
    updateGridBgColor();
})

function createGrid (row,column){
    let total=row*column;
    console.log("hey");
    for (let i=0;i<total;i++){
        const cell=document.createElement('div');
        cell.classList.add('cell');
        cell.classList.toggle('grid-line');
        grid.appendChild(cell);
    }
}

function toggleGrid(){
    const cells=document.querySelectorAll('.cell');
    cells.forEach((cell)=>cell.classList.toggle('grid-line'))
}

function updateGridBgColor (){
    bgInputColor.addEventListener('input',(e)=>{
            const cells=document.querySelectorAll('.grid-line');
            cells.forEach((cell)=>{
            cell.style.backgroundColor=e.target.value;
        })
    });
}