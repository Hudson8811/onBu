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
