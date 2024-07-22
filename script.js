var tl = gsap.timeline()

tl.to("#box1",{
    x:1000,
    duration:1.5,
    delay:0.5
})
tl.to("#box2",{
    x:1000,
    duration:1.75,
    backgroundColor:"yellow",
    rotate:360
})
tl.to("#box3",{
    duration:1.25,
    x:1000,
    backgroundColor:"white",
    scale:0.5,
    borderRadius:"50%"
})