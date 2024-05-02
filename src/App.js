import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import About from "./Pages/About";
 <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Helvetica+Neue+LT+W1G:ital,wght@0,400;1,400&display=swap" />
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
