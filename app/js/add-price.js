$( ".add-price__item-input" ).change(function() {
   
  
    if ($(".add-price__item-input:checked").val()){
        $(".add-price__bottom").addClass("js-active");
    }
    else{
        $(".add-price__bottom").removeClass("js-active");
    }
    });
    