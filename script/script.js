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

    countTimer('25 april 2020');

// Menu
   
   const toggleMenu = () => {

    const body = document.querySelector('body'),
        // btnMenu = document.querySelector('.menu'),
        menu = document.querySelector('menu'),
        // closeBtn = document.querySelector('.close-btn'),
        // menuItems = menu.querySelectorAll('ul>li'),
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

        body.addEventListener('click', (event) =>{
            let target = event.target;
            target = target.closest('.menu')

            
             if (target){
                return handlerMenu();
             } else {
                target = event.target;
        
                if (target.tagName === 'A') 
                return handlerMenu();
            }
            
            target = event.target.closest('.active-menu');

            if (!target) menu.classList.remove('active-menu')
        })
        
        
}

toggleMenu();


//popup

const togglePopUp = () =>{
    const popUp = document.querySelector('.popup'),
        popUpBtn = document.querySelectorAll('.popup-btn');

    popUp.addEventListener('click', (event)  =>{
        let target = event.target;
    
        if (target.classList.contains('popup-close')){
             if (screen.width >768) {
                popUp.style.display = `none`;
                popUp.firstElementChild.style.left = '0%'
                count = 0; 
             } else {
                popUp.style.display = `none`;
            }
        };
            target = target.closest('.popup-content'); // при нажатии по таргету и ниже по иеарархии, будет возвращаться блок с классом .popup-content, иначе !!!null
            if (!target) {
                popUp.style.display = 'none';
            } 
                
        })    
       
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
}

togglePopUp();

})

// Табы

const tabs = () =>{
    const tabHeader = document.querySelector('.service-header'),
        tab = tabHeader.querySelectorAll('.service-header-tab'),
        tabContent = document.querySelectorAll('.service-tab');

    const toggleTabContent = (index) =>{
        for (let i=0; i<tabContent.length; i++){
            if (index === i) {
                tab[i].classList.add('active');
                tabContent[i].classList.remove('d-none');
            } else {
                tab[i].classList.remove('active');
                tabContent[i].classList.add('d-none');
            }
        }
    }

    tabHeader.addEventListener('click', (event) =>{
        let target = event.target; // получаем элемент, на который кликнули
            target = target.closest('.service-header-tab'); // метод closest ищет селектор и если находит,то возвращает элемент, если нет - null

            if(target) {
                tab.forEach((item, i) =>{

                    if (item === target){
                         toggleTabContent(i);   
                    }
            
                });
            } 

            // !ОСТАВИЛ ЦИКЛ ДЛЯ ПОНИМАНИЯ
        // while (target !== tabHeader){
        //     console.log(target);

        //     if (target.classList.contains('service-header-tab')){
                
        //         tab.forEach((item, i) =>{

        //             if (item === target){
        //                 toggleTabContent(i);   
        //             }

        //         });
        //         return;   
        //     }
        //     target = target.parentNode;
        // }
        
    });
}

tabs();
