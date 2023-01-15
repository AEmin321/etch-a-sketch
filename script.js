const grid=document.querySelector('.grid');
const bgInputColor=document.querySelector('#bgcolor');
const penInputColor=document.querySelector('#pencolor');
const newButton=document.querySelector('.new');
const clearButton=document.querySelector('.clear');
const eraserButton=document.querySelector('.eraser');
const rainbowButton=document.querySelector('.rainbow');
const fillButton=document.querySelector('.fill');

window.addEventListener('load',()=>{
    createGrid(16,16);
    const cells=document.querySelectorAll('.cell');
    updateGridBgColor(cells);
    defaultSketch(cells);
})

function newSketch (){
    let gridSize=prompt("Enter a value between 1-100 :");

    grid.style.gridTemplateColumns=`repeat(${gridSize},1fr)`;
    grid.style.gridTemplateRows=`repeat(${gridSize},1fr)`;
    grid.innerHTML='';
    createGrid(gridSize,gridSize);
    const cells=document.querySelectorAll('.cell');
    defaultSketch(cells);
}

function fillSketch (){
    const cells=document.querySelectorAll('.cell');
    toggle(fillButton);
    if(fillButton.value=='ON'){
        fillButton.classList.toggle('toggle');
        grid.addEventListener('click',()=>{
            cells.forEach((cell)=>{
                cell.style.backgroundColor=penInputColor.value;
            })
        })
    }else {
        fillButton.classList.toggle('toggle');
        defaultSketch(cells);
    }
}

function rainbowSketch (cells){
    toggle(rainbowButton);
    if (rainbowButton.value=='ON'){
        rainbowButton.classList.toggle('toggle');
        cells.forEach((cell)=>{
            cell.addEventListener('mouseover',()=>{
                cell.style.backgroundColor=randomColor();
            })
        })
    }else {
        rainbowButton.classList.toggle('toggle');
        defaultSketch(cells);
    }
}

rainbowButton.addEventListener('click',()=>{
    const cells=document.querySelectorAll('.cell');
    rainbowSketch(cells);
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

function randomColor(){
    const letters='0123456789ABCDEF'.split('');
    let color='#';
    for (let i=0;i<6;i++){
        color+=letters[Math.round(Math.random()*15)];
    }
    return color;
}

function toggle (button){
    if(button.value=='OFF'){
        button.value='ON';
    }else {
        button.value='OFF';
    }
}