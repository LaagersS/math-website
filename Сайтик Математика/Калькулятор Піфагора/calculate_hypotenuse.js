function calculate_hypotenuse() {
    var catet_1 = parseFloat(document.getElementById('catet_1').value);
    var catet_2 = parseFloat(document.getElementById('catet_2').value);
    if (!isNaN(catet_1) && !isNaN(catet_2) && catet_1 > 0 && catet_2 > 0) {
        var hypotenuse = Math.sqrt(catet_1 * catet_1 + catet_2 * catet_2);
        document.getElementById('result').innerHTML = 'Гіпотенуза: ' + hypotenuse + '.';
    } 
    else {
        document.getElementById('result').innerHTML = 'Введіть коректні числові значення.';
    }
}
