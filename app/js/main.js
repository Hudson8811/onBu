// $(".burger").click(function() {
//     $(this).toggleClass("active");
//     $(".main-menu").toggleClass("active")
//   });

  let elem = document.getElementById('burger');
  let elem1 = document.getElementById('menu-adaptive');
  elem.onclick = function(event){
    elem.classList.toggle('active');    
    elem1.classList.toggle('active');
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