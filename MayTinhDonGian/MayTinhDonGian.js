let num1=0
let com=""


function btn(val)
{
    document.getElementById("result").value+=val
}



function cal(val){
    num1 = parseFloat(document.getElementById("result").value)
    document.getElementById("result").value = ""
    com=val
}

function solve()
{
    let num2 = parseFloat(document.getElementById("result").value)
    if (com==="+") {
        let result = num1+num2
        document.getElementById("result").value = result.toFixed(2)
    } else if (com==="-") {
        let result = num1 - num2
        document.getElementById("result").value = result.toFixed(2)
    } else if (com==="*") {
        let result = num1*num2
        document.getElementById("result").value = result.toFixed(2)
    } else if (com==="/"){
        let result = num1/num2
        document.getElementById("result").value = result.toFixed(2)
    }


}
function clr() {
    document.getElementById("result").value = ""
}

