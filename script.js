let date = new Date(),
day  = date.getDay(),
month = date.getMonth(),
days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
monthes = ['Января','Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Октября', 'Ноября', 'Декабря'];


function addZero(num) {
	if (num >= 0 && num <= 9) {
		return '0' + num;
	} else {
		return num;
	}
};


console.log(addZero(date.getDate()) + '.' + addZero(date.getMonth() + 1) + '.' + addZero(date.getFullYear()) + ' - ' + addZero(date.getHours()) + ':' + addZero(date.getMinutes()) + ':' + addZero(date.getSeconds()));

console.log('Сегодня' + ' ' +  days[day] + ', ' + date.getMonth() + ' ' + monthes[month] + ' ' + date.getFullYear()+ ' года' + ', ' + date.getHours() + ' часов ' + date.getMinutes()+ ' минут ' + date.getSeconds()+ ' секунды');








