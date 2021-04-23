const quizeDB= [ 
    {
      
        question : "Q1: Which car manufacturer was the first to win 100 F1 races?",
        a : "Ferrari",
        b : "Nissan",
        c : "Ford",
        d : "Maruti",
        ans : "ans1"
    },
    {
      
        question : "Q2:In the professional era which woman has won the most titles at Wimbledon [singles, doubles and mixed] ?",
        a : "Venus",
        b : "Hingis",
        c : "Martina Navratilova",
        d : "Waynetta",
        ans : "ans3"
    },
    {
      
        question : "Q3:How many times have Liverpool been relegated from the top flight of English football?",
        a : "Four",
        b : "Three",
        c : "Two",
        d : "Five",
       ans : "ans2"
    }]  ;
    const question = document.querySelector('.question');
    //console.log(question.innerHTML);
    const option1 = document.querySelector("#opt1");
    const option2 = document.querySelector("#opt2");
    const option3 = document.querySelector("#opt3");
    const option4 = document.querySelector("#opt4");
    const submit = document.querySelector("#submit");
    const answers = document.querySelectorAll('.answer');
    const showScore = document.querySelector("#showScore");
    const upper = document.querySelector("#upper")
    console.log(answers);
    let questionCount= 0;
   // console.log(questionCount);
    let score=0;
    
   const loadQuestion = ()=>{
    const questionList = quizeDB[questionCount];
    question.innerHTML=questionList.question;
    option1.innerHTML = questionList.a;
    option2.innerHTML = questionList.b;
    option3.innerHTML = questionList.c;
    option4.innerHTML = questionList.d;
  
   
   }
  const getCheckAnswer= ()=>{
       let answer;
       answers.forEach((curAnsElem) => {
           if(curAnsElem.checked){
               answer = curAnsElem.id;
           }
        });
        return answer;
  }
  const deselectAll= ()=>{
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
  }
   submit.addEventListener('click', () =>{
    
        const checkedAnswer = getCheckAnswer();
        
        //console.log(score);
        if(checkedAnswer === quizeDB[questionCount].ans){
            score++;
        }
        deselectAll();
        questionCount++;
        if(questionCount < quizeDB.length ){
           
            loadQuestion();  
            
        }else{

            showScore.innerHTML = `
            <h3> your scored  ${score}/ ${quizeDB.length} </h3>
            <button class="btn" onclick = "location.reload()">Play Again</button>
            `;
            showScore.classList.remove('scoreArea');
            upper.classList.add('scoreArea');
        }

   });
 //  console.log(questionCount);
    loadQuestion();