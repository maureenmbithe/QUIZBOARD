var result1 = 1;
var result2 = 2;
var result3 = 3;
var result4 = 4;
var result5 = 5;

function score ()  {
  return "you have scored" + total;
}
$(document).ready(function() {
  $("#button2").click(function(event) {
    var question1 = $("input:radio[name='question1']:checked").val();
    var question2 = $("input:radio[name='question2']:checked").val();
    var question3 = $("input:radio[name='question3']:checked").val();
    var question4 = $("input:radio[name='question4']:checked").val();
    var question5 = $("input:radio[name='question5']:checked").val();
    
    var correct = 0;
    if (question1 === "right") {
      result1 = 20;
    }else {
      result1 = 0;
    }
    if (question2 ==="right") {
      result2 = 20;
    } else {
      result2 = 0;
    }
    if (question3 === "right") {
      result3 = 20;
    } else {
      result3 = 0;
    }
    if (question4 === "right") {
      result4 = 20;
    } else {
      result4 = 0;
    }
    if (question5 === "right") {
      result5 = 20;
    }else {
      result5= 0;
    }
    var score = (result1 + result2 + result3 + result4 + result5);
    console.log(score);

    $("#result").text("You have gotten " + score + " points.");
    
  })
})