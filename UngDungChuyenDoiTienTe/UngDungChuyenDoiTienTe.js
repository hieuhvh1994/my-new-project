function convertCur() {
    let FromCur = document.getElementById("from").value
    let ToCur = document.getElementById("to").value
    let amountMoney = parseInt(document.getElementById("amount").value)

    let Result = 0;
    if (FromCur === "VND" && ToCur === "USD") {
        Result = amountMoney / 23000
    } else if (FromCur === "USD" && ToCur === "VND") {
        Result = amountMoney * 23000
    } else {
        Result = amountMoney
    }
    document.getElementById("result_p").innerHTML = "Result :" + Result + " " +ToCur
}