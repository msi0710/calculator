const result = document.getElementById('result')
const firstInput = document.getElementById('first-input')
const secondInput = document.getElementById('second-input')
const calcBtn = document.getElementById('calc')

const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
const multiplyBtn = document.getElementById('multiply')
const divBtn = document.getElementById('division')

let action="+";

plusBtn.onclick=function(){
    action="+";
}

minusBtn.onclick=function(){
    action="-"
}

multiplyBtn.onclick=function(){
    action="*"
}

divBtn.onclick=function(){
    action="/"
}

const print = (res) => {
    if(res>=0){
        result.style.color = 'green'
    }else{
        result.style.color = 'red'
    }
    result.textContent = res;
};

const calcResult = function(){
    const firstNumber = Number(firstInput.value)
    const secondNumber = Number(secondInput.value)
    if (action ==="+"){
        return firstNumber + secondNumber;
    }else if(action ==="-"){
        return firstNumber - secondNumber;
    }else if(action ==="*"){
        return firstNumber * secondNumber;
    }else{return firstNumber / secondNumber;}
}

calcBtn.onclick = function(){
    const res = calcResult();
    print(res)
};