import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Public from "./Components/Public";
import Courses from "./Components/Courses/Courses";
import Teachers from "./Components/Teachers/Teachers";
import Nav from "./Layout/Nav";

function App() {
  return (
    <Router>
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Public />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/teachers" element={<Teachers />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
