import './App.css'
import Header from './Header'
import { Outlet } from 'react-router'

function App() {

  return (
    <>
      <div className="App">
        <Header />
        <Outlet/>
      </div>
    </>
  )
}

export default App
