import About from "./components/About.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import Not from "./components/NotFound.jsx";
import NavBar from "./components/Nav.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "./components/Form.jsx";
import Users from "./components/Users.jsx";
import Tasks from "./components/Task.jsx";

function App() {
  return (
    <BrowserRouter>
      <NavBar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/form" element={<Form />} />
          <Route path="/users" element={<Users />} />
          <Route path="/tasks" element={<Tasks />}/>
          <Route path="*" element={<Not />} />
        </Routes>
      </NavBar>
    </BrowserRouter>
  );
}

export default App;
