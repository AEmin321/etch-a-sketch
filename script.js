const grid=document.querySelector('.grid');
const bgInputColor=document.querySelector('#bgcolor');
const penInputColor=document.querySelector('#pencolor');
const newButton=document.querySelector('.new');
const clearButton=document.querySelector('.clear');
const eraserButton=document.querySelector('.eraser');

window.addEventListener('load',()=>{
    createGrid(16,16);
    const cells=document.querySelectorAll('.cell');
    updateGridBgColor(cells);
    defaultSketch(cells);
})

eraserButton.addEventListener('click',()=>{
    const cells=document.querySelectorAll('.cell')
    eraseSketch(cells);
})

function defaultSketch (cells){
    cells.forEach((cell)=>{
        cell.addEventListener('mouseover',()=>{
            cell.style.backgroundColor=penInputColor.value;
        })
    })
}

function createGrid (row,column){
    let total=row*column;
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

function updateGridBgColor (cells){
    bgInputColor.addEventListener('input',(e)=>{
            cells.forEach((cell)=>{
            cell.style.backgroundColor=e.target.value;
        })
    });
}

function clearSketch (){
    const cells=document.querySelectorAll('.cell');
    cells.forEach((cell)=>{
        cell.style.backgroundColor=bgInputColor.value;
    })
}

function eraseSketch (cells){
    toggle(eraserButton);
    if(eraserButton.value=='ON'){
        eraserButton.classList.toggle('toggle');
        cells.forEach((cell)=>{
            cell.addEventListener('mouseover',()=>{
                cell.style.backgroundColor=bgInputColor.value;
            })
        })
    }else {
        eraserButton.classList.toggle('toggle');
        defaultSketch(cells);
    }
}

function toggle (button){
    if(button.value=='OFF'){
        button.value='ON';
    }else {
        button.value='OFF';
    }
}