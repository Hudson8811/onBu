let elem7 = document.getElementById('advertisement__more-setting');
let elem8 = document.getElementById('advertisement__hidden-settings');
  elem7.onclick = function(event){  
    elem8.classList.toggle('active-block');
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