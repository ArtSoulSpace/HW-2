const title = document.getElementById('title');
const input = document.getElementById('input');
const btn = document.getElementById('btn');

btn.onclick = function(){
    title.textContent = input.value;
}