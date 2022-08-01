(function () {
    const burgerItem = document.querySelector(".burger-menu");
    const burgerImage = document.querySelector(".burger-menu-image");
    const burgerContainer = document.querySelector(".burger-menu-overlay");
    const body = document.querySelector("body");
    const formContainer = document.querySelector(".form-popup-container")
    const loginItem = document.querySelector(".form-sign-in");
    const registerItem = document.querySelector(".form-sign-up");
    const loginButton = document.querySelector(".button");
    const formOverlay = document.querySelector(".form-overlay");

    burgerImage.addEventListener("click", () => {
        console.log(burgerItem);
        burgerItem.classList.toggle("burger-menu-active");
        burgerContainer.classList.toggle("burger-menu-overlay-active");
        body.classList.toggle("body-active");
    })
    loginButton.addEventListener("click", () => {
        console.log(loginItem);
        loginItem.classList.remove("form-active");
        registerItem.classList.remove("form-active");
        formContainer.classList.toggle("form-popup-container-active");
        loginItem.classList.toggle("form-active");
        formOverlay.classList.toggle("form-overlay-active");
        body.classList.toggle("body-active");
    })


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

    formOverlay.addEventListener("click", () => {
        console.log(formOverlay);
        formContainer.classList.remove("form-popup-container-active");
        formOverlay.classList.remove("form-overlay-active");
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
        loginItem.classList.remove("form-active");
        registerItem.classList.remove("form-active");
        formContainer.classList.toggle("form-popup-container-active");
        loginItem.classList.toggle("form-active");
        formOverlay.classList.toggle("form-overlay-active");
        body.classList.toggle("body-active");
    })

    const formRegistration = document.getElementById("registration");
    formRegistration.addEventListener("click", () => {
        loginItem.classList.remove("form-active");
        registerItem.classList.toggle("form-active");

    })

    const formLogin = document.getElementById("login");
    formLogin.addEventListener("click", () => {
        registerItem.classList.remove("form-active");
        loginItem.classList.toggle("form-active");
    } )

    const signInButton = document.querySelectorAll(".sign-button");
    console.log(signInButton)
    console.log(signInButton.length)
    for (let i = 0; i < signInButton.length; i++) {
        signInButton[i].addEventListener("click", () => {
            console.log("click");
            const inputEmailValue = document.querySelector(".form-active .email").value;
            const inputPasswordValue = document.querySelector(".form-active .password").value;
            console.log(inputEmailValue);
            console.log(inputPasswordValue);
            alert("Email: " + inputEmailValue);
            alert("Password: " + inputPasswordValue);
        })
    }

    const banner = document.querySelector(".banner");
    const cards = document.getElementsByClassName("country-card");
    const offset = 0;
    const pagination = document.getElementsByClassName("pagination-item");
    const leftArrow = document.getElementById("left-arrow");
    const rightArrow = document.getElementById("right-arrow");
    let currentPosition = 0;

    const widthBody1 = getWidth(body);
    if (widthBody1 <= 768) {
        pagination[0].classList.add("pagination-item-active");
    } else {
        pagination[1].classList.add("pagination-item-active");
    }


    for (let i = 0; i < cards.length; i++) {
        cards[i].addEventListener("click", () => {
            move(cards[i], i);
        })
    }

    for (let i = 0; i < pagination.length; i++) {
        pagination[i].addEventListener("click", () => {
            move(cards[i], i);
            console.log(i);
        })
    }

    function move(item, index) {
        let width = getWidth(item);
        const widthBody = getWidth(body);
        let step = 0;
        if (widthBody <= 768) {
            step = 0;
        } else {
            step = 1;
        }

        let offset = -width * (index - step);
        offset = offset + "px";
        console.log(offset);
        banner.style.transform = "translateX(" + offset + ")";

        for (let i = 0; i < pagination.length; i++) {
            pagination[i].classList.remove("pagination-item-active");
        }
        pagination[index].classList.toggle("pagination-item-active");
        currentPosition = index;

        if (index === 0) {
            leftArrow.classList.add("arrow-disable");
        } else if (index === cards.length - 1) {
            rightArrow.classList.add("arrow-disable");
        } else {
            leftArrow.classList.remove("arrow-disable");
            rightArrow.classList.remove("arrow-disable");
        }
    }

    function getWidth(item) {
        let style = item.currentStyle || window.getComputedStyle(item)
        let width = style.width.split("px")[0] * 1 + style.marginLeft.split("px")[0] * 1 + style.marginRight.split("px")[0] * 1;
        return width;
    }

    leftArrow.addEventListener("click", () => {

        if (currentPosition <= 0) {
            currentPosition = 0;
            return;
        }

        currentPosition = currentPosition - 1;
        move(cards[currentPosition], currentPosition);
    })

    rightArrow.addEventListener("click", () => {

        if (currentPosition >= cards.length - 1) {
            currentPosition = cards.length - 1;
            return;
        }

        currentPosition = currentPosition + 1;
        move(cards[currentPosition], currentPosition);
    })
}());


console.log("Total score: 125 \n" +
    "Слайдер изображений в секции destinations +50\n" +
    "   на десктоп варианте при клике на урезанную картинку слева или справа изображение меняется по принципу карусели + 20\n" +
    "   Три точки внизу отображают \"номер слайда\", который становится активным при нахождении соответствующего ему слайда в центре. На мобильном варианте картинка одна, но поверх нее появляются стрелочки навигации +20\n" +
    "   Анимации плавного перемещения для слайдера +10\n" +
    "Нажатие на кнопку Login (кнопка Account в мобильной версии) показывает сверстанный логин попап + 50\n" +
    "   логин попап соответствует верстке его закрытие происходит при клике вне попапа +25\n" +
    "   логин попап имеет 2 инпута (email и пароль) при нажатии на кнопку Sign In показывается браузерный алерт с введенными данными +25\n" +
    "Нажатие на кнопку Register на Login попапе меняет разметку попапа на разметку Sign Up попапа согласно макету +25\n")


// console.log("Total score: 85 \n" +
//     "Вёрстка соответствует макету. Ширина экрана 390px +48 \n" +
//     "блок <header> +6 \n" +
//     "секция preview +9 \n" +
//     "секция steps +9 \n" +
//     "секция destinations +9 \n" +
//     "секция stories +9 \n" +
//     "блок <footer> +6 \n" +
//     "нет полосы прокрутки при ширине страницы от 1440рх до 390px +7 \n" +
//     "нет полосы прокрутки при ширине страницы от 390px до 320рх +8 \n" +
//     "при ширине страницы 390рх панель навигации скрывается, появляется бургер-иконка +2\n" +
//     "при нажатии на бургер-иконку плавно появляется адаптивное меню +4\n" +
//     "адаптивное меню соответствует макету +4\n" +
//     "при нажатии на крестик адаптивное меню плавно скрывается уезжая за экран +4\n" +
//     "ссылки в адаптивном меню работают, обеспечивая плавную прокрутку по якорям +4\n" +
//     "при клике по ссылке в адаптивном меню адаптивное меню плавно скрывается, скрытие меню происходит если сделать клик вне данного окна +4\n");
//

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