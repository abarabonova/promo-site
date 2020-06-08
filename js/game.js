// let shape1 = document.getElementsByClassName('game__shapes__ellipse-green')
let shape1 = document.getElementById('shape-1')
let shape2 = document.getElementById('shape-2')
let shape3 = document.getElementById('shape-3')
let shape4 = document.getElementById('shape-4')
let shape5 = document.getElementById('shape-5')
let shape6 = document.getElementById('shape-6')
let shape7 = document.getElementById('shape-7')
let int


document.addEventListener("DOMContentLoaded", __main__)

function __main__() {
  let shape1 = document.getElementById('shape-1')
  let interval

  startColorChange()
  setClickCounter()

  function startColorChange() {
    interval = setInterval(function() {
      shape1.classList.add("active")

      setTimeout(function() {
        shape1.classList.remove("active")
      }, 800)
    }, 3600)

    interval = setInterval(function() {
      shape2.classList.add("active")

      setTimeout(function() {
        shape2.classList.remove("active")
      }, 1000)
    }, 6000)

    interval = setInterval(function() {
      shape3.classList.add("active")

      setTimeout(function() {
        shape3.classList.remove("active")
      }, 500)
    }, 7000)

    interval = setInterval(function() {
      shape4.classList.add("active")

      setTimeout(function() {
        shape4.classList.remove("active")
      }, 500)
    }, 17000)

    interval = setInterval(function() {
      shape5.classList.add("active")

      setTimeout(function() {
        shape5.classList.remove("active")
      }, 700)
    }, 11400)

    interval = setInterval(function() {
      shape6.classList.add("active")

      setTimeout(function() {
        shape6.classList.remove("active")
      }, 300)
    }, 8130)

    interval = setInterval(function() {
      shape7.classList.add("active")

      setTimeout(function() {
        shape7.classList.remove("active")
      }, 500)
    }, 5620)
  }

  function setClickCounter() {
    let count = 0
    let span = document.getElementById('game__time')
    span.textContent = count

    document.addEventListener('click', function(e) {
      let shape1 = e.target.closest("#shape-1")
      if (!shape1) return

      if (shape1.classList.contains("active")) {
        span.textContent = ++count
      } else {
        console.log("Промах!")
        setTimeout(e => console.clear(), 1000)
      }
    })

    document.addEventListener('click', function(e) {
      let shape2 = e.target.closest("#shape-2")
      if (!shape2) return

      if (shape2.classList.contains("active")) {
        span.textContent = ++count
      } else {
        console.log("Промах!")
        setTimeout(e => console.clear(), 1000)
      }
    })

    document.addEventListener('click', function(e) {
      let shape3 = e.target.closest("#shape-3")
      if (!shape3) return

      if (shape3.classList.contains("active")) {
        span.textContent = ++count
      } else {
        console.log("Промах!")
        setTimeout(e => console.clear(), 1000)
      }
    })

    document.addEventListener('click', function(e) {
      let shape4 = e.target.closest("#shape-4")
      if (!shape4) return

      if (shape4.classList.contains("active")) {
        span.textContent = ++count
      } else {
        console.log("Промах!")
        setTimeout(e => console.clear(), 1000)
      }
    })

    document.addEventListener('click', function(e) {
      let shape5 = e.target.closest("#shape-5")
      if (!shape5) return

      if (shape5.classList.contains("active")) {
        span.textContent = ++count
      } else {
        console.log("Промах!")
        setTimeout(e => console.clear(), 1000)
      }
    })

    document.addEventListener('click', function(e) {
      let shape6 = e.target.closest("#shape-6")
      if (!shape6) return

      if (shape6.classList.contains("active")) {
        span.textContent = ++count
      } else {
        console.log("Промах!")
        setTimeout(e => console.clear(), 1000)
      }
    })

    document.addEventListener('click', function(e) {
      let shape7 = e.target.closest("#shape-7")
      if (!shape7) return

      if (shape7.classList.contains("active")) {
        span.textContent = ++count
      } else {
        console.log("Промах!")
        setTimeout(e => console.clear(), 1000)
      }
    })






  }
}














//
