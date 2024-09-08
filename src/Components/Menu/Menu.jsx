
import { Link } from 'react-router-dom'
import MenuItme from '../MenuItem/MenuItme'
const Menu = () => {
  return (
    <div>
      <Link to={'/HTML'}>
      <MenuItme >HTML</MenuItme>
      </Link>
      <Link to={'/CSS'}>
      <MenuItme >CSS</MenuItme>
      </Link>
      <Link to={'/JavaScript'}>
      <MenuItme >JavaScript</MenuItme>
      </Link>
      <Link to={'/ReactQuiz'}>
      <MenuItme >React</MenuItme>
      </Link>
    </div>
  )
}

export default Menu
