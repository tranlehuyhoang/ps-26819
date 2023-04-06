let dem = 0;
console.log(document.querySelectorAll('.mySlides').length)

document.querySelectorAll('.mySlides').forEach((e, i) => {
  if (i == dem) {
    e.style.display = 'block'

  } else {
    e.style.display = 'none'
  }
})
function slide(a) {
  console.log(dem)
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