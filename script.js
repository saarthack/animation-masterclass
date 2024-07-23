var tl = gsap.timeline()

tl.from("nav h2",{
    y:-60,
    duration:0.4,
    delay:0.4,
    opacity:0
})
tl.from("nav h4",{
    y:-60,
    opacity:0,
    duration:0.6,
    stagger:0.2
})

tl.from(".center h1",{
    y:80,
    opacity:0,
    duration:0.4
})
tl.from("#img3,#img4",{
    opacity:0,
    scale:1.5,
    duration:0.4
})
tl.from(".center p",{
    y:80,
    opacity:0,
    duration:0.3
})
tl.from(".center button",{
    scale:1.4,
    opacity:0,
    duration:0.3
})

tl.from("#img1",{
    x:-300,
    duration:0.4,
    opacity:0
})
tl.from("#img2",{
    x:300,
    duration:0.4,
    opacity:0
},'-=0.4')

tl.to("#img3,#img4",{
    scale:1.1,
    duration:4,
    repeat:-1,
    yoyo:true
})