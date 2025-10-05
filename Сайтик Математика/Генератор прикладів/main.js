var generator;
var answer;

function generate() {
    var operators = ['+', '-', '*', '/'];
    var operator = operators[Math.floor(Math.random() * operators.length)];
    var num_1 = Math.floor(Math.random() * 100);
    var num_2 = Math.floor(Math.random() * 100);
    generator = num_1 + ' ' + operator + ' ' + num_2;
    answer = eval(generator);
    document.getElementById('problem').textContent = 'Приклад: ' + generator;
    document.getElementById('result').textContent = 'Рішення: ';
}

function solution() {
    document.getElementById('result').textContent = 'Рішення: ' + answer;
}