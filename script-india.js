document.getElementById('main-btn').addEventListener('click', function() {
    window.location.href = 'index-main.html'
});

document.getElementById('countryselect').addEventListener('change', function() {
    var selectedValue = this.value;
    if (selectedValue !== 'index-india.html') {
        window.location.href = selectedValue;
    }
});