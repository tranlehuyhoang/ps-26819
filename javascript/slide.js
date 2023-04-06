let dem = 0;

document.querySelectorAll('.mySlides').forEach((e, i) => {
  if (i == dem) {
    e.style.display = 'block'

  } else {
    e.style.display = 'none'
  }
})
function slide(a) {
  if (a > 0) {
    dem++
    if (dem > document.querySelectorAll('.mySlides').length - 1) { dem = 0 }
  } else {
    dem--;
    if (dem < 0) { dem = document.querySelectorAll('.mySlides').length - 1 }

  }
  document.querySelectorAll('.mySlides').forEach((e, i) => {
    if (i == dem) {
      e.style.display = 'block'

    } else {
      e.style.display = 'none'
    }

  })
}
setInterval(e => {
  slide()
}, 400)