var h1Text = document.querySelector("h1").textContent

var splittedText = h1Text.split("")

var clutter = ""

splittedText.forEach(function (elem, idx) {
  if (splittedText.length / 2 > idx) {
    clutter += `<span class="a">${elem}</span>`
  } else {
    clutter += `<span class="b">${elem}</span>`
  }
  
})


document.querySelector("h1").innerHTML = clutter


gsap.from("h1 .a", {
  opacity: 0,
  duration: 0.6,
  stagger: 0.2,
  delay: 0.4,
  y: 60
})
gsap.from("h1 .b", {
  opacity: 0,
  duration: 0.6,
  stagger: -0.2,
  delay: 0.4,
  y: 60
})