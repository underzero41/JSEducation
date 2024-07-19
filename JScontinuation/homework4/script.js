// 1. При изменении значения в input с id="from", значение содержащееся в нем должно моментально отображаться в span. 
// То есть при печати в input'е тег span также должен меняться.

const input = document.getElementById('from');
const span = document.getElementById('display');

input.addEventListener('input', function() {
    span.textContent = input.value;
});


// 2. При клике на кнопку с классом messageBtn необходимо элементу с классом message:
// - добавить два класса: animate_animated и animate_fadeInLeftBig
// - поставить данному элементу стиль visibility в значение 'visible'.

const button = document.querySelector('.messageBtn');
const message = document.querySelector('.message');

button.addEventListener('click', function () {
    message.classList.add('animate_animated', 'animate_fadeInLeftBig');
    message.style.visibility = 'visible';
});


// 3. Необходимо при отправке формы проверить, заполнены ли все поля в этой форме. Если какое-либо поле не заполнено, 
// форма не должна отправляться, также должны быть подсвечены незаполненные поля (необходимо поставить класс error 
//     незаполненным полям). Как только пользователь начинает заполнять какое-либо поле, необходимо, при вводе в данное поле,
//      произвести проверку:
// - Если поле пустое, необходимо данное поле подсветить (поставить класс error данному полю).
// - Если поле было чем-либо заполнено, подсветку (класс error) необходимо убрать.

const form = document.getElementById('myForm');
const inputs = form.querySelectorAll('.form-control');

form.addEventListener('submit', function (event) {
    let valid = true;

    inputs.forEach(input => {
        if (input.value.trim() === '') {
            input.classList.add('error'); 
            valid = false;
        } else {
            input.classList.remove('error');
        }
    });

    if (!valid) {
        event.preventDefault();
    }
});


inputs.forEach(input => {
    input.addEventListener('input', function () {
        if (input.value.trim() === '') {
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });
});
