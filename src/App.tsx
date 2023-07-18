import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CreatePage,HomePage } from './pages';
function App() {
  return (
    <div className='wrapper'>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/create' element={<CreatePage />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
