function multiplyBy(){
    num1 = document.getElementById("firstNumber"). value;
    num2 = document.getElementById("secondNumber"). value; 

    document.getElementById("result").innerHTML = num1  * num2;
}

function divideBy(){
    num1 = document.getElementById("firstNumber"). value;
    num2 = document.getElementById("secondNumber"). value; 

    document.getElementById("result").innerHTML = num1  / num2;
}

  // Function to perform addition
  function addNumbers() {
    const num1 = parseFloat(document.getElementById('firstNumber').value);
    const num2 = parseFloat(document.getElementById('secondNumber').value);
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('result').innerHTML = 'Please enter valid numbers';
    } else {
        document.getElementById('result').innerHTML = `Result: ${num1 + num2}`;
    }
}

// Function to perform subtraction
function subtractNumbers() {
    const num1 = parseFloat(document.getElementById('firstNumber').value);
    const num2 = parseFloat(document.getElementById('secondNumber').value);
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('result').innerHTML = 'Please enter valid numbers';
    } else {
        document.getElementById('result').innerHTML = `Result: ${num1 - num2}`;
    }
}

