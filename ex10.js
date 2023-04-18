const numberPie = document.querySelector('#number-pie');
const btnDraw = document.querySelector('.btn-draw');
const btnSpin = document.querySelector('.btn-spin');
const wheel= document.querySelector('.wheel');

btnDraw.addEventListener('click', function(){
    wheel.innerHTML = '';
    for(let i = 0; i < numberPie.value; i++){
        const a = 360 / numberPie.value * i;
        const y1 = 50 - 50 * Math.tan(Math.PI / numberPie.value);
        const y2= 50 + 50 * Math.tan(Math.PI / numberPie.value);
        const pie = document.createElement('div');
        pie.classList.add('pie');
        pie.style.transform = `rotate(${a}deg)`;
        pie.style.clipPath = `polygon(50% 50%, 0 ${y1}%, 0 ${y2}%)`;
        pie.style.background = '#' + Math.floor(Math.random()*16777215).toString(16);
        pie.textContent = i;
        wheel.appendChild(pie);
    }
});
btnSpin.addEventListener('click', function(){
    const alpha = getRandomInclusive(360, 1080);
    const gocTungPie = 360 / numberPie.value;
    console.log(alpha);
    console.log(Math.round ((360 - (alpha % 360)) / (gocTungPie)));
    wheel.style.transform = `rotate(${alpha}deg)`;
});
function getRandomInclusive(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}