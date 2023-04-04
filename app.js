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
        let result
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
    else if(key == "ac"){
        input.value = ""
        lastValue = ""
        currentValue =""
    }
    else if(key == "plus-minus"){
        let result
        if(input.value >= 0){
            result = input.value - (input.value*2)
        }else{
            result = Math.abs(input.value)
        }
        input.value = null
        input.value = parseFloat(result)
        result = null
    }
    else if(key == "percent"){
        input.value = input.value / 100
    }
   })

}

