function calculate_equations() {
   var a = parseFloat(document.getElementById('a').value);
   var b = parseFloat(document.getElementById('b').value);
   var c = parseFloat(document.getElementById('c').value);
   if (!isNaN(a) && !isNaN(b) && !isNaN(c) && a != 0) {
      var dis = b * b - 4 * a * c;
      if (dis > 0) {
         var number_1 = ((-b + Math.sqrt(dis)) / (2 * a));
         var number_2 = ((-b - Math.sqrt(dis)) / (2 * a));
         document.getElementById('result').innerHTML = 'Корені рівняння: ' + number_1 + ' та ' + number_2 + '.';
      } 
      else if (dis == 0) {
         var number = -b / (2 *a)
         document.getElementById('result').innerHTML = 'Рівняння має один корінь: ' + number + '.';
      }
      else {
          document.getElementById('result').innerHTML = 'Рівняння не має коренів.';
      }
   }
   else {
      document.getElementById('result').innerHTML = 'Введіть коректні числові значення.';
   }
}