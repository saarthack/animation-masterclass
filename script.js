var swiper = new Swiper('.swiper', {
  navigation: {
    nextEl: "#next-btn",
    prevEl: "#prev-btn",
  },
  // rewind: true,
  loop:true,
  autoplay:{
    delay:2500,
    disableOnInteraction:true
  },
  pagination: {
    el: '.swiper-pagination',
    clickable:true,
    // dynamicBullets:true,
    // type:'progressbar',
    // type:'fraction'
  },
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  //   hide:true 
  // },
})