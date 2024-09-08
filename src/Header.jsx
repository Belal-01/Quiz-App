import React from 'react'
import { useLocation } from 'react-router'

const Header = () => {
  const Location = useLocation()
  let title = ''
  if(Location.pathname === '/')
    title = 'Web Development'
  else if(Location.pathname === '/HTML')
    title = 'HTML'
  else if(Location.pathname === '/CSS')
    title = 'CSS'
  else if(Location.pathname === '/JavaScript')
    title = 'JavaScript'
  else
   title = 'React'
  return (
    <nav className='header'>
      <h1>Let's Test Your Skills In {title}</h1>     
    </nav>
  )
}

export default Header
