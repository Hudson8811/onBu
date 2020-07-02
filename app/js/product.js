
const ratingItemsList = document.querySelectorAll('.rating__item');
const ratingItemsArray = Array.prototype.slice.call(ratingItemsList);

ratingItemsArray.forEach(item => {
  item.addEventListener('click', () => {
    const { itemValue} = item.dataset;
    item.parentNode.dataset.totalValue = item.dataset.itemValue;
})
});
let elem = document.getElementById('burger');
  let elem1 = document.getElementById('menu-adaptive');
  let elem2 = document.getElementById('sub');
  elem.onclick = function(event){
    elem.classList.toggle('active');    
    elem1.classList.toggle('active');
    elem2.classList.toggle('active-block');
  }
  
  let elem0 = document.getElementById('menu-adaptive__item--submenu');
  let elem06 = document.getElementById('menu-adaptive__item--submenu-item');
  elem0.onclick = function(event){
    elem06.classList.toggle('active-block');
  }
  let like = document.getElementById('save-bookmark');
  like.onclick = function(event){
    like.classList.toggle('js-active');
  }
var galleryThumbs = new Swiper('.product-item__gallery-thumbs', {
    spaceBetween: 10,
    slidesPerView: 10,
    breakpoints: {
      768: {
        slidesPerView: 3,
      },
      
    },
  });
  
  var galleryTop = new Swiper('.product-item__gallery-top', {
    spaceBetween: 10,
    slidesPerView: 1,
    
    thumbs: {
      swiper: galleryThumbs
    }
  });

  {
    
}

let elem3 = document.getElementById('filters__more-settings');
  let elem4 = document.getElementById('filters__select-container--hidden');
  elem3.onclick = function(event){
    elem4.classList.toggle('active-select');
    elem3.classList.toggle("js-active")
  }
  let elem5 = document.getElementById('menu-adaptive__item--submenu');
  let elem6 = document.getElementById('menu-adaptive__item--submenu-item');
  elem5.onclick = function(event){
    elem6.classList.toggle('active');
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
  