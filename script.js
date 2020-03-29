let num = 266219;

 let result  = String(num).split('').reduce((sum, num) => sum*num);
 result **= 3;
 console.log(String(result).slice(0,2));
 

