
import { memo, useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { questionRightAnswered } from "../questions/SubmitAnswers";
import { FaCheck } from "react-icons/fa";




const AnswerElement = (props) => {
  const [answerColor,setAnswerColor] = useState({});
  const [itsARightAnswer,setItsARightAnswer] = useState(false);
  const dispatch = useDispatch()
 useEffect(()=>{
  if(props.click&&!submitted.submit)
      setAnswerColor({ 
        backgroundColor:'yellow',
        
      })
  else
      setAnswerColor({})
    
 },[props.click])
 const submitted = useSelector((state)=>state.submit)

 useEffect(()=>{
  if(submitted.submit&&props.answer.state){
    setAnswerColor({ 
      backgroundColor:'rgb(39, 190, 39)',
      color:'white'
      
    })
  } 
  if(submitted.submit&&props.click&&!props.answer.state){
    setAnswerColor({ 
      backgroundColor:'red',
      color:'white'      
    }) 
  }
  if(submitted.submit&&props.answer.state&&props.click){
    setAnswerColor({ 
      backgroundColor:'green',
      color:'white'     
    })
    setItsARightAnswer(true);
    dispatch(questionRightAnswered())
  }
 },[submitted])


//  const Styles = { 
//   backgroundColor:answerColor,
  
// }



  return (
    <>
    <div className="answer-container">
      <span>{props.answer.key} _ </span>
      <button style={answerColor} className='answer' onClick={()=>{
        props.handleClick(props.answer.key)
      }}>
      {props.answer.text}
      { itsARightAnswer&&<span 
      style={{color:'yellow',
              paddingLeft:'5px'
      }}><FaCheck/></span>}
      </button>
    </div> 
    </>
  )
}

export default memo(AnswerElement) 
