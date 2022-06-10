import { BrowserRouter as Router , Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import Coinpage from './Pages/Coinpage'
import Homepage from './Pages/Homepage'

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/coins/:id" component={Coinpage} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
