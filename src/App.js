import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import CoursePageHome from "./pages/coursePageHome";
import Layout from "./pages/layout";
import FsdPage from "./pages/fsdPage";
import DataSciencePage from "./pages/dataSciencePage";
import CyberSecurityPage from "./pages/cyberSecurityPage";
import CareerPage from "./pages/careerPage";

function App() {
  return (
    <>
      
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<CoursePageHome />} />
            <Route path="/fsd" element={<FsdPage />} />
            <Route path="/dataScience" element={<DataSciencePage />} />
            <Route path="/cyberSecurity" element={<CyberSecurityPage />} />
            <Route path="/career" element={<CareerPage />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
