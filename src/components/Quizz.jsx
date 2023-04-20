import { useState } from "react"
import QuizzCard from "./QuizzCard"
import QuizzResult from "./QuizzResult"
import quizzData from "../data/quizz.json"

export default function Quizz(){
const [showResult, setShowResult] = useState(false)
const quizzLength = quizzData.length
const [quizzId, setQuizzId] = useState(0)
const [score, setScore] = useState(0)

const handleAnswer = (isCorrect) => {
    if (isCorrect === true) setScore(score + 1)
    console.log({score})
    const newQuizId = quizzId + 1
    
    if (newQuizId < quizzLength)
    setQuizzId(newQuizId)
    else
    setShowResult(true)
}

const handleReset = () => {
    setShowResult(false)
    setScore(0)
    setQuizzId(0)
}

    return (
        <>
        {(showResult)
        ? (<QuizzResult 
            score={score}
            quizzLength={quizzLength}
            handleReset={handleReset}/>)
        : (<QuizzCard 
            quizzData={quizzData}
            quizzId={quizzId}
            quizzLength={quizzLength}
            handleAnswer={handleAnswer} />)
        }
       </>
    )
}