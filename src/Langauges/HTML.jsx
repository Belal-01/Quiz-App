import React from 'react'
import Questions from '../Components/questions/Questions'
import htmlQuestions from '../../public/data/htmlQuestions'

const HTML = () => {
  return (
    <div id='HTML'>
      <Questions Questions={htmlQuestions}/>
    </div>
  )
}

export default HTML
