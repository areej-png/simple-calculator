function calculate(operation) {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let result;
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
    else {
        result = "Invalid operation!";
    }
    document.getElementById("result").innerText = "Result:" +result;

}
// button event 
document.getElementById("add").addEventListener("click", function() { calculate("+"); });
document.getElementById("sub").addEventListener("click", function() { calculate("-"); });
document.getElementById("times").addEventListener("click", function() { calculate("*"); });
document.getElementById("divide").addEventListener("click", function() { calculate("/"); })
 