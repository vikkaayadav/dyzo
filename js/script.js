document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.MobileNavigationToggle');
    const mobileNav = document.querySelector('.MobileNavigation');
    const closeButton = document.querySelector('.navCloseBtn');

    toggleButton.addEventListener('click', function() {
        mobileNav.classList.toggle('open');
    });
    closeButton.addEventListener('click', function() {
        mobileNav.classList.remove('open');
    });
});
