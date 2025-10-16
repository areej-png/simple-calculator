function calculate(operation) {
    try {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let result;
    debugger;

    if (isNaN(num1) || isNaN(num2)) {
        throw new Error("Invalid input! Please enter valid numbers.");
    }
    if (num2 === 0 && operation === "/") {
        throw new Error("Division by zero is not allowed.");
    }
    if (operation === "+") {
        result = num1 + num2;
    }
    else if (operation === "-"){
        result = num1 - num2;
    }
    else if (operation === "*"){
        result = num1 * num2;
    }
    else if (operation === "/"){
        result = num1 / num2;
    }
    else throw new Error("Invalid operation!");
    
    document.getElementById("result").innerText = "Result: " + result;

}
catch (error) {
    document.getElementById("result").innerText = "Error: " + error.message;
}
finally {
    console.log("Calculation attempt finished.");
}
}
// button event 
document.getElementById("add").addEventListener("click", function() { calculate("+"); });
document.getElementById("sub").addEventListener("click", function() { calculate("-"); });
document.getElementById("times").addEventListener("click", function() { calculate("*"); });
document.getElementById("divide").addEventListener("click", function() { calculate("/"); })
 