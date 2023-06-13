const menuIcon = document.querySelector('.fas');
const menuItems = document.querySelector('.menu-items');

menuIcon.addEventListener("click", function() {
    menuItems.classList.toggle('active');
    menuIcon.classList.toggle('fa-bars');
    menuIcon.classList.toggle('fa-times');

});