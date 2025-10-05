function calculate_cathetus() {
    var hypotenuse = parseFloat(document.getElementById('hypotenuse').value);
    var catet = parseFloat(document.getElementById('catet').value);
    if (!isNaN(hypotenuse) && !isNaN(catet) && hypotenuse > catet && catet > 0 && hypotenuse > 0) {
        var calculatedCathetus = Math.sqrt(hypotenuse * hypotenuse - catet * catet);
        document.getElementById('result').innerHTML = 'Другий катет: ' + calculatedCathetus + '.';
    } 
    else {
        document.getElementById('result').innerHTML = 'Введіть коректні числові значення.';
    }
}