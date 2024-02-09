
    const name = prompt("Enter your name please:");
    const surname = prompt("Enter your surname please:");
    const age = prompt("Enter your age please:");
    if (name && surname && age) {
        alert(`Hello ${name} ${surname} you are ${age} years old`);
    }

/********************************************************************************/

    const num = prompt("Введіть будь-яке число з 5 цифр:");
    let stringOfNumbers = '';
    if (num.length === 5 && !isNaN(num)) {
        let line = num.toString();
        for (let i = 0; i < line.length; i++) {
            stringOfNumbers += line[i] + " ";
        }
        alert(`Ви отримали строку: ${stringOfNumbers}`);
    }

    else {
        alert("Ви ввели не правильні дані");
    }
