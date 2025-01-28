
import './App.css';
import Studentlist from './Studentlist';
import Addstudent from './Addstudent';
import EditData from './EditData';
import Register from './Auth/Register';
import Login from './Auth/Login';

import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

function App() {
  
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/list" element={<Studentlist />}/>
          <Route path="/add" element={<Addstudent/>}/>
          <Route path="/edit/:stdid" element={<EditData/>}/>
          </Routes>
      </Router>      
    </div>

  );
}

export default App;
