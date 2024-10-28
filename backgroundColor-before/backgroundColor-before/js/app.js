/* Алгоритм действий
1. Получить элементы кнопки и текст текущего цвета
2. Сгенерировать массив для символов использующихся в формате HEX 
3. Написать функцию, которая возвращает случайный цвет, сгенерированный из элементов массива
4. Определить кнопке обработчик события по клику - вызов функции генерации цвета
5. При клике также сгенерированный цвет должен устанавливатся backgound-color для body 
и должен выводится текстом текущий цвет
*/

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function setBgColor(color) {
    document.body.style.backgroundColor = color;    
}

 document.getElementById('btn').addEventListener('click', () => {
    const randomColor = getRandomColor();
    setBgColor(randomColor);
    const txt = document.getElementById('txt')
    txt.textContent = randomColor
    txt.style.color = randomColor
}

function functionOne() {
    console.log("Function One executed!");
}
functionOne();                                                 
);




