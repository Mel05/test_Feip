"use strict"

// POP UP
   function popUp() {
            document.getElementById('popup').className = 'form--active';
            document.getElementById('hover').className = 'hover__body--active';
              document.getElementById('button').className = 'button--active';
    }

    function popUpHide(){
        if(document.getElementById('popup').classList.contains("form--active")){
            document.getElementById('popup').className = 'form';
            document.getElementById('hover').className = 'hover__body';
              document.getElementById('button').className = 'btn__popup';
        }
    }

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    form.addEventListener('submit', formSend);




    // inputMask
    let inputs = document.querySelectorAll('input[type="tel"]');
    let im = new Inputmask('+7 (999) 999-99-99');
    im.mask(inputs);

    async function formSend(e) {
        e.preventDefault();

        let error = formValidate(form);

        let formData = new FormData(form); // Вытягиваем все данные полей


        // сообщение об ошибке
        if (error === 0) {
            form.classList.add('_sending'); // Присвоение класса форме, после успешной Валидации
        } else {
            alert('Заполните обязательные поля');
        }
        //--------------------
    }


    function formValidate(form) {
        let error = 0;
        let formReq = document.querySelectorAll('._req');

        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];
            formRemoveError(input);

            if (input.classList.contains('_email')) {
                if (emailTest(input)) {
                    formAddError(input);
                    error++;
                }
            } else if (input.classList.contains('_phone')) {
                if (phoneTest(input)) {
                    formAddError(input);
                    error++;
                }
            } else {
                if (input.value === '') {
                    formAddError(input);
                    error++;
                }
            }
        }
        return error;
    }

    // Присвоение класса error
    function formAddError(input) {
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }

    function formRemoveError(input) {
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }



    // Функция теста Email
    function emailTest(input) {
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }

    // Функция теста phone
    function phoneTest(input) {
        return !/^[+][\d]{1}\ \([\d]{2,3}\)\ [\d]{2,3}-[\d]{2,3}-[\d]{2,3}$/.test(input.value);
    }

});
























