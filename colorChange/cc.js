

let content = document.querySelector('.content')
let randomBtn = document.querySelector('#randomBtn');
let colorInput = document.querySelector('#colorInput');
let applyBtn = document.querySelector('#applyBtn');
let colorVal = document.querySelector('.colorVal');

// console.log(randomBtn, colorInput, applyBtn,colorVal);


const colorChange = (color) =>{
    content.style.backgroundColor = color;
    colorVal.innerText = color;
}


const handleApplyClick = () => {
    let color = colorInput.value;
    colorChange(color);
    colorVal = color;
}


const arr = ['red','green','beige','blue'];

const generateRandomColor = ()=>{
    const randomNum = Math.floor(Math.random()*arr.length); //here if you multiply by 10 -> 0-9 ki range
    const randomColor = arr[randomNum];
    return randomColor;
}

const handleRandomClick = ()=>{
    let color = generateRandomColor();
    colorChange(color);
    
}




randomBtn.addEventListener('click', handleRandomClick);
applyBtn.addEventListener('click',handleApplyClick);

