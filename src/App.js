// App.js
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/about/About";
import CourseHome from "./components/allcourses/CourseHome";
import Team from "./components/team/Team";
import Pricing from "./components/pricing/Pricing";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";
import LoginPage from "./components/loginpage/LoginPage";
import Layout from './Layout'; // Import the Layout component
import RegisterPage from "./components/loginpage/RegisterPage";

function App() {
  return (
    <>
      <Router basename="/placementcollege"> {/* Add the basename here */}
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} /> {/* Login page outside the Layout */}
            {/* Login page outside the Layout */}
          <Route path="/*" element={<Layout />}> {/* All other routes will use the Layout */}
            <Route index element={<Home />} /> {/* Index route for / */}
            <Route path="about" element={<About />} />
            <Route path="courses" element={<CourseHome />} />
            <Route path="team" element={<Team />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="journal" element={<Blog />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;