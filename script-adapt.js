window.addEventListener("resize", function () {
    if (window.innerWidth < 768) {
        // Код для маленьких екранів
        document.querySelector("header h1").style.fontSize = "55px";
        document.querySelector("header").style.height = "400px";
    } else {
        // Код для великих екранів
        document.querySelector("header h1").style.fontSize = "100px";
        document.querySelector("header").style.height = "690px";
    }
});

// адаптивність для навігації
window.addEventListener("resize", function () {
    if (window.innerWidth < 768) {
        // Код для маленьких екранів
        document.querySelector("nav").style.fontSize = "12.5px";
        document.getElementById("main-btn").style.paddingRight = "25px";
        document.getElementById("recipe-btn").style.paddingRight = "25px";
        document.getElementById("fav-btn").style.paddingRight = "25px";
        document.getElementById("main-btn").style.paddingLeft = "10px";
        document.getElementById("recipe-btn").style.paddingLeft = "10px";
        document.getElementById("fav-btn").style.paddingLeft = "10px";
    } else {
        // Код для великих екранів
        document.querySelector("nav").style.fontSize = "15px";
        document.getElementById("main-btn").style.paddingRight = "100px";
        document.getElementById("recipe-btn").style.paddingRight = "100px";
        document.getElementById("fav-btn").style.paddingRight = "100px";
        document.getElementById("main-btn").style.paddingLeft = "25px";
        document.getElementById("recipe-btn").style.paddingLeft = "25px";
        document.getElementById("fav-btn").style.paddingLeft = "25px";
    }
});

window.addEventListener("resize", function () {
    if (window.innerWidth < 768) {
        // Код для маленьких екранів
        document.querySelector(".about h2").style.fontSize = "37.5px";
        document.querySelector(".about p").style.fontSize = "15.75px";
        document.querySelector(".about p").style.width = "325px";
    } else {
        // Код для великих екранів
        document.querySelector(".about h2").style.fontSize = "50px";
        document.querySelector(".about p").style.fontSize = "19.75px";
        document.querySelector(".about p").style.width = "700px";
    }
});

window.addEventListener("resize", function () {
    if (window.innerWidth < 768) {
        // Код для маленьких екранів
        document.getElementById("tg").style.width = "100px";
        document.getElementById("tg").style.height = "100px";
        document.getElementById("ig").style.width = "100px";
        document.getElementById("ig").style.height = "100px";
        document.getElementById("tg").style.borderRadius = "22.5px";
        document.getElementById("ig").style.borderRadius = "22.5px";
        document.querySelector("footer p").style.fontSize = "15px";
        document.querySelector("footer p").style.paddingTop = "65px";
        document.querySelector(".img-container").style.marginTop = "45px";
    } else {
        // Код для великих екранів
        document.getElementById("tg").style.width = "120px";
        document.getElementById("tg").style.height = "120px";
        document.getElementById("ig").style.width = "120px";
        document.getElementById("ig").style.height = "120px";
        document.getElementById("tg").style.borderRadius = "27.5px";
        document.getElementById("ig").style.borderRadius = "27.5px";
        document.querySelector("footer p").style.fontSize = "17.5px";
        document.querySelector("footer p").style.paddingTop = "50px";
        document.querySelector(".img-container").style.marginTop = "30px";
    }
});