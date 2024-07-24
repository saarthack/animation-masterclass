gsap.from(".card",{
    y:100,
    opacity:0,
    duration:0.8,
    stagger:0.3,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        start:"top 50%",
        end:"top 40%",
        scrub:3
    }
})