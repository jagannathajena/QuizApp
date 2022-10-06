import { useState } from "react";
function App(){
  const questions =[
    {
      questionsText:
      "which is the javascrit framework used to create single page application ?",
      answerOption: [
        {answerText: "NODE JS", isCorrect: false },
        {answerText: "REACT JS",isCorrect: true },
        {answerText: "EXPRESS JS",isCorrect: false},
        {answerText: "MONGO DB",isCorrect: false},
      ],
    },
    {
      questionsText: "Which among these is the main framewok of the Node js ?",
      answerOption: [
        {answerText: "REACT JS", isCorrect: false },
        {answerText: "MONGO DB", isCorrect: false },
        {answerText: "ANGULAR JS", isCorrect: false },
        {answerText: "EXPRESS JS", isCorrect: true },
      ],
    },
    {
      questionsText: "Rwact js developed by ?",
      answerOption: [
        {answerText: "INSTAGRANM", isCorrect: false },
        {answerText: "FACEBOOK", isCorrect: false },
        {answerText: "TWITER", isCorrect: false },
        {answerText: "WHATSAPP", isCorrect: false },
      ],
    },
    {
      questionsText:"What is React js ?",
      answerOption:[
        {answerOption: "SERVER SIDE FRAMEWORK",isCorrect: false },
        {answerText: "USER-INTERFACE-FRAMEWORK", isCorrect: true },
        {answerText: "I/O", isCorrect: false },
        {answerOption: "VIRTUAL DOM", isCorrect: false },
      ],
    },
    {
      questionsText: "Who is Created react js ?",
      answerOption:[
        {answerText: "JORDON MILKE", isCorrect: false },
        {answerOption: "JORDON WLKE", isCorrect: true },
        {answerText: "TIM BERNERS LEE", isCorrect: false },
        {answerText: "JORDEN LEE", isCorrect: false},
      ],
    },
    {
      questionsText: "In Which Language is React js written ?",
      answerOption:[
        {answerText: "PYTHON", isCorrect: false },
        {answerOption: "JAVASCRIPT", isCorrect: true },
        {answerText: "JAVA", isCorrect: false },
        {answerText: "PHP", isCorrect: false },
      ],
    },
    {
      questionsText: "Identify The Command used to create a React app ?",
      answerOption:[
        {answerText: "npm-install create-react-app", isCorrect: false },
        {answerOption: "npm-install-g create-react-app", isCorrect: true },
        {answerText: "install-g crate-react-app", isCorrect: false },
        {answerText: "None of the above", isCorrect: false },
      ],
    },
    {
      questionsText: "Which one is this MERN-STACK database ?",
      answerOption:[
        {answerText: "MONGO DB", isCorrect: true },
        {answerOption: "EXPRESS JS", isCorrect: false },
        {answerText: "REACT JS", isCorrect: false },
        {answerText: "NODE JS", isCorrect: false },
      ],
    },
    
    
  ]
  const[currentQuestion,setCurrentQuestion]=useState(0);
  const[showScore,setShowScore]=useState(false);
  const[score,setScore]=useState(0);
  const handle=(isCorrect)=>
  {
    if(isCorrect){
      setScore(score+1);
    }
    const nextQuestion=currentQuestion+1;
    if(nextQuestion<questions.length){
      setCurrentQuestion(nextQuestion);
    }
    else{
      setShowScore(true);
    }
  }
  return(
    <div className="quiz">
      {showScore ?(
        <div className="score-section">
          You have scored{score} out of{questions.length}!!!
      
    </div>
      ):(
        <>
        <div className="queston-section">
          <span>Question{currentQuestion +1} </span>/{questions.length}</div>
          <div>{questions[currentQuestion].questionsText}</div>
            <div className="answer-section">
              {questions[currentQuestion].answerOption.map((answerOption)=>(
                <button onClick={() =>handle(answerOption.isCorrect)}>{answerOption.answerText}</button>
              ))}
            </div>
        
        </>
      )}
  
  </div>

  )



}
export default App;