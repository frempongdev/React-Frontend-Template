
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import BackToTopButton from './components/BackToTop'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
        </Routes>
        <BackToTopButton />
      </BrowserRouter>
    </>
  )
}

export default App
