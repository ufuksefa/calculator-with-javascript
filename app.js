const keyboard = document.querySelector(".keyboard")
const input = document.getElementById("input")
let operator,lastValue

keyboard.addEventListener("click", keyClick)

function keyClick(e){
   const val = e.target.innerHTML
   const keyClass = e.target.classList
   
   keyClass.forEach((key)=>{
    if(key == "numbers"){
        input.value += val
    }
    else if(key == "operator"){
        operator = val
        lastValue = parseFloat(input.value)
        input.value = ""
    }
    else if(key == "equal"){
        const currentValue = parseFloat(input.value)
        if(operator == "+"){
            result = lastValue + currentValue
        }
        if(operator == "-"){
            result = lastValue - currentValue
        }
        if(operator == "x"){
            result = lastValue * currentValue
        }
        if(operator == "/"){
            result = lastValue / currentValue
        }
        input.value = result
    }
   })

}

