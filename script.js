// 1)

let lang = 'en',
daysRu = ['Понедельник', 'Вторник', 'Среда', 'Чертверг', 'Пятница',
'Суббота', 'Воскресенье'],
daysEn = ['Sunday', 'Monday', 'Tuesday', 'Wednesday',
'Thuesday', 'Friday', 'Saturday'];

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

let objDays = {
    "en": daysEn,
    "ru": daysRu,
};

console.log(objDays[lang]);


let namePerson = 'Даня';

let name = (namePerson == 'Артем') ? 'Директор' : 
(namePerson == 'Максим') ? 'Преподаватель' : 'студент';

console.log(name);


