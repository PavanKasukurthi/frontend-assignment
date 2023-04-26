import './App.css'
import ChooseAsset from './components/ChooseAsset'
import CreateLot from './components/CreateLot'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import TakePosition from './components/TakePosition'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CreateLot />} />
        <Route path="/ChooseAsset" element={<ChooseAsset />} />
        <Route path="/TakePosition" element={<TakePosition />} />
      </Routes>
    </Router>
  )
}

export default App
