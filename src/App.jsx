import { Routes, Route } from "react-router"
import Home from "./pages/Home"
import About from "./pages/About"
import Error from "./component/error"
import Contact from "./pages/contact"
function App() {
  return (
    < Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<About />} />
      <Route path="/*" element={<Error />} />
      <Route path="/contact" element={<Contact />} />


    </Routes>
  )
}
export default App