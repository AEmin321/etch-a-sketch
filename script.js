const grid=document.querySelector(".flex-grid");
const btn=document.querySelector(".btn");


btn.addEventListener('click',()=>{
    const gridSize=prompt("Enter a value between 1-100");
    if (gridSize<100){
        reset();
        createGrid(gridSize*gridSize);
        const cells=document.querySelectorAll(".cell");
        cells.forEach((item)=>{
            item.addEventListener('mouseover',()=>{
                item.classList.add('blacked');
            })
        })
    }else {
        alert("Please enter value between 1 and 100");
        return;
    }
})

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