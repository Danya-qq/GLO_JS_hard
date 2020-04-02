// //1)
let arr = [],
numbers = '32,262,42344,9423521,841,123,29';


for (let i=0; i<7; i++) {
    arr.push(numbers.split(',')[i]);
};

arr.forEach(function(elem) {
	if (elem[0] == 2 || elem[0] == 4) {
        console.log(elem); 
    };
    
});


// 2)
let n = 100;

outer:
for (i=2; i<n; i++) {
    for (j=2; j<i; j++) {
        if (i%j == 0) continue outer;
    }
    console.log(i + ' Делители этого числа: 1 и ' + j);
    
};








