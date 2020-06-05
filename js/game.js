// let shape1 = document.getElementsByClassName('game__shapes__ellipse-green')
let shape1 = document.getElementById('shape-1')
let shape2 = document.getElementById('shape-2')
let shape3 = document.getElementById('shape-3')
let shape4 = document.getElementById('shape-4')
let shape5 = document.getElementById('shape-5')
let shape6 = document.getElementById('shape-6')
let shape7 = document.getElementById('shape-7')
let int


window.onload = function changeColorOne() {

  int = setInterval(function(){
  shape1.style.backgroundColor = '#70348C'
  setTimeout(function () {
     shape1.style.backgroundColor = '#00844B'
  }, 800)
}, 3600)
}


// window.onload = function () {
	span = document.getElementById('game__time')
	let count = 0
	span.innerHTML = count

	document.body.onclick = function (e) {
		e = e || event
		let target = e.target || e.srcElement
		if (target.id === 'shape-1' || 'shape-2' || 'shape-3' || 'shape-4' || 'shape-5' || 'shape-6' || 'shape-7') {
			count++
			span.innerHTML = count
		}
	}
// }



















//
