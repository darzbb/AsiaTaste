window.addEventListener("resize", function () {
    if (window.innerWidth < 768) {
        document.querySelector("header h1").style.fontSize = "50px";  // Зменшення розміру заголовка
        document.querySelector("header").style.height = "400px";  // Зменшення висоти заголовку
    } else {
        // Код для великих екранів
        document.querySelector("header h1").style.fontSize = "100px";  // Повернути розмір заголовка
        document.querySelector("header").style.height = "690px";  // Повернути висоту заголовку
    }
});