document.getElementById('main-btn').addEventListener('click', function() {
    window.location.href = 'index.html'
});

document.getElementById('recipe-btn').addEventListener('click', function() {
    window.location.href = 'index-recipe.html'
});

document.getElementById('fav-btn').addEventListener('click', function() {
    window.location.href = 'index-fav.html'
});

// код для вибору країн + плавна анімація
document.getElementById('countryselect').addEventListener('change', function() {
    var selectedValue = this.value;
    if (selectedValue !== 'index-india.html') {
        localStorage.setItem('scrollToCountrySelect', 'true');
        window.location.href = selectedValue;
    }
});

window.addEventListener('load', function() {
    if (localStorage.getItem('scrollToCountrySelect') === 'true') {
        document.getElementById('countryselect').scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
        localStorage.removeItem('scrollToCountrySelect');
    }
});

// Функція для плавної появи елементів
function revealElements() {
    let reveals = document.querySelectorAll('.recipe');
  
    for (let i = 0; i < reveals.length; i++) {
      let windowHeight = window.innerHeight;
      let elementTop = reveals[i].getBoundingClientRect().top;
      let elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add('active');
      } else {
        reveals[i].classList.remove('active');
      }
    }
  }
  
window.addEventListener('scroll', revealElements);
revealElements();

let isButtonHidden = false;

window.addEventListener('scroll', function () {
    const scrollBtn = document.getElementById('scroll-to-top');

    if (window.scrollY <= 0) {
        isButtonHidden = false;
    }
    
    if (window.scrollY > 2000 && !isButtonHidden) {
        scrollBtn.style.display = 'flex';
    } else {
        scrollBtn.style.display = 'none';
    }
});

document.getElementById('scroll-to-top').addEventListener('click', function (event) {
    if (event.target.tagName !== 'SPAN') return;
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
});

document.getElementById('hide-button').addEventListener('click', function () {
    const scrollBtn = document.getElementById('scroll-to-top');
    scrollBtn.style.display = 'none';
    isButtonHidden = true;
});




// Функція для перевірки та оновлення стану сердечок при завантаженні сторінки
function updateFavoriteIcons() {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || {};

    document.querySelectorAll('.recipe').forEach(recipeElement => {
        const recipeId = recipeElement.id;
        const favoriteIcon = recipeElement.querySelector('.favorite-icon');

        // Перевіряємо, чи рецепт у списку улюблених
        if (favorites[recipeId]) {
            favoriteIcon.classList.add('active'); // Застосовуємо активний стан
        } else {
            favoriteIcon.classList.remove('active'); // Забираємо активний стан
        }
    });
}

// Функція для обробки кліків на сердечко
function handleFavoriteIconClick() {
    document.querySelectorAll('.favorite-icon').forEach(icon => {
        icon.addEventListener('click', function () {
            const recipeElement = this.closest('.recipe');
            const recipeId = recipeElement.id;
            const recipeHtml = recipeElement.outerHTML;

            // Отримуємо існуючі улюблені рецепти
            let favorites = JSON.parse(localStorage.getItem('favorites')) || {};

            // Якщо рецепт вже є в улюблених, видаляємо його
            if (favorites[recipeId]) {
                delete favorites[recipeId];
                this.classList.remove('active'); // Знімаємо активний стан іконки
            } else {
                // Якщо рецепту немає, додаємо його
                favorites[recipeId] = recipeHtml;
                this.classList.add('active'); // Додаємо активний стан іконки
            }

            // Оновлюємо localStorage
            localStorage.setItem('favorites', JSON.stringify(favorites));
        });
    });
}

// Виконуємо перевірку стану іконок при завантаженні сторінки
window.addEventListener('load', function () {
    updateFavoriteIcons();
    handleFavoriteIconClick();
});