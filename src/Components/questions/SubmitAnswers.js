import { createSlice } from "@reduxjs/toolkit"



const initialState = {
  submit :false
}
const submitSlice = createSlice({
  name:'submitAnswers',
  initialState,
  reducers:{
    clickSubmit:(state)=>{
      state.submit = true;
    }
  }
})

///all questions answered state


const answeredQuestion = {
  numberOfQuestions : 0,
  numberOfRightAnsweredQuestion:0,
}
const questionSlic = createSlice({
  name :'questionAnswered',
  initialState:answeredQuestion,
  reducers:{
    questionAnswered:(state)=>{
      state.numberOfQuestions++
    },
    questionRightAnswered:(state)=>{
      state.numberOfRightAnsweredQuestion++
    }
  }
})

export default submitSlice.reducer
export const clickSubmit = submitSlice.actions.clickSubmit


export const questionsReducer = questionSlic.reducer
export const questionAnswered = questionSlic.actions.questionAnswered
export const questionRightAnswered = questionSlic.actions.questionRightAnswered