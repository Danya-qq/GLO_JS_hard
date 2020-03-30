// 1)

let lang = 'en',
daysRu = ['Понедельник', 'Вторник', 'Среда', 'Чертверг', 'Пятница',
'Суббота', 'Воскресенье'],
daysEn = ['Sunday', 'Monday', 'Tuesday', 'Wednesday',
'Thuesday', 'Friday', 'saturday'];

 if (lang == 'ru') {
     console.log(daysRu);
 } else {
     console.log(daysEn);
     
 };

 switch (lang) {
     case 'ru':
         console.log(daysRu);
        break;
      case 'en':
          console.log(daysEn);
          break;   
 };

let arrDays = [[daysEn], [daysRu]];
let result = lang == 'en' ? arrDays[0] : arrDays[1];

console.log(result); // правильно ли я понял условие задания?

// 2)

let namePerson = 'Даня';

let name = (namePerson == 'Артем') ? 'Директор' : 
(namePerson == 'Максим') ? 'Преподаватель' : 'студент';

console.log(name);

