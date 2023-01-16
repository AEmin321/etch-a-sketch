const grid=document.querySelector('.grid');
const bgInputColor=document.querySelector('#bgcolor');
const penInputColor=document.querySelector('#pencolor');
const newButton=document.querySelector('.new');
const clearButton=document.querySelector('.clear');
const eraserButton=document.querySelector('.eraser');
const rainbowButton=document.querySelector('.rainbow');
const fillButton=document.querySelector('.fill');

const DEFAULT_GRID=16;

window.addEventListener('load',()=>{
    createGrid (DEFAULT_GRID,DEFAULT_GRID);
    const cells=document.querySelectorAll('.cell');
    defaultSketch(cells);
    updateGridBgColor(cells);
})


//GENERATE A NEW GRID FROM USER PROMPT
newButton.addEventListener('click',()=>{
    newSketch();
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

// FILL MODE
fillButton.addEventListener('click',()=>{
    const cells=document.querySelectorAll('.cell');
    fillSketch(cells);
})

function fillSketch (cells){
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

// RAINBOW MODE
rainbowButton.addEventListener('click',()=>{
    const cells=document.querySelectorAll('.cell');
    rainbowSketch(cells);
})

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

// TOGGLE GRID LINES
function toggleGrid(){
    const cells=document.querySelectorAll('.cell');
    cells.forEach((cell)=>cell.classList.toggle('grid-line'));
}

function updateGridBgColor (cells){
    bgInputColor.addEventListener('input',(e)=>{
            cells.forEach((cell)=>{
            cell.style.backgroundColor=e.target.value;
        })
    });
}

// ERASER MODE
eraserButton.addEventListener('click',()=>{
    const cells=document.querySelectorAll('.cell');
    eraseSketch(cells);
})

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

// CLEAR THE GRID
clearButton.addEventListener('click',()=>{
    const cells=document.querySelectorAll('.cell');
    clearSketch(cells);
})
function clearSketch (cells){
    cells.forEach((cell)=>{
        cell.style.backgroundColor=bgInputColor.value;
    })
}

// GENERATING A RANDOM COLOR
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