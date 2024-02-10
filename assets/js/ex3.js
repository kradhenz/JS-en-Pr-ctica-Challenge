function calculate(operation) {
    // get values and convert to number type
    var num1 = Number(document.querySelector("#value1").value);
    var num2 = Number(document.querySelector("#value2").value);
    // calculate operation
    var result = operation(num1, num2);
    // If result is negative show 0
    document.querySelector(".result").innerHTML = Math.max(0, result);
}

/*  -->   START   <--   */
document.getElementById("btn-sum").addEventListener('click', function () {
    // call function giving the operation addition +
    calculate((num1, num2) => num1 + num2);
});

document.getElementById("btn-sub").addEventListener('click', function () {
    // call function giving the operation substraction -
    calculate((num1, num2) => num1 - num2);
});