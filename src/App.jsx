import { Routes, Route } from "react-router"
import Home from "./pages/Home"
import About from "./pages/About"
import Error from "./component/error"
import Contact from "./pages/contact"
import Details from "./component/detailsCard"
function App() {
  return (
    < Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<About />} />
      <Route path="/*" element={<Error />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/details" element={<Details />} />



    </Routes>
  )
}
export default App