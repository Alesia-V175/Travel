(function () {
    const burgerItem = document.querySelector(".burger-menu");
    const burgerImage = document.querySelector(".burger-menu-image");
    const burgerContainer = document.querySelector(".burger-menu-overlay");
    const body = document.querySelector("body");
    const loginItem = document.querySelector(".form-popup-container");
    const loginButton = document.querySelector(".button");
    const formContainer = document.querySelector(".form-overlay");
    burgerImage.addEventListener("click", () => {
        console.log(burgerItem);
        burgerItem.classList.toggle("burger-menu-active");
        burgerContainer.classList.toggle("burger-menu-overlay-active");
        body.classList.toggle("body-active");
    })
    loginButton.addEventListener("click", () => {
        console.log(loginItem);
        loginItem.classList.toggle("form-popup-container-active");
        formContainer.classList.toggle("form-overlay-active");
        // body.classList.toggle("body-active");
    })

    // const loginItem = document.querySelector(".form-popup-container");
    // const loginButton = document.querySelector(".button");
    // loginButton.addEventListener("click", () => {
    //     console.log(loginItem);
    //     loginItem.classList.toggle("form-popup-container-active");
    //     burgerContainer.classList.toggle("burger-menu-overlay-active");
    //     body.classList.toggle("body-active");
    // })

    const burgerImageClose = document.querySelector(".cross-burger-link");
    burgerImageClose.addEventListener("click", () => {
        console.log(burgerImageClose);
        burgerItem.classList.remove("burger-menu-active");
        burgerContainer.classList.remove("burger-menu-overlay-active");
        body.classList.remove("body-active");
    })


    burgerContainer.addEventListener("click", () => {
        console.log(burgerContainer);
        burgerItem.classList.remove("burger-menu-active");
        burgerContainer.classList.remove("burger-menu-overlay-active");
        body.classList.remove("body-active");
    })

    formContainer.addEventListener("click", () => {
        console.log(formContainer);
        loginItem.classList.remove("form-popup-container-active");
        formContainer.classList.remove("form-overlay-active");
        body.classList.remove("body-active");
    })

    const burgerLinkItems = document.getElementsByClassName("header-link");
    console.log(burgerLinkItems);

    for (let i = 0; i < burgerLinkItems.length; i++) {
        burgerLinkItems[i].addEventListener("click", () => {
            console.log(burgerLinkItems);
            burgerItem.classList.remove("burger-menu-active");
            burgerContainer.classList.remove("burger-menu-overlay-active");
            body.classList.remove("body-active");
        })
    }

    const burgerLinkAccount = document.getElementById("account");
    burgerLinkAccount.addEventListener("click", () => {
        console.log(loginItem);
        loginItem.classList.toggle("form-popup-container-active");
        formContainer.classList.toggle("form-overlay-active");
        body.classList.toggle("body-active");
    })

    const formRegistration = document.getElementById("registration");
    formRegistration.addEventListener("click", () => {
        console.log();
        // loginItem.classList.remove("form-popup-container-active");
        // loginItem.classList.toggle("form-sign-in-active");
        // loginItem.classList.toggle("form-sign-in-active", true);
    })

    const inputEmail = document.getElementById("email").value;
    const inputPassword = document.getElementById("password").value;
    const signInButton = document.querySelector(".sign-button");
    signInButton.addEventListener("click", () => {
        console.log();
        document.getElementById("email").innerHTML = inputEmail;
        document.getElementById("password").innerHTML = inputPassword;
        alert("Email: " inputEmail);
        alert("Password: "inputPassword);
    })
}());


console.log("Total score: 85 \n" +
    "Вёрстка соответствует макету. Ширина экрана 390px +48 \n" +
    "блок <header> +6 \n" +
    "секция preview +9 \n" +
    "секция steps +9 \n" +
    "секция destinations +9 \n" +
    "секция stories +9 \n" +
    "блок <footer> +6 \n" +
    "нет полосы прокрутки при ширине страницы от 1440рх до 390px +7 \n" +
    "нет полосы прокрутки при ширине страницы от 390px до 320рх +8 \n" +
    "при ширине страницы 390рх панель навигации скрывается, появляется бургер-иконка +2\n" +
    "при нажатии на бургер-иконку плавно появляется адаптивное меню +4\n" +
    "адаптивное меню соответствует макету +4\n" +
    "при нажатии на крестик адаптивное меню плавно скрывается уезжая за экран +4\n" +
    "ссылки в адаптивном меню работают, обеспечивая плавную прокрутку по якорям +4\n" +
    "при клике по ссылке в адаптивном меню адаптивное меню плавно скрывается, скрытие меню происходит если сделать клик вне данного окна +4\n");


/*
console.log("Total score: 110 \n" +
        "Вёрстка валидная +10 \n" +
        "<header>, <main>, <footer> +3 \n" +
        "<header>, <main>, <footer> +3 \n" +
        "4 <section> (по количеству секций) +3\n" +
        "только 1 заголовок <h1> +3 \n" +
        "3 заголовка <h2> +3 \n" +
        "1 элемент <nav> (панель навигации) +3 \n" +
        "2 списка ul > li > a (панель навигации, ссылки на соцсети) +3 \n" +
        "4 кнопки <button> +2\n" +
        "Вёрстка соответствует макету +48 \n" +
        "для построения сетки используются флексы  +2 \n" +
        "при уменьшении масштаба страницы браузера вёрстка размещается по центру +2 \n" +
        "фоновый цвет тянется на всю ширину страницы +2 \n" +
        "иконки добавлены в формате .svg. +2 \n" +
        "изображения добавлены в формате .jpg +2 \n" +
        "есть favicon +2\n" +
        "плавная прокрутка по якорям +5 \n" +
        "иконки соцсетей в футере при нажатии на них ведут на гитхаб автора проекта и на страницу курса +5 \n" +
        "интерактивность включает в себя другие визуальные эффекты - изменение цвета шрифта +5 \n" +
        "плавное изменение внешнего вида элемента при наведении и клике не влияющее на соседние элементы +5\n");*/