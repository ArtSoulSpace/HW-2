const countButton = document.getElementsByClassName("count-button")[0];

let clicks = 0;
let date = 0;

countButton.onclick = function countButtonHandler() {
    let clickDate = Date.now();
    console.log('clickDate - date', clickDate - date);

    if((clickDate - date) > 1000){
        date = clickDate;
        clicks++;
        this.textContent = `По мне кликнули ${clicks} раз`;
    } else{
        clicks = 0;
        this.textContent = 'Стоп! Ни так быстро';
        countButton.disabled = true;
    }
};