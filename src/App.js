import "./App.css" 
import { BrowserRouter as Router,  Route, Routes, BrowserRouter } from "react-router-dom"
import About from "./components/about/About"
import CourseHome from "./components/allcourses/CourseHome"
import Team from "./components/team/Team"
import Pricing from "./components/pricing/Pricing"
import Blog from "./components/blog/Blog"
import Contact from "./components/contact/Contact" 
import Home from "./components/home/Home"
import Header from "./components/common/header/Header"
import Footer from "./components/common/footer/Footer"
function App() {
  return (
    <>
     
 
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} /> {/* Corrected line */}
          <Route path="/courses" element={<CourseHome />} /> {/* Corrected line */}
          <Route path="/team" element={<Team />} /> {/* Corrected line */}
          <Route path="/pricing" element={<Pricing />} /> {/* Corrected line */}
          <Route path="/journal" element={<Blog />} /> {/* Corrected line */}
          <Route path="/contact" element={<Contact />} /> {/* Corrected line */}
        </Routes>
        <Footer />
      </Router>
 
    </>
  )
}

export default App
