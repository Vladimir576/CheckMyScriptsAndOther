const myForm = document.getElementById('myForm');
const btn = document.getElementById('send');
var changeAnswerText = document.querySelector('.delivery-answer__text');

// btn-universal--del-answer
var answerSection = document.getElementById('visibleAns');
const closeSection = document.getElementsByClassName('btn-universal--del-answer');

btn.addEventListener('click', function (e) {


    if (!validateForm(myForm)) {
        console.log('Поля не заполнены');
        return;
    }

    // e.preventDefault();

    const formValues = {
        name: myForm.elements.name.value,
        phone: myForm.elements.phone.value,
        comment: myForm.elements.comment.value,
        to: 'arue11@mail.ru'
    };

    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.addEventListener('load', function () {
        if (xhr.status >= 200 && xhr.status < 300) {
            console.log('Данные успешно переданы');
            answerSection.style.display = "flex";

            closeSection[0].addEventListener('click', function () {
                answerSection.style.display = "none";
                myForm.reset();
            });
        } else {
            console.log('Код ошибки:', xhr.status);
            changeAnswerText.innerHTML = "Повторите попытку позже";
            answerSection.style.display = "flex";

            closeSection[0].addEventListener('click', function () {
                answerSection.style.display = "none";
                myForm.reset();
            });
        }
    });

    xhr.addEventListener('error', function () {
        console.log('Ошибка сети');
        changeAnswerText.innerHTML = "Ошибка сети, попробуйте позже";
        answerSection.style.display = "flex";
    });

    xhr.send(JSON.stringify(formValues));
});

function validateForm(form) {
    let valid = true;
    if (!validateField(form.elements.name)) {
        valid = false;
    }
    if (!validateField(form.elements.phone)) {
        valid = false;
    }
    if (!validateField(form.elements.comment)) {
        valid = false;
    }
    return valid;
}

function validateField(field) {
    // field.nextElementSibling.textContent = field.validationMessage;
    return field.checkValidity();
}
