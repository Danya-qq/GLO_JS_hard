window.addEventListener('DOMContentLoaded', function(){
    'use strict';

// Timer
    function countTimer(deadline){
        let timerHours = document.querySelector('#timer-hours'),
            timerMinutes = document.querySelector('#timer-minutes'),
            timerSeconds = document.querySelector('#timer-seconds');

         function getTimeRemaining(){
           let dateStop = new Date(deadline).getTime(),
                dateNow = new Date().getTime(),
                timeRemaining = (dateStop - dateNow)/1000,
                seconds = Math.floor(timeRemaining % 60),
                minutes = Math.floor((timeRemaining/60) % 60),
                hours = Math.floor(timeRemaining /60 /60);

            return{ timeRemaining, hours, minutes,seconds };
         } 
         
         function addZero(num) {
            if (num >= 0 && num <= 9) {
                return '0' + num;
            } else {
                return num;
            }
        };
         
         function updateClock(){
            let timer = getTimeRemaining();
            timerHours.textContent = addZero(timer.hours);
            timerMinutes.textContent = addZero(timer.minutes);
            timerSeconds.textContent = addZero(timer.seconds);

            if (timer.timeRemaining <0){
                timerHours.textContent = '00';
                timerMinutes.textContent = '00';
                timerSeconds.textContent = '00';
                clearInterval(idInterval) 
             } 
         }
         updateClock();
    
        let idInterval = setInterval(updateClock, 1000);
            
    };

    countTimer('24 april 2020');

// Menu
   
   const toggleMenu = () => {

    const btnMenu = document.querySelector('.menu'),
        menu = document.querySelector('menu'),
        closeBtn = document.querySelector('.close-btn'),
        menuItems = menu.querySelectorAll('ul>li'),
        menuAnchors = menu.querySelectorAll('ul>li>a'),
        mainBtn = document.querySelector('a[href="#service-block"]');
        
        // Функция плавной прокрутки до якоря с хэшем '#'
        const smoothScroll = (elem) =>{
            elem.addEventListener('click', (event) =>{
                event.preventDefault();  // отмена события при нажатии на якорь
                const anchor = elem.getAttribute('href');
                document.querySelector(anchor).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });  
            })
        };

        menuAnchors.forEach(smoothScroll)
        smoothScroll(mainBtn);
        
        const handlerMenu = () =>{
            menu.classList.toggle('active-menu') // используем свойства, описанные в css
        };
        
        btnMenu.addEventListener('click', handlerMenu);
        closeBtn.addEventListener('click', handlerMenu);

        menuItems.forEach((elem) => elem.addEventListener('click', handlerMenu))
    
}

toggleMenu();


//popup

const togglePopUp = () =>{
    const popUp = document.querySelector('.popup'),
        popUpBtn = document.querySelectorAll('.popup-btn'),
        popUpCloseBtn = document.querySelector('.popup-close');
       
    let count = 0;
    let animate;
        // Функция, отвечающая за анимацию попапа
    let popUpAnimate = function(){ 
        animate = requestAnimationFrame(popUpAnimate)          
        count++;  
        if (parseFloat(popUp.firstElementChild.style.left) < +parseFloat('38%')) {
            popUp.firstElementChild.style.left = count*3 + '%'
        } else {
            cancelAnimationFrame(animate)
        }        
    } 
    

    popUpBtn.forEach((elem) =>{
        elem.addEventListener('click', () =>{
            popUp.style.display = `block`; 
            if (screen.width >768) {   // проверка ширина экрана устройства
            popUp.firstElementChild.style.left = '0%';  //если true, то сдвигаем в изначальное положение 
            animate = requestAnimationFrame(popUpAnimate); // и запускаем анимацию
            }
                 
        })  
    }) 
    popUpCloseBtn.addEventListener('click', () => {
        if (screen.width >768) { // если экран больше 768, то 
            popUp.style.display = `none`; // скрываем попап
            popUp.firstElementChild.style.left = '0%' //и сдвигаем влево
            count = 0; //сбрасываем счетчик
        } else {
            popUp.style.display = `none`; 

        }   
    });
        
}

togglePopUp();

})