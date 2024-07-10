// Написать функцию, в которую передаем 2 аргумента, первое это вопрос на любую загадку, 
// второе это ответ на данную загадку, необходимо сравнить ответ пользователя на загадку и вернуть, 
// true или false значение
// * Добавить подсказку, если пользователь ответил неверно

function quizz(question, answer) {
    let userAnswer;

    do {
        userAnswer = prompt(`${question}`).toLowerCase();
        if (userAnswer!== answer) {
            alert('Do it better');
            alert('One more time');
        } else {
            alert('Good job!');
        }
    } while (userAnswer !== answer);
}

quizz('Зимой и летом одним цветом', 'елка');