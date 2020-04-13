const btn = document.querySelector('button'),
h1 = document.querySelector('h1'),
body = document.querySelector('body');


 btn.addEventListener('click', function(){
    let color2 = '#' + (Math.random().toString(16) + '000000').slice(2,8);
    h1.textContent = color2;
    body.style.background = color2;
    btn.style.color = color2;
    
 });









