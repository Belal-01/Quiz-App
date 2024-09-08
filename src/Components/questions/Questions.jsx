import React, { useEffect,useState, useId } from 'react'
import Question from '../question/Question'
import { useDispatch, useSelector } from 'react-redux'
import { clickSubmit } from './SubmitAnswers'

const Questions = (props) => {
  const [AnsweredQuestionsState,setAnsweredQuestionsState] = useState(0)
  const [showerrorMessage,setShowErrorMessage] = useState(false)
  const [submit ,setSubmit] = useState(false)
  const questionsAnsweredNum =  useSelector((state)=>state.questions.numberOfQuestions)
  const questionsAnsweredRight = useSelector((state)=>state.questions.numberOfRightAnsweredQuestion)
  const submitStore = useSelector((state)=>state.submit.submit)
 
useEffect(()=>{
  setSubmit(submitStore);
},[submitStore])
  useEffect(()=>{
    setAnsweredQuestionsState(prev=>prev+1)
  },[questionsAnsweredNum])
  useEffect(()=>{
    setAnsweredQuestionsState(0);
  },[])
 
  const dispatch = useDispatch()
  const allQuestions = props.Questions.map((ques)=>{
    const id = useId();
  return <Question {...ques} key = {id}/>
  })

  


  return (
    <>
    <div className='questions'>
     {allQuestions}   
    </div>
    <button className='submit-button' onClick={()=>{
      if(AnsweredQuestionsState===20){
        dispatch(clickSubmit())
      }else{
        setShowErrorMessage(true)
        setTimeout(() => {
         setShowErrorMessage(false)
        }, 2000);
        
      }  
    }}>Submit</button>
    <span>{showerrorMessage&&`Still ${20-AnsweredQuestionsState} questions not answered`}</span>


     
   <h3>Answered Qeustions :{AnsweredQuestionsState}/20</h3> 
   <h3>{submit &&` Right answered :${questionsAnsweredRight}/20`} </h3>
    </>
  )
}

export default Questions
