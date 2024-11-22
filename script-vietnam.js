document.getElementById('main-btn').addEventListener('click', function() {
    window.location.href = 'index.html'
});
document.getElementById('recipe-btn').addEventListener('click', function() {
    window.location.href = 'index-recipe.html'
});

document.getElementById('countryselect').addEventListener('change', function() {
    var selectedValue = this.value;
    if (selectedValue !== 'index-vietnam.html') {
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