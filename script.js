let text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
function foo(data){
    if (typeof data !== 'string') {
        alert('Введите только в виде строки')
    };
    
    if (data.length >30) {
        data = data.slice(0, 30) + '...';
        console.log(data);
        console.log(data.length);
        
    };
};
    
foo(text);








