const color_button=document.querySelectorAll('.color-btn');
const random_button= document.getElementById('random-button');
const reset_button= document.getElementById('reset-button');
const color_code_button= document.getElementById('color-code');
function changeBackground(color){
    body.style.backgroundColor=color;
    colorCodeSpan.textContent=color;
}
function generateRandomColor(){
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    return randomColor;
}
color_button.forEach(button=>{
    Add.addEventListener('click',()=>)
})