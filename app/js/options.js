let elem3 = document.getElementById('more-settings');
let elem4 = document.getElementById('more-options');
  elem3.onclick = function(event){
    elem4.classList.toggle('js-active');
     elem3.classList.toggle("js-active")
  }
document.addEventListener('DOMContentLoaded', function() {
    var genericExamples = document.querySelectorAll('[data-trigger]');
    for (i = 0; i < genericExamples.length; ++i) {
      var element = genericExamples[i];
      new Choices(element, {
        placeholderValue: 'This is a placeholder set in the config',
        noResultsText:'Нет результатов'
      });
    }});

    let mobileBurger = document.getElementById('burger');
let mobileMenu = document.getElementsByClassName('mobile-navbar');
let mobileClose = document.getElementsByClassName('main-menu__close');
let mobileBg = document.getElementById('menu-bg');

mobileBurger.onclick = function(event){
  event.preventDefault();
  mobileMenu['0'].classList.add("open");
  mobileBg.style.display = "block";
}
mobileClose[0].onclick = function(event){
  event.preventDefault();
  mobileMenu['0'].classList.remove("open");
  setTimeout(() => mobileBg.style.display = "none", 300);
}

mobileBg.onclick = function(event){
  event.preventDefault();
  mobileMenu['0'].classList.remove("open");
  setTimeout(() => mobileBg.style.display = "none", 300);
}

let mobileNext = document.getElementsByClassName('main-menu__link next');
for (var i=0;i<mobileNext.length; i++) {
  mobileNext[i].onclick = function(event){
    event.preventDefault();
    this.nextElementSibling.classList.add('active');
    this.nextElementSibling.style.display = "block";
    setMyMenu();
  }
}

let mobileBack= document.getElementsByClassName('mobile-menu-back');
for (var i=0;i<mobileBack.length; i++) {
  mobileBack[i].onclick = function(event){
    event.preventDefault();
    this.parentElement.parentElement.classList.remove('active');
    setTimeout(() => this.parentElement.parentElement.style.display = "none", 300);
    setMyMenu();
  }
}

function setMyMenu() {
  let mobileMyMenu = document.getElementById('main-menu-mobile');
  let activeMenus = document.getElementsByClassName('main-menu active');
  mobileMyMenu.style.left = -100 * activeMenus.length +'%';
  document.getElementsByClassName('mobile-navbar')[0].scrollTop = 0;
}




// var $elem = $('#elem').data( "arr":[1] ), // оригинал элемента с закрепленным за ним массивом
//     $clone = $elem.clone(true) // создадим копию элемента
//     .data("arr", $.extend( [], $elem.data("arr") )); // и самостоятельно перепишем в нем arr



    $(".options__line-button").click(function(){
      $(this).next().append('<div class="options__item-container options__item-container--w25"><input type="text" name="phone" placeholder="Ваш номер" class="options__input"></div>');
    });
   
  