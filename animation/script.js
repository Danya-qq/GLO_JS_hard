const corona = document.querySelector('.corona'),
btnAnimate = document.querySelectorAll('button')[0],
btnReset = document.querySelectorAll('button')[1];


let flyInteval;
let count = 0;

let flyAnimate = function(){
    flyInteval = requestAnimationFrame(flyAnimate);
    count++
    if (count <300){
        corona.style.top = count +'px'
        corona.style.left = count +'px'

    } else cancelAnimationFrame(flyInteval)
}

let animate = true;

btnAnimate.addEventListener('click' , function(){
    console.log('click');
    
    if (animate) {
        flyInteval = requestAnimationFrame(flyAnimate)
        animate =false;
    } else {
        animate = true;
        cancelAnimationFrame(flyInteval)
    }

    
})

btnReset.addEventListener('click', ()=>{
    cancelAnimationFrame(flyInteval);
    corona.style.top = `0px`;
    corona.style.left = `0px`;
    count =0;
    animate = true

})