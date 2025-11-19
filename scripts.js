function navigateToRegion() {
    const selectedValue = document.getElementById('region-select').value;
    const targetElement = document.getElementById(selectedValue);
    if (targetElement) {
        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    }
}