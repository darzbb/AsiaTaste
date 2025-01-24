document.getElementById('main-btn').addEventListener('click', function() {
    window.location.href = 'index.html'
});

document.getElementById('fav-btn').addEventListener('click', function() {
  window.location.href = 'index-fav.html'
});

document.getElementById('countryselect').addEventListener('change', function() {
  var selectedValue = this.value;
  if (selectedValue !== 'index-recipe.html') {
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

window.addEventListener('load', function() {
  const aboutSection = document.getElementById('countryselect');
  if (aboutSection) {
      aboutSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
      });
  }
});