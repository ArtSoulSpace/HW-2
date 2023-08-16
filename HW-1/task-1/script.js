const btnRed = document.getElementById('btn-red');
const btnGreen = document.getElementById('btn-green');
const btnBlue = document.getElementById('btn-blue');

const body = document.getElementById('body');

btnRed.onclick = function(){
    body.style.backgroundColor = 'red';
}
btnGreen.onclick = function(){
    body.style.backgroundColor = 'green';
}
btnBlue.onclick = function(){
    body.style.backgroundColor = 'blue';
}