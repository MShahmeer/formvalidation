import logo from './logo.svg';
import './App.css';
import AddUser from "./components/form"
import SubmitUser from "./components/formsubmit"
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element ={<AddUser/>}></Route>
        <Route path='/all' element ={<SubmitUser/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
