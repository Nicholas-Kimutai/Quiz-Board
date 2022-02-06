function totalScore(){
  var questionOne=document.getElementsByName("question1");
  var questionTwo=document.getElementsByName("question2");
  var questionThree=document.getElementsByName("question3");
  var questionFour=document.getElementsByName("question4");
  var questionFive=document.getElementsByName("question5");
  var score=0;

  for (var i=0, length=questionOne.length;i<length;i++){
      if(questionOne[i].checked){
          var ans1=questionOne[i].value
          if(questionOne[i].value==='A'){
              score+=20
          }
      }
  }
   
   for (var i=0, length=questionTwo.length;i<length;i++){
       if(questionTwo[i].checked){
          var ans2=questionTwo[i].value
          if(questionTwo[i].value==='A'){
            score+=20
        }
      }
    }

    for (var i=0, length=questionThree.length;i<length;i++){
        if(questionThree[i].checked){
           var ans3=questionThree[i].value
           if(questionThree[i].value==='D'){
             score+=20
         }
       }
     }

     for (var i=0, length=questionFour.length;i<length;i++){
        if(questionFour[i].checked){
           var ans4=questionFour[i].value
           if(questionFour[i].value==='B'){
             score +=20
         }
       }
     }

     for (var i=0, length=questionFive.length;i<length;i++){
        if(questionFive[i].checked){
           var ans5=questionFive[i].value
           if(questionFive[i].value==='C'){
             score+=20
         }
       }
     }

    document.getElementById("answer").value="Your score is:" +score;
    if(score>80){
        document.getElementById("feedback").value="You have Excellently passed!";
    }
    else if(score<=80 && score>=50){
        document.getElementById("feedback").value="You have Fairly Passed!";
    }
    else{
        document.getElementById("feedback").value="You have scored poorly. You need to retake the test";
    }
}