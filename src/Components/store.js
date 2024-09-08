import { configureStore } from "@reduxjs/toolkit";
import submitReducer from './questions/SubmitAnswers'
import { questionsReducer } from "./questions/SubmitAnswers";





export const store = configureStore({
reducer:{
  questions:questionsReducer,
  submit:submitReducer
}
})