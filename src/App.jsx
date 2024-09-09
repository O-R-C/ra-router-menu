import { Outlet } from 'react-router-dom'
import Menu from './components/Menu/Menu'

function App() {
  return (
    <>
      <Menu />
      <div className='page'>
        <Outlet />
      </div>
    </>
  )
}

export default App
