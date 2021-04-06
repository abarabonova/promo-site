let buttonPrice = document.getElementById('button-price')
let buttonPriceTwo = document.getElementById('button-price-2')

buttonPrice.addEventListener('click', function() {
  swal({
  title: "совершить покупку",
  buttons: {
    cancel: "Отмена",
    confirm:"Купить"
  }
})
.then((val) => {
  if (val) {
    swal({
      title: "время спишется со счета"
    })
  }
})
})

buttonPriceTwo.addEventListener('click', function() {
  swal({
  title: "совершить покупку",
  buttons: {
    cancel: "Отмена",
    confirm:"Купить"
  }
})
.then((val) => {
  if (val) {
    swal({
      title: "время спишется со счета"
    })
  }
})
})
