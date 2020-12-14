
let slider1 = new Swiper('.slider-left', {
  init : true , 
  slidesPerView : 'auto' , 
  loop : true , 
  loopedSlides : 0 , 
  slidesPerGroup : 1 , 
  spaceBetween : 30,
});



slider1.slideToLoop()

$(".swiper-slide-active").addClass("current");

slider1.on("slideChangeTransitionStart", function() {
    $(".slider-left__slide").removeClass("current");
    $(".swiper-slide-active").addClass("current");

  
})

