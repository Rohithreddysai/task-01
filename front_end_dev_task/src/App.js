
import './App.css';
import Staff from './staff/Staff';
import Course from './Course/Course';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Student_page from './student_page/student_page';
import Navbar from './navbar/navbar';
function App() {
  return (
    <div className="App">
       <BrowserRouter>
      <Routes>
        <Route path="/nav" element={ <Navbar/>}/>
        <Route path="/student" element={ <Student_page/>}/>
          <Route path="/" element={<Course/>} />
          <Route path="/staff" element={<Staff />} />
      </Routes>
    </BrowserRouter>
     
    </div>
  );
}

export default App;
