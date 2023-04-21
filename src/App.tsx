import './App.css'
import ChooseAsset from './components/ChooseAsset'
import CreateLot from './components/CreateLot'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CreateLot />} />
        <Route path="/ChooseAsset" element={<ChooseAsset />} />
      </Routes>
    </Router>
  )
}

export default App
