import React from 'react'
import Questions from '../Components/questions/Questions'
import questions from '../../public/data/Reactquestions'




const ReactComp = () => {
  return (
    <div>
      <Questions Questions = {questions}/>
    </div>
  )
}

export default ReactComp
