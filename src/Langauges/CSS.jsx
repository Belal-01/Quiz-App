import React from 'react'
import Questions from '../Components/questions/Questions'
import questions from '../../public/data/CssQuestions'

const CSS = () => {
  return (
    <div>
      <Questions Questions={questions}/>
    </div>
  )
}

export default CSS
