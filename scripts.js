function add(addend1,addend2){return addend1 + addend2};
function subtract(subtrahend,minuend){return subtrahend - minuend};
function multiply(mulitplicand,multiplier){return mulitplicand * multiplier;}
function divide(dividend,divisor){return dividend / divisor;}

function operate(operator,left_number,right_number){
    left_int = parseFloat(left_number);
    right_int = parseFloat(right_number);
    if(operator === '+') return add(left_int,right_int);
    else if(operator === '-') return subtract(left_int,right_int);
    else if(operator === '*') return multiply(left_int,right_int);
    else return divide(left_int,right_int);
}

function setDisplay(field_text){
    const display_field = document.getElementById('display_field');
    if(field_text == "clear"){
        field_text = '0'
    }
    display_field.textContent = field_text;
}

function toggleClear(clear){
    const clear_field = document.getElementById('clear');
    if (clear == true){
        clear_field.textContent = "AC";
    }
    else{
        clear_field.textContent = "CE";
    }
}

function main(){
    let left_number = '';
    let right_number = '';
    let operator = '';
    let calculated_flag = false;
    
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        button.addEventListener('click',function(){
            if(calculated_flag && !isNaN(button.id) && operator == ''){
                return;
            }
            else if(!isNaN(button.id) && operator == ''){
                if(left_number == '' && button.id == "0"){
                    return;
                }
                else if(left_number == ''){
                    left_number = button.id;
                    toggleClear(false);
                }
                else{
                    left_number += button.id;
                }
                setDisplay(left_number);
            }
            else if(!isNaN(button.id) && operator != ''){
                if (right_number == ''){
                    right_number = button.id;
                }
                else{
                    right_number += button.id;
                }
                setDisplay(right_number);
            }
            else if(button.id == "clear"){
                left_number = '';
                right_number = '';
                operator = '';
                setDisplay("clear");
                calculated_flag = false;
                toggleClear(true);
            }
            else if(button.id != "="){
                if(left_number == ''){
                    return;
                }
                operator = button.id;
                setDisplay(operator);
            }
            else{
                if(operator == ''){
                    return;
                }
                left_number = operate(operator,left_number,right_number);
                right_number = '';
                operator = '';
                setDisplay(left_number);
                calculated_flag = true;
            }
        });
    });
}

main();