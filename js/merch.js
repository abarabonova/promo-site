let buttonPrice = document.getElementById('button-price')

buttonPrice.addEventListener('click', function() {
  swal({
  title: "совершить покупку?",
  buttons: {
    cancel: true,
    confirm:"да"
  }
})
.then((val) => {
  if (val) {
    swal("Время спишется с вашего счета!", {
    })
  }
})
})
