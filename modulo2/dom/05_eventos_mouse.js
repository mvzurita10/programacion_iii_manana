const caja=document.getElementById('caja')
caja.addEventListener('mouseover', () => {
    caja.style.background='blue';
}); 

caja.addEventListener('mouseout', () => {
    caja.style.background='green';
}); 

caja.addEventListener('click', () => {
    alert('Click');
}); 

const areaTouch=document.getElementById('areaTouch')
    areaTouch.addEventListener('touchstart', () => {
    areaTouch.style.background='purple';
}); 

    areaTouch.addEventListener('touchend', () => {
    areaTouch.style.background='pink';
}); 

    areaTouch.addEventListener('click', () => {
    alert('Click Area Touch');
}); 


