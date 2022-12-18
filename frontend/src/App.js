import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"

//pages & components
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import WorkoutUpdate from "./components/WorkoutUpdate"

function App() {
  const [isUpdating, setIsUpdating] = useState(1)

  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <div className='pages'>
          <Routes>
            <Route
              path='/'
              element={
                <Home isUpdating={isUpdating} setIsUpdating={setIsUpdating} />
              }
            ></Route>
            <Route
              path='/workout'
              element={<WorkoutUpdate isUpdating={isUpdating} />}
            ></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
