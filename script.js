gsap.from("#page1 #box",{
    scale:0,
    duration:1.5,
    delay:0.5,
    rotate:360
})
gsap.from("#page2 #box",{
    scale:0,
    rotate:360,
    duration:1.5,
    scrollTrigger:{
        trigger:"#page2 #box",
        scroller:"body",
        markers:true,
        start:"top 50%",
        end:"top 30%",
        scrub:3
    }
})