import React, { useCallback, useEffect,memo} from 'react'
import { useState } from 'react';

import AnswerElement from '../answer/AnswerElement'
import { useDispatch } from 'react-redux';
import { questionAnswered } from '../questions/SubmitAnswers';


const Question = (props) => {

  const [clicks,setClicks] = useState(
    [
      false,
      false,
      false,
      false
  ]);
  const [questionClicked,setQuestionClicked] = useState(false);
  const dispatch  = useDispatch()
  useEffect(()=>{
    if(questionClicked){
      dispatch(questionAnswered())
    }
  },[questionClicked])


 const handleClick = useCallback((key)=>{
    let newArray  = [false ,false ,false ,false];
    if(key==='A')
      newArray[0] = true
    else if(key==='B')
      newArray[1] = true
    else if (key==='C')
      newArray[2]= true
    else 
      newArray[3] = true   
      setClicks(newArray)

      setQuestionClicked(true);
   
 },[])



 //console.log(clicks[0])


  return (
    <div className='question'>
      <h2>{props.question}</h2>
      <div className="answers">
     <AnswerElement answer={props.answers[0]} key = {props.answers[0].key} handleClick={handleClick} click={clicks[0]}  />
     <AnswerElement answer={props.answers[1]} key = {props.answers[1].key} handleClick={handleClick} click={clicks[1]} />
     <AnswerElement answer={props.answers[2]} key = {props.answers[2].key} handleClick={handleClick} click={clicks[2]} />
     <AnswerElement answer={props.answers[3]} key = {props.answers[3].key} handleClick={handleClick} click={clicks[3]} />       
      </div>
    </div>
  )
}

export default memo(Question) 
