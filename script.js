function calculate(operator) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let result;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        case '**':
            result = Math.pow(num1, num2);
            break;
        default:
            result = '';
    }

    document.getElementById('result').innerHTML = `Жыйынтык: ${result}`;
}

function calculateRoot() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let result;

    if (num2 === 2) {
        result = Math.sqrt(num1);
    } else {
        result = Math.pow(num1, 1 / num2);
    }

    document.getElementById('result').innerHTML = `Жыйынтык: ${result}`;
}