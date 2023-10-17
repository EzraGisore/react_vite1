import About from "./components/About.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  return (
    

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<About/>}/>

    </Routes>
    </BrowserRouter>

    
  
  )
}

export default App
