var body = document.querySelector("body")
var h1 = document.querySelector("h1")

body.addEventListener("mousemove",function(dets){
  gsap.to("#cursor",{
    x:dets.x,
    y:dets.y
  })
})

h1.addEventListener("mouseenter",function(){
  gsap.to("#cursor",{
    scale:5
  })
})

h1.addEventListener("mouseleave",function(){
  gsap.to("#cursor",{
    scale:1
  })
})