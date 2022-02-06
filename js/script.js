function totalScore(){
  var questionOne=document.getElementsByName("question1");
  var questionTwo=document.getElementsByName("question2");
  var questionThree=document.getElementsByName("question3");
  var questionFour=document.getElementsByClassName("question4");
  var questionFive=document.getElementsByClassName("question5");
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
             score+=20
         }
       }
     }

     


}