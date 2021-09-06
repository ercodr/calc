// SCREEN GROUP
let screen  = document.getElementById('screen');
let mini    = document.getElementById('mini');

// BUTTON GROUP
const zero  = document.getElementById('zero-0');
const one   = document.getElementById('one-1');
const two   = document.getElementById('two-2');
const three = document.getElementById('three-3');
const four  = document.getElementById('four-4');
const five  = document.getElementById('five-5');
const six   = document.getElementById('six-6');
const seven = document.getElementById('seven-7');
const eight = document.getElementById('eight-8');
const nine  = document.getElementById('nine-9');
const plus  = document.getElementById('plus');
const minus = document.getElementById('minus');
const times = document.getElementById('times');
const div   = document.getElementById('div');
const mod   = document.getElementById('mod');
const cls   = document.getElementById('cls');
const dot   = document.getElementById('dot');
const equal = document.getElementById('equal-to');


// CONTAINERS
let num1 = '';
let num2 = '';
let op = '';

// SCREEN VALIDATION
window.addEventListener('load', () => {
    screen.innerText = '0';
})




// EVENTS TO BUTTONS
zero.addEventListener("click", ()=>{
    if(!screen.innerText == ''){
        if(!screen.innerText.includes('=', 0)){
            if(!screen.innerText.includes('0', 0)){
                screen.innerText += 0;
            }
        } else{
            screen.innerText = '';
            mini.innerText = '';
            screen.innerText += 0;
        }
    }
    
});
 
one.addEventListener("click", ()=>{
    if(!screen.innerText.includes('=', 0)){
        screen.innerText += 1;
    } else{
        screen.innerText = '';
        mini.innerText = '';
        screen.innerText += 1;
    }
});
 
two.addEventListener("click", ()=>{
    if(!screen.innerText.includes('=', 0)){
        screen.innerText += 2;
    } else{
        screen.innerText = '';
        mini.innerText = '';
        screen.innerText += 2;
    }
});
 
three.addEventListener("click", ()=>{
    if(!screen.innerText.includes('=', 0)){
        screen.innerText += 3;
    } else{
        screen.innerText = '';
        mini.innerText = '';
        screen.innerText += 3;
    }
});
 
four.addEventListener("click", ()=>{
    if(!screen.innerText.includes('=', 0)){
        screen.innerText += 4;
    } else{
        screen.innerText = '';
        mini.innerText = '';
        screen.innerText += 4;
    }
});
 
five.addEventListener("click", ()=>{
    if(!screen.innerText.includes('=', 0)){
        screen.innerText += 5;
    } else{
        screen.innerText = '';
        mini.innerText = '';
        screen.innerText += 5;
    }
});
 
six.addEventListener("click", ()=>{
    if(!screen.innerText.includes('=', 0)){
        screen.innerText += 6;
    } else{
        screen.innerText = '';
        mini.innerText = '';
        screen.innerText += 6;
    }
});
 
seven.addEventListener("click", ()=>{
    if(!screen.innerText.includes('=', 0)){
        screen.innerText += 7;
    } else{
        screen.innerText = '';
        mini.innerText = '';
        screen.innerText += 7;
    }
});
 
eight.addEventListener("click", ()=>{
    if(!screen.innerText.includes('=', 0)){
        screen.innerText += 8;
    } else{
        screen.innerText = '';
        mini.innerText = '';
        screen.innerText += 8;
    }
});
 
nine.addEventListener("click", ()=>{
    if(!screen.innerText.includes('=', 0)){
        screen.innerText += 9;
    } else{
        screen.innerText = '';
        mini.innerText = '';
        screen.innerText += 9;
    }
});

 
plus.addEventListener("click", ()=>{
    
    // ADD FUNCTION
    num1 = parseFloat(screen.innerText);
    mini.innerText = num1 + ' + ';
    screen.innerText = '';
    op = '+';

});

 
minus.addEventListener("click", ()=>{

    // SUBTRACTION FUNCTION
    num1 = parseFloat(screen.innerText);
    mini.innerText = num1 + ' - ';
    screen.innerText = '';
    op = '-';

});

 
times.addEventListener("click", ()=>{
    
    // MULTIPLICATION FUNCTION
    num1 = parseFloat(screen.innerText);
    mini.innerText = num1 + ' x ';
    screen.innerText = '';
    op = '*';

});

 
mod.addEventListener("click", ()=>{
    
    // MODULO FUNCTION
    num1 = parseFloat(screen.innerText);
    mini.innerText = num1 + ' % ';
    screen.innerText = '';
    op = '%';

});

 
div.addEventListener("click", ()=>{
    
    // DIVISION FUNCTION
    num1 = parseFloat(screen.innerText);
    mini.innerText = num1 + ' / ';
    screen.innerText = '';
    op = '/';

});
 

dot.addEventListener("click", ()=>{

    // DECIMAL POINT VALIDATION
    if(!screen.innerText.includes('.')){
        screen.innerText += ".";
    }

});

 
cls.addEventListener("click", ()=>{
    if(screen.innerText.includes('=')){
        screen.innerText = "0";
        mini.innerText = "";
    }


    if(!screen.innerText == ''){
        screen.innerText = "0";
    } else{
        mini.innerText = "";
    }

    
    
});
 

equal.addEventListener("click", ()=>{
    if(!mini.innerText == "" && !screen.innerText == ""){
        num2 = parseFloat(screen.innerText);
        mini.innerText += " " + num2;

        switch (op){
            case '+':
                screen.innerText = "= " + (num1 + num2);
                break;

            case '-':
                screen.innerText = "= " + (num1 - num2);
                break;

            case '/':
                screen.innerText = "= " + (num1 / num2);
                break;

            case '%':
                screen.innerText = "= " + (num1 % num2);
                break;

            case '*':
                screen.innerText = "= " + (num1 * num2);
                break;
        }
    }
});
