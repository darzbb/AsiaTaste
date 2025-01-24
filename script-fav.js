document.getElementById('main-btn').addEventListener('click', function() {
    window.location.href = 'index.html'
});

document.getElementById('recipe-btn').addEventListener('click', function() {
    window.location.href = 'index-recipe.html'
});

window.addEventListener('load', function() {
    const favoritesContainer = document.querySelector('.recipes');
    const favorites = JSON.parse(localStorage.getItem('favorites')) || {};

    // Додати всі збережені рецепти
    for (let recipeId in favorites) {
        favoritesContainer.innerHTML += favorites[recipeId];
    }

    // Додати стилі контейнеру
    favoritesContainer.classList.add('recipes-cards');

    // Додати подію для видалення з улюблених
    favoritesContainer.querySelectorAll('.favorite-icon').forEach(icon => {
        icon.classList.add('active'); // Усі рецепти улюблені, тому встановлюємо активний стан
        icon.addEventListener('click', function() {
            const recipeElement = this.closest('.recipe');
            const recipeId = recipeElement.id;

            // Видалити з localStorage
            let favorites = JSON.parse(localStorage.getItem('favorites'));
            delete favorites[recipeId];
            localStorage.setItem('favorites', JSON.stringify(favorites));

            // Видалити з DOM
            recipeElement.remove();
        });
    });
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

window.addEventListener('load', function() {
    const aboutSection = document.querySelector('.about h2');
    if (aboutSection) {
        aboutSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
});