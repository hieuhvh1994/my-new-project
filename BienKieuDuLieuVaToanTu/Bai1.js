let physics = parseInt(prompt("Physics point:"))
let chemistry = parseInt(prompt("Chemistry point:"))
let biological = parseInt(prompt("Biological point:"))

let mean_point = (physics+chemistry+biological)/3
let total_point = physics+chemistry+biological

document.write("Mean Point: " + mean_point)
document.write("<br/>")
document.write("Total Point: " + total_point)