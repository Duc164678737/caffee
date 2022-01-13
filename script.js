
window.addEventListener("scroll", function () {
    var header = document.querySelector(".header");
    header.classList.toggle("sticky", window.scrollY);

    var section = document.querySelector(".section_home");
    section.classList.toggle("sticky", window.scrollY);
})

var icon_search = document.querySelector(".ti-search");
var search = document.querySelector(".search")
icon_search.onclick = function () {
    icon_search.classList.toggle('active')
    search.classList.toggle('active')
    icon_shopping.classList.remove('active');
    shopping.classList.remove('active');
    nav.classList.remove('active');
    menu.classList.remove('active');

}

var icon_shopping = document.querySelector(".ti-shopping-cart");
var shopping = document.querySelector(".shopping-cart")
icon_shopping.onclick = function () {
    icon_shopping.classList.toggle('active');
    shopping.classList.toggle('active');
    icon_search.classList.remove('active')
    search.classList.remove('active')
    nav.classList.remove('active');
    menu.classList.remove('active');
}

// Tab-menu
var nav = document.querySelector(".navbar");
var menu = document.querySelector(".header_icon_menu");
menu.onclick = function () {
    menu.classList.toggle('active');
    nav.classList.toggle('active');
    icon_search.classList.remove('active')
    search.classList.remove('active')
    icon_shopping.classList.remove('active');
    shopping.classList.remove('active');
}
var menuMoblie = document.querySelectorAll('.navbar li a[href *="#"]');
for(var i=0; i < menuMoblie.length; i++) {
    let menuItem = menuMoblie[i];
    menuItem.onclick = function (e) {
        nav.classList.remove('active');
        menu.classList.remove('active');
    }
}
var menu_meal = document.querySelectorAll(".menu_meal--active");
var content_img = document.querySelectorAll(".menu_content_img-active");
menu_meal.forEach((value, index) => {
    const imgs = content_img[index]
    value.onclick = function () {
        document.querySelector(".menu_meal--active.active").classList.remove("active")
        document.querySelector(".menu_content_img-active.active").classList.remove("active")
        imgs.classList.add("active");
        this.classList.add("active");
    }
})

