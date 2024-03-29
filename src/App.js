import './App.css'
import Home from './Home/Home'
import Navbar from './Navbar/Navbar'

function App() {
  return (
    <div className='App'>
      <Navbar />
      <div className='content'>
        <Home />
      </div>
    </div>
  )
}

export default App
