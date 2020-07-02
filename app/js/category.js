let elem = document.getElementById('burger');
  let elem1 = document.getElementById('menu-adaptive');
  let elem2 = document.getElementById('sub');
  var bodyNode = document.body || document.getElementsByTagName('body')[0];
  elem.onclick = function(event){
    bodyNode.classList.toggle('js-hidden');
    elem.classList.toggle('active');    
    elem1.classList.toggle('active');
    elem2.classList.toggle('active-block');
   
    
  }
  // let submenu_list = document.querySelectorAll('.menu-adaptive__item--submenu-item');
  // let submenu_item = document.querySelectorAll('.menu-adaptive__item--submenu');

  
  // for (var i = 0; i < submenu_item; i++) {
  //   submenu_item[i].addEventListener('click', function (){
  //     this.classList.toggle('active');
  //   });
  // }

  const submenu_list = document.querySelectorAll('.menu-adaptive__item--submenu');
  const submenu_item = document.querySelectorAll('.menu-adaptive__item--submenu-item');
  const first_level =  document.getElementById('first-level');
 

   for (var i = 0; i < submenu_list.length; i++) {
    submenu_list[i].addEventListener('click',  (e) => {
    event.preventDefault();
    theTarget = event.target;
    theTarget2 = theTarget.parentElement;
    theTarget2.classList.toggle("active");
    first_level.classList.toggle("js-active")
});
}

let elem3 = document.getElementById('category__more-settings');
  let elem4 = document.getElementById('category__block--md');
  elem3.onclick = function(event){
    elem4.classList.toggle('active-block');
  }

  // let elem5 = document.getElementById('menu-adaptive__item--submenu');
  // let elem6 = document.getElementById('menu-adaptive__item--submenu-item');
  // elem5.onclick = function(event){
  //   elem6.classList.toggle('active-block');
  // }

 
//   submenu_item.addEventListener('click', function () {
        
//     for (let i = 0; i < submenu_item.length; i++) {
//      (submenu[i]).classList.add('js-active');
//    }

// });


  document.addEventListener('DOMContentLoaded', function() {
    var genericExamples = document.querySelectorAll('[data-trigger]');
    for (i = 0; i < genericExamples.length; ++i) {
      var element = genericExamples[i];
      new Choices(element, {
        placeholderValue: 'This is a placeholder set in the config',
        noResultsText:'Нет результатов'
      });
    }});
    
  
const ratingItemsList = document.querySelectorAll('.rating__item');
const ratingItemsArray = Array.prototype.slice.call(ratingItemsList);

ratingItemsArray.forEach(item => {
  item.addEventListener('click', () => {
    const { itemValue} = item.dataset;
    item.parentNode.dataset.totalValue = item.dataset.itemValue;
})
});


