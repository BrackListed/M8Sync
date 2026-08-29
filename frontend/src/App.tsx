import { BrowserRouter, Routes, Route } from "react-router"
import { Home } from "./pages/Home"
import { DispatchBoard } from "./pages/DispatchBoard"

export default function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path = "/" element={<Home/>}></Route>
        <Route path = "/dispatch-board" element={<DispatchBoard/>}/>
      </Routes>
    </BrowserRouter>
  )
}