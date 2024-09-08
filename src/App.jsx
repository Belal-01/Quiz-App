import React from 'react'
import Header from './Header'
import './App.css'
import {Routes,Route,BrowserRouter} from 'react-router-dom'


import Questions from './Components/questions/Questions'
import HTML from './Langauges/HTML'
import CSS from './Langauges/CSS'
import JavaScript from './Langauges/JavaScript'
import ReactComp from './Langauges/ReactComp'
import Menu from './Components/Menu/Menu'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Header/>

        <Routes>
          <Route path='/' element={<Menu/>}/>
          <Route path='/HTML' element={<HTML/>}/>
          <Route path='/CSS' element={<CSS/>}/>
          <Route path='/JavaScript' element={<JavaScript/>}/>
          <Route path='/ReactQuiz' element={<ReactComp/>}/>
        </Routes>
      

 

      </BrowserRouter>

      {/* <Questions/> */}
    </div>
  )
}

export default App
