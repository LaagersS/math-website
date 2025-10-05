function calculate_plus() {
   var a = parseFloat(document.getElementById('a').value);
   var b = parseFloat(document.getElementById('b').value);
   if (!isNaN(a) && !isNaN(b)) {
       var c = a + b;
       document.getElementById('result').innerHTML = c;
   } 
   else {
       document.getElementById('result').innerHTML = 'Введіть коректні числові значення.';
   }
}

function calculate_minus() {
   var a = parseFloat(document.getElementById('a').value);
   var b = parseFloat(document.getElementById('b').value);
   if (!isNaN(a) && !isNaN(b)) {
       var c = a - b;
       document.getElementById('result').innerHTML = c;
   } 
   else {
       document.getElementById('result').innerHTML = 'Введіть коректні числові значення.';
   }
}

function calculate_multiplication() {
   var a = parseFloat(document.getElementById('a').value);
   var b = parseFloat(document.getElementById('b').value);
   if (!isNaN(a) && !isNaN(b)) {
       var c = a * b;
       document.getElementById('result').innerHTML = c;
   } 
   else {
       document.getElementById('result').innerHTML = 'Введіть коректні числові значення.';
   }
}

function calculate_division() {
   var a = parseFloat(document.getElementById('a').value);
   var b = parseFloat(document.getElementById('b').value);
   if (!isNaN(a) && !isNaN(b) && b != 0) {
       var c = a / b;
       document.getElementById('result').innerHTML = c;
   } 
   else {
       document.getElementById('result').innerHTML = 'Введіть коректні числові значення.';
   }
}

function calculate_root_a() {
   var a = parseFloat(document.getElementById('a').value);
   if (!isNaN(a) && a > 0) {
       var c = Math.sqrt(a);
       document.getElementById('result').innerHTML = c;
   } 
   else {
       document.getElementById('result').innerHTML = 'Введіть коректні числові значення.';
   }
}

function calculate_root_b() {
   var b = parseFloat(document.getElementById('b').value)
   if (!isNaN(b) && b > 0) {
       var c = Math.sqrt(b);
       document.getElementById('result').innerHTML = c;
   } 
   else {
       document.getElementById('result').innerHTML = 'Введіть коректні числові значення.';
   }
}


function calculate_degree() {
   var a = parseFloat(document.getElementById('a').value);
   var b = parseFloat(document.getElementById('b').value);
   if (!isNaN(a) && !isNaN(b)) {
       var c = Math.pow(a, b);
       document.getElementById('result').innerHTML = c;
   } 
   else {
       document.getElementById('result').innerHTML = 'Введіть коректні числові значення.';
   }
}

function calculate_factorial_a() {
   var a = parseFloat(document.getElementById('a').value);
   if (!isNaN(a) && a > 0) {
       var c = 1;
       for (var i = 2; i <= a; i++) {
         c *= i;
       }
       document.getElementById('result').innerHTML = c;
   } 
   else {
       document.getElementById('result').innerHTML = 'Введіть коректні числові значення.';
   }
}

function calculate_factorial_b() {
   var b = parseFloat(document.getElementById('b').value);
   if (!isNaN(b) && b > 0) {
       var c = 1;
       for (var i = 2; i <= b; i++) {
         c *= i;
       }
       document.getElementById('result').innerHTML = c;
   } 
   else {
       document.getElementById('result').innerHTML = 'Введіть коректні числові значення.';
   }
}

function compare() {
    var a = parseFloat(document.getElementById('a').value);
    var b = parseFloat(document.getElementById('b').value);
    if (!isNaN(a) && !isNaN(b)) {
         if (a > b) {
             document.getElementById('result').innerHTML = a + ' > ' + b;
         }
         else if (a == b) {
             document.getElementById('result').innerHTML = a + ' = ' + b;
         }
         else {
             document.getElementById('result').innerHTML = a + ' < ' + b;
         }
    } 
    else {
        document.getElementById('result').innerHTML = 'Введіть коректні числові значення.';
    }
 }