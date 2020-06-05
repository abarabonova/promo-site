// let counter = document.getElementsByClassName('.game__time__number')
// let shapeYellowOval = document.getElementsByClassName('.game__shapes__oval-yellow')
//
// counter.value = 0;
//
// shapeYellowOval.onclick = function () {
//   counter.value =+ 1
//
// }
//
// if (count == "") {
//   document.write = 0
// }






let shape1 = document.getElementsByClassName('game__shapes__ellipse-green')
let shape2 = document.getElementsByClassName('game__shapes__ellipse-purple')
let shape3 = document.getElementsByClassName('game__shapes__oval-yellow')

// let int;
//
// function changeColor() {
//
//   int = setInterval(function(){
//   shape1.style.background = ('#000');
//   setTimeout(function () {
//      shape2.style.background = ('#000');
//   }, 500);
//   setTimeout(function () {
//       shape3.style.background = ('#000');
//   }, 1000);
// }, 1500);
//
// }
//
// changeColor()


// вторая


$(document).ready(function(){
  $('.easymode-btn').hide();
  var instructions = [];
  // var movingInstructions = [];
  // var audioInstructions = [];
  var playerSteps = [];
  var steps = 0;
  // var hardmode = false;
  //
  // $('.hardmode-btn').click(function(){
  //   $('.easymode-btn').show();
  //   $(this).hide();
  //   hardmode = true;
  // });
  //
  // $('.easymode-btn').click(function(){
  //   $('.hardmode-btn').show();
  //   $(this).hide();
  //   hardmode = false;
  // });
  //
  // function reset(){
  //   $('.start-btn').removeAttr('disabled');
  //   instructions = [];
  //   movingInstructions = [];
  //   audioInstructions = [];
  //   playerSteps = [];
  //   steps = 0;
  //   $('.count').html("--");
  // }
  //
  function addToInstructions(){
    instructions.push(Math.floor(Math.random()*4+1));
      for(let i = 0; i < instructions.length; i++){
        movingInstructions.push(instructions[i]);
        audioInstructions.push(instructions[i]);
      }
    playerSteps = [];
    steps++;
    $('.count').html(steps);
    console.log(instructions);
  }
  addToInstructions();
  //
  // function soundInstructions(){
  //   setTimeout(function loop2(){
  //     var audioID = audioInstructions.shift();
  //     function playAudio(){
	// 		  var audio = document.getElementById("sound-" + audioID);
	// 		  audio.play();
	// 	  }
  //     playAudio();
  //     if(audioInstructions.length)
  //         setTimeout(loop2, 1000);
  //   }, 1000);
  // }
  //
  function showInstructions(){
    setTimeout(function loop(){
      $("#" + movingInstructions.shift())
                                .animate({opacity:0})
                                .animate({opacity:1});
      if(movingInstructions.length)
          setTimeout(loop, 1000);
    }, 1000);
  }
  showInstructions();

  // $('.start-btn').click(function nextLevel(){
  //   $(this).attr('disabled','disabled');
  //   addToInstructions();
  //   showInstructions();
  //   soundInstructions();
  // });
  //
  // $('.reset-btn').click(function(){
  //   reset();
  // });

  // $('.circle').click(function(){
    // var thisStep = parseInt($(this).attr('id'));
      // function playAudio(){
			//   var audio = document.getElementById("sound-" + thisStep);
			//   audio.play();
		  // }
    // playAudio();
    // playerSteps.push(thisStep);
    // if(playerSteps.length === 20){
    //   reset();
    //   alert("YOU WIN! GAME RESET.");
    // }
    // for(var k = 0; k < playerSteps.length; k++){
    //   if(playerSteps[k] != instructions[k] && hardmode === true){
    //     reset();
    //     alert("YOU LOSE! GAME RESET.");
    //   }
    //   if(playerSteps[k] != instructions[k] && hardmode === false){
    //     alert("YOU LOSE! CONTINUE PLAYING.")
    //   }
    //   if(playerSteps[k] == instructions[k] && playerSteps.length == instructions.length){
    //     addToInstructions();
    //     showInstructions();
    //     soundInstructions();
    //   }
    // }
  // });
});























//
