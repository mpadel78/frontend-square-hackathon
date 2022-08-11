import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Welcome from "./components/Welcome";
import CreateClass from "./components/CreateClass";
import ViewMyClass from "./components/ViewMyClass";

function App() {
  return (
    <>
      <div style={{ height: "100vh" }}>
        <Router>
          <Routes>
            <Route path="/" element={<Welcome />}></Route>
            <Route path="/create" element={<CreateClass />} />
            <Route path="/view" element={<ViewMyClass />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
