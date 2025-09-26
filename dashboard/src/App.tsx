
// App.tsx
import './App.css'
import Menu from './components/Menu'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className='maincontainer'>
      <Menu/>
      <div className='content'>
        <Outlet/>
      </div>
    </div>
  )
}

export default App
