let date = new Date(),
day  = date.getDay(),
month = date.getMonth(),
hour = date.getHours(),
minute = String(date.getMinutes()),
second = String(date.getSeconds()),
days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
monthes = ['Января','Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Октября', 'Ноября', 'Декабря'],
correctTime = ['час', 'часа', 'часов', 'минуты' , 'минут', 'минута', 'секунда', 'секунд', 'секунды'];

function correctHour(data) {
	if (data === 1 || data === 21) {
		return String(data) + ' ' + correctTime[0];
	} else if (data >= 2 && data <= 4) {
		return String(data) +  ' ' + correctTime[1];;
	} else {
		return String(data) + ' ' + correctTime[2];;
	};
};

function correctMinute(data) {
	if (data == 1 || data[1] == 1) {
		return data + ' ' + correctTime[5];
	} else if ((data >= 2 && data <= 4) || (data[1] >=2 && data[1] <= 4)) {
		return data +  ' ' + correctTime[3];;
	} else {
		return data + ' ' + correctTime[4];;
	};
};
function correctSecond(data) {
	if (data == 1 || data[1] == 1) {
		return data + ' ' + correctTime[6];
	} else if ((data >= 2 && data <= 4) || (data[1] >=2 && data[1] <= 4)) {
		return data +  ' ' + correctTime[8];
	} else {
		return data + ' ' + correctTime[7];
	};
};

function addZero(num) {
	if (num >= 0 && num <= 9) {
		return '0' + num;
	} else {
		return num;
	}
};

let outDate1 = addZero(date.getDate()) + '.' + addZero(date.getMonth() + 1) + '.' + addZero(date.getFullYear()) + ' - ' + addZero(date.getHours()) + ':' + addZero(date.getMinutes()) + ':' + addZero(date.getSeconds());

let outDate2 = 'Сегодня' + ' ' +  days[day] + ', ' + date.getMonth() + ' ' + monthes[month] + ' ' + date.getFullYear()+ ' года' + ', ' + correctHour(hour) + ' ' + correctMinute(minute) + ' ' + correctSecond(second);

let div = document.createElement('div');
div.innerHTML = outDate1;
document.body.append(div);

function getCurrentTime(){
	return outDate1
};

// let br = document.createElement('br');
// div.after(br);

// let div2 = document.createElement('div2');
// div2.innerHTML = outDate2;
// br.after(div2);


setInterval(function(){
	div.innerHTML = getCurrentTime()

}, 1000);










