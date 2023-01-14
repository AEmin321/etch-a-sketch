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
        cell.classList.add('grid-line');
        console.log(i);
        grid.appendChild(cell);
    }
}

function updateGridBgColor (){
    bgInputColor.addEventListener('input',(e)=>{
            const cells=document.querySelectorAll('.cell');
            cells.forEach((cell)=>{
            cell.style.backgroundColor=e.target.value;
        })
    });
}


function reset(){
    while(grid.hasChildNodes()){
        grid.removeChild(grid.firstChild);
    }
}


function createGrid(gridSize){
    for (let i=0;i<gridSize;i++){
        const cell=document.createElement('div');
        cell.classList.add('cell');
        grid.appendChild(cell);
    }
}