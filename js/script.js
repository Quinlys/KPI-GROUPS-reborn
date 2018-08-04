$(document).ready(function () {
    let primaryBtn = $('#click1');
    let secondaryBtns = $('.secondary');
    primaryBtn.click(function () {
        //primaryBtn.classList.add('hide');
        deleteItem(primaryBtn, 600, showSecondaryBtns);
    });

    function deleteItem(item, delay, callback) {
        item.animate({opacity: 0}, 100);

        function removeItem() {
            item.remove();
            callback(delay);
        }

        setTimeout(removeItem, 500);

    }

    function showSecondaryBtns(delay) {
        secondaryBtns.animate({opacity: 1});
    }


});

let text;

function getValue() {
    text = document.getElementById("counT").value;
}

//Локализация страниц
//
// 'use strict';
// var app = angular.module('app', ['pascalprecht.translate']);
// app.config(function ($translateProvider) {
//     $translateProvider.fallbackLanguage('en');
//     $translateProvider.registerAvailableLanguageKeys(['en', 'ru', 'ua'], {
//         'en_*': 'en',
//         'ru_*': 'ru',
//         'ua_*': 'ua'
//     })
//     $translateProvider.translations('en', {
//         support: "Technical support: +380 (68) 254-15-17",
//         develop: "This project was developed in belka workspace",
//         speech: "this is a unique project which allows for everyone to create his own page for his group",
//         enter: "Enter",
//         RegForStudent: "Registration for student",
//         RegForTeacher: "Registration for teacher",
//         RegForGroup: "Registration for the group",
//         Login: "Login",
//         Password: "Password",
//         Registration: "Registration",
//         Log_in: "Log in",
//         QUESTION: "Still no account yet?",
//         BUTTON_LANG_EN: "English",
//         BUTTON_LANG_RU: "Russian",
//         BUTTON_LANG_UA: "Ukrainian"
//     });
//     $translateProvider.translations('ru', {
//         support: "Тех. поддержка: +380 (68) 254-15-17",
//         develop: "Место разработки - 'Белка'",
//         speech: "это уникальный проект ,который позволит каждому желающему студенту создать собственную страницу своей группе",
//         enter: "Вход",
//         RegForStudent: "Регистрация для студента",
//         RegForTeacher: "Регистрация для преподователя",
//         RegForGroup: "Регистрация страницы группы",
//         Login: "Логин",
//         Password: "Пароль",
//         Registration: "Регистрация",
//         Log_in: "Войти",
//         QUESTION: "До сих пор нет аккаунта?",
//         BUTTON_LANG_EN: "Английский",
//         BUTTON_LANG_RU: "Русский",
//         BUTTON_LANG_UA: "Украинский"
//     });
//     $translateProvider.translations('ua', {
//         support: "Тех. підтримка: +380 (68) 254-15-17",
//         develop: "Місце розробки - 'Білка'",
//         speech: "це унікальний проект,який дозволяє створити власну сторінку для своєї групи",
//         enter: "Вхід",
//         RegForStudent: "Реєстрація для студента",
//         RegForTeacher: "Реєстрація для викладача",
//         RegForGroup: "Реєстрація для старости",
//         Login: "Логін",
//         Password: "Пароль",
//         Registration: "Реєстрація",
//         Log_in: "Ввійти",
//         QUESTION: "До тепер немає аккаунту?",
//         BUTTON_LANG_EN: "Англійська",
//         BUTTON_LANG_RU: "Російська",
//         BUTTON_LANG_UA: "Українська"
//     });
//     $translateProvider.useSanitizeValueStrategy('escape');
//     $translateProvider.preferredLanguage('ua');
//
// });
// app.controller('Ctrl', ['$scope', '$translate', function ($scope, $translate) {
//     $scope.changeLanguage = function (key) {
//         $translate.use(key);
//     };
// }]);

//Окончание локализации

//Сдвиг блока после загрузки фото
$('.click').on('click', function (e) {
    e.preventDefault();
    $('#photo').animate({
        width: 300,
        height: 250
    });
});

//Функция выбора загрузки фото на страницу
function getName(str) {
    if (str.lastIndexOf('\\')) {
        let i = str.lastIndexOf('\\') + 1;
    }
    else {
        let i = str.lastIndexOf('/') + 1;
    }
    let filename = str.slice(i);
    let uploaded = document.getElementById("fileformlabel");
    uploaded.innerHTML = filename;
}


// Скрыть/показать пароль //

function showPassword() {
    let eye = document.getElementById("eye");
    let firstInput = document.getElementById("password");
    let secondInput = document.getElementById("repeatPassword");
    if (secondInput.type === "password" && firstInput.type === "password") {
        secondInput.type = "text";
        firstInput.type = "text";
        eye.src = "img/eye.png";
    } else {
        secondInput.type = "password";
        firstInput.type = "password";
        eye.src = "img/closeEye.png";
    }
}



function nextLevel() {

    let email = document.getElementById('email').value;
    document.getElementById("jsEmail").innerText = email;
    console.log(email);
    let firstLevel = document.getElementsByClassName('firstLevel');
    let secondLevel = document.getElementsByClassName('secondLevel');
    let info =(firstLevel[0].style.display === "block");
    if(info){
        // console.log(firstLevel);
        let colOp=1;
        function fadeOutFunk() {
            console.log("f "+ colOp.toString());
            colOp-=0.05;
            firstLevel[0].style.opacity=colOp.toString();
            firstLevel[1].style.opacity=colOp.toString();
        }
        // функция на появление
        let timer = setInterval(fadeOutFunk, 25);
        function func() {
            clearInterval(timer);
            firstLevel[0].style.display = "none";
            firstLevel[1].style.display = "none";

            secondLevel[0].style.display = "block";
            secondLevel[1].style.display = "block";
        }
        setTimeout(func, 500);

        let colOpUp=0;
        function fadeUpFunk() {
            console.log("f2 "+ colOpUp.toString());
            colOpUp+=0.05;
            secondLevel[0].style.opacity=colOpUp.toString();
            secondLevel[1].style.opacity=colOpUp.toString();
        }
        let upTimer = setInterval(fadeUpFunk, 50);
        function func1() {
            clearInterval(upTimer);
        }

        setTimeout(func1, 1000);
        document.getElementsByClassName('accessCode')[0].style.display='block';
    }
}

function goToThirdLevel() {
    let thirdLevel = document.getElementsByClassName('thirdLevel');
    let secondLevel = document.getElementsByClassName('secondLevel');


    let colOp=1;
    function fadeOutFunk() {
        console.log("n "+ colOp.toString());
        colOp-=0.1;
        secondLevel[1].style.opacity=colOp.toString();
    }



    let timer = setInterval(fadeOutFunk, 50);


    function func() {
        clearInterval(timer);
        secondLevel[1].style.display = "none";
        thirdLevel[0].style.display = "block";
        thirdLevel[1].style.display = "block";
    }
    setTimeout(func, 500);

    function ifCheck() {
    // var opacity = secondLevel[1].style.opacity;
    // var intOpacity=parseInt(opacity);
    // console.log("opacity " + intOpacity.toFixed());
    //
    // if(intOpacity.toFixed()==0){
        let colOpUp=0;
        function fadeUpFunk() {
            console.log('if '+colOp);
            // console.log("n2 "+ colOpUp.toString());
            colOpUp+=0.1;
            thirdLevel[0].style.opacity=colOpUp.toString();
            thirdLevel[1].style.opacity=colOpUp.toString();
        }
        let upTimer = setInterval(fadeUpFunk, 50);
    // }else{
    //     console.log('else '+colOp);
    // }
        function func1() {
            clearInterval(upTimer);
        }
        setTimeout(func1, 500);
    }
    setTimeout(ifCheck, 500);
}

function goToFirstLevel() {
    let firstLevel = document.getElementsByClassName('firstLevel');
    let secondLevel = document.getElementsByClassName('secondLevel');


    let colOp=1;
    function fadeOutFunk() {
        // console.log("f "+ colOp.toString());
        colOp-=0.05;
        secondLevel[0].style.opacity=colOp.toString();
        secondLevel[1].style.opacity=colOp.toString();
    }
        // функция на появление
    let timer = setInterval(fadeOutFunk, 25);
    function func() {
        clearInterval(timer);
        secondLevel[0].style.display = "none";
        secondLevel[1].style.display = "none";

        firstLevel[0].style.display = "block";
        firstLevel[1].style.display = "block";
    }
    setTimeout(func, 500);

    let colOpUp=0;
    function fadeUpFunk() {
        console.log("f2 "+ colOpUp.toString());
        colOpUp+=0.05;
        firstLevel[0].style.opacity=colOpUp.toString();
        firstLevel[1].style.opacity=colOpUp.toString();
    }
    let upTimer = setInterval(fadeUpFunk, 50);
    function func1() {
        clearInterval(upTimer);
    }
    setTimeout(func1, 1000);
}

function fromThirdLvlToFirstLvl() {
    let firstLevel = document.getElementsByClassName('firstLevel');
    let secondLevel = document.getElementsByClassName('secondLevel');
    let thirdLevel = document.getElementsByClassName('thirdLevel');


    let colOp=1;
    function fadeOutFunk() {
        console.log("f "+ colOp.toString());
        colOp-=0.05;

        secondLevel[0].style.opacity=colOp.toString();
        thirdLevel[0].style.opacity=colOp.toString();
        thirdLevel[1].style.opacity=colOp.toString();
    }
    // функция на появление
    let timer = setInterval(fadeOutFunk, 25);
    function func() {
        clearInterval(timer);
        secondLevel[0].style.display = "none";
        thirdLevel[0].style.display = "none";
        thirdLevel[1].style.display = "none";

        firstLevel[0].style.display = "block";
        firstLevel[1].style.display = "block";
    }
    setTimeout(func, 500);

    let colOpUp=0;
    function fadeUpFunk() {
        console.log("f2 "+ colOpUp.toString());
        colOpUp+=0.05;
        firstLevel[0].style.opacity=colOpUp.toString();
        firstLevel[1].style.opacity=colOpUp.toString();
    }
    let upTimer = setInterval(fadeUpFunk, 50);
    function func1() {
        clearInterval(upTimer);
    }
    setTimeout(func1, 1000);
}

function checkValidation(){

    for(i=0; i<document.getElementsByClassName('valid').length; i++) {
            // if(i==document.getElementsByClassName('valid').length){
            //     for(i=0; i<remove; i++){
            //
            //         document.getElementsByClassName('valid')[i].classList.remove('valid');
            //         document.getElementsByClassName('bar')[i].classList.remove('bar');
            //     }
            // }


        console.log(document.getElementsByClassName('valid')[i]);

        switch (i) {

            case 0:
                console.log(document.getElementsByClassName('valid')[i]);

                // let reg = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
                //^[A-Z][A-Za-z]+ [A-Z][a-z]+$
                let regName =/^[A-ZА-ЯІіЇїЄєҐґ][a-zA-Zа-яА-ЯІіЇїЄєҐґ]+ [A-ZА-ЯІіЇїЄєҐґ][a-zа-яІіЇїЄєҐґ]+$/g;
                let regNameTeacher =/^[A-ZА-ЯІіЇїЄєҐґ][a-zA-Zа-яА-ЯІіЇїЄєҐґ]+ [A-ZА-ЯІіЇїЄєҐґ][a-zа-яІіЇїЄєҐґ]+ [A-ZА-ЯІіЇїЄєҐґ][a-zа-яІіЇїЄєҐґ]+$/g;

                console.log( (document.getElementsByClassName('valid')[i].value).match(/^[A-ZА-ЯІіЇїЄєҐґ][a-zA-Zа-яА-ЯІіЇїЄєҐґ]+ [A-ZА-ЯІіЇїЄєҐґ][a-zа-яІіЇїЄєҐґ]+$/g) );

                if (document.getElementsByClassName('validT')[0]){

                    //if(document.getElementsByClassName('validT')[0].value.length>=5)){
                    if(regNameTeacher.test(document.getElementsByClassName('validT')[0].value)){
                        document.getElementsByClassName('valid')[i].classList.add('good');
                    }else{
                        if(document.getElementsByClassName('good')[i])
                            document.getElementsByClassName('good')[i].classList.remove('good');
                        document.getElementsByClassName('valid')[i].classList.add('wrong');
                        // document.getElementsByClassName('valid')[i].classList.remove('valid');
                        // document.getElementsByClassName('bar')[i].classList.remove('bar');
                        document.getElementsByClassName('group')[i].classList.add('wrong-group');
                        document.getElementsByClassName('label')[i].classList.add('wrong-label');
                        document.getElementsByClassName('bar')[i].classList.add('wbar');
                        // alert('Должно быть минимум 5 символов');
                    }
                }

                else{
                    if(document.getElementsByClassName('valid')[i].value.length>=5){
                        document.getElementsByClassName('valid')[i].classList.add('good');
                    }else{
                        if(document.getElementsByClassName('good')[i])
                            document.getElementsByClassName('good')[i].classList.remove('good');
                        document.getElementsByClassName('valid')[i].classList.add('wrong');
                        // document.getElementsByClassName('valid')[i].classList.remove('valid');
                        // document.getElementsByClassName('bar')[i].classList.remove('bar');
                        document.getElementsByClassName('group')[i].classList.add('wrong-group');
                        document.getElementsByClassName('label')[i].classList.add('wrong-label');
                        document.getElementsByClassName('bar')[i].classList.add('wbar');
                        // alert('Должно быть минимум 5 символов');
                    }
                }
                break;

            case 1:

                console.log(document.getElementsByClassName('valid')[i].value.length);

                let regGroup =/^([a-zA-Zа-яА-ЯІіЇїЄєҐґ][a-zA-Zа-яА-ЯІіЇїЄєҐґ]-[0-9][0-9])$/;
                //let regGroupT =/^[A-ZА-Я][a-zA-Zа-яА-Я]+ [A-ZА-Я][a-zа-я]+ [A-ZА-Я][a-zа-я]+$/g;//поменять имя переменной
                // let regGroupT =/^[а-яА-Я]+$/g;
                console.log( (document.getElementsByClassName('valid')[i]) );
                console.log( (document.getElementsByClassName('valid')[i].value).match(/^([a-zA-Zа-яА-ЯІіЇїЄєҐґ][a-zA-Zа-яА-ЯІіЇїЄєҐґ]-[0-9][0-9])$/g) );

                if (document.getElementsByClassName('validT')[1]) {

                        if(document.getElementsByClassName('validT')[i].value.length>=6){
                        document.getElementsByClassName('valid')[i].classList.add('good');
                    }else{
                            if(document.getElementsByClassName('good')[i])
                                document.getElementsByClassName('good')[i].classList.remove('good');
                        document.getElementsByClassName('valid')[i].classList.add('wrong');
                        // document.getElementsByClassName('valid')[i].classList.remove('valid');
                        // document.getElementsByClassName('bar')[i].classList.remove('bar');
                        document.getElementsByClassName('group')[i].classList.add('wrong-group');
                        document.getElementsByClassName('label')[i].classList.add('wrong-label');
                        document.getElementsByClassName('bar')[i].classList.add('wbar');
                            Animation(0);
                        // alert('Должно быть минимум 4 символов');
                    }
                }else{
                    if(regGroup.test(document.getElementsByClassName('valid')[i].value)){
                        document.getElementsByClassName('valid')[i].classList.add('good');
                    }else{
                        if(document.getElementsByClassName('good')[i])
                            document.getElementsByClassName('good')[i].classList.remove('good');
                        document.getElementsByClassName('valid')[i].classList.add('wrong');
                        // document.getElementsByClassName('valid')[i].classList.remove('valid');
                        // document.getElementsByClassName('bar')[i].classList.remove('bar');
                        document.getElementsByClassName('group')[i].classList.add('wrong-group');
                        document.getElementsByClassName('label')[i].classList.add('wrong-label');
                        document.getElementsByClassName('bar')[i].classList.add('wbar');
                            Animation(0);
                        // alert('Должно быть минимум 4 символов');
                    }
                }
                break;

            case 2:
                console.log(document.getElementsByClassName('valid')[i]);

                let reg = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
                if(reg.test(document.getElementsByClassName('valid')[i].value)) {

                        document.getElementsByClassName('valid')[i].classList.add('good');

                }else{
                    if(document.getElementsByClassName('good')[i])
                        document.getElementsByClassName('good')[i].classList.remove('good');
                    document.getElementsByClassName('valid')[i].classList.add('wrong');
                    // document.getElementsByClassName('valid')[i].classList.remove('valid');
                    // document.getElementsByClassName('bar')[i].classList.remove('bar');
                    document.getElementsByClassName('group')[i].classList.add('wrong-group');
                    document.getElementsByClassName('label')[i].classList.add('wrong-label');
                    document.getElementsByClassName('bar')[i].classList.add('wbar');
                    // document.getElementsByClassName('valid')[i].setAttribute(aria_describedby, "tooltip200157");

                    // alert('Введите корректный e-mail');

                }

                break;

            case 3:

                console.log(document.getElementsByClassName('valid')[i].value.length);

                if((document.getElementsByClassName('valid')[i].value.length>=6) && ( document.getElementById('password').value===document.getElementById('repeatPassword').value)){
                    document.getElementsByClassName('valid')[i].classList.add('good');
                }else{
                    if(document.getElementsByClassName('good')[i])
                    document.getElementsByClassName('good')[i].classList.remove('good');
                    document.getElementsByClassName('valid')[i].classList.add('wrong');
                    // document.getElementsByClassName('valid')[i].classList.remove('valid');
                    // document.getElementsByClassName('bar')[i].classList.remove('bar');
                    document.getElementsByClassName('label')[i].classList.add('wrong-label');
                    document.getElementById('alertPassword').style.color = "red";
                    document.getElementsByClassName('bar')[i].classList.add('wbar');

                    //////////////////////////////////////////////////////////////////////////////////////////////////////////

                    // alert('Должно быть минимум 6 символов');
                }

                break;

            case 4:

                console.log(document.getElementsByClassName('valid')[i].value.length);

                if((document.getElementsByClassName('valid')[i].value.length>=6) && ( document.getElementById('password').value===document.getElementById('repeatPassword').value)){
                    document.getElementsByClassName('valid')[i].classList.add('good');
                }else{
                    if(document.getElementsByClassName('good')[i])
                    document.getElementsByClassName('good')[i].classList.remove('good');
                    document.getElementsByClassName('valid')[i].classList.add('wrong');
                    // document.getElementsByClassName('valid')[i].classList.remove('valid');
                    // document.getElementsByClassName('bar')[i].classList.remove('bar');
                    document.getElementsByClassName('group')[i].classList.add('wrong-group');
                    document.getElementsByClassName('label')[i].classList.add('wrong-label');
                    document.getElementsByClassName('bar')[i].classList.add('wbar');
                    // alert('Должно быть минимум 6 символов');
                }

                break;

            default:
                break;
        }

        if(i===document.getElementsByClassName('valid').length ){
            for(i=0; i<remove; i++){

                document.getElementsByClassName('valid')[i].classList.remove('valid');
                document.getElementsByClassName('bar')[i].classList.remove('bar');
            }
        }

    }

    if(document.getElementsByClassName('good').length===5 && document.getElementById('password').value===document.getElementById('repeatPassword').value){// passwordCheck
        // alert('good*5');
       nextLevel();
    }else{
        if( document.getElementById('password').value===document.getElementById('repeatPassword').value){
            console.log("check if");

            if((document.getElementById('password').value.length<6) || (document.getElementById('repeatPassword').value.length<6)){
                document.getElementById('alertPassword').innerHTML='Використовуйте комбінацію з 6 або більше літер, цифр і символів';

                Animation(1);
            }
        }else{
            document.getElementById('alertPassword').innerHTML='Паролі не співпадають. Перевірте правильність паролей.';
            Animation(1);
            console.log("check else");
        }
    }

}

$(document).ready (function(){
    $('[data-toggle="tooltip"]').tooltip();
});

function Animation(n){
    let colOpUp=0;
    function fadeUpFunk() {
        console.log("f2 "+ n);
        colOpUp+=0.05;
        document.getElementsByClassName('alertGroup')[n].style.opacity=colOpUp.toString();
    }
    let upTimer = setInterval(fadeUpFunk, 50);
    function func() {
        clearInterval(upTimer);
    }
    setTimeout(func, 1000);
}
