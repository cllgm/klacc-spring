$(function(){
  var swiper = new Swiper('.slide2 ', {
     direction: "vertical",
     speed: 1000,//버튼을 슬라이드가 넘어가는 시간
 
     autoplay: {
         delay: 2000,//자동으로 넘어가기 전 머무르는 시간
         disableOnInteraction: true,
       },
     
     mousewheel: true,
     slidesPerView: 2,
     spaceBetween: 30,  
     //slidesToShow: 2,//보여지는 갤러리 수
     //slidesToScroll: 1,//넘어가는 갤러리 수
     grid: {
       rows:3,
       column:1,
     },
     loop: false,//슬라이드 무한반복
     // navigation: {//화살표 버튼
     //   nextEl: '.swiper-button-next',
     //   prevEl: '.swiper-button-prev',
     // },
     // pagination: {//블릿 버튼
     //   el: '.swiper-pagination',
     //   clickable: true,
     // },
     
     scrollbar: {
       el: '.swiper-scrollbar',
       draggable: true,
       
     },
   });
 });