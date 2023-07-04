// import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home.js';
import Contact from './Components/Contact/Contact.js';
import About from './Components/About/About.js';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <h1>hello</h1>
      
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home/>}>  </Route> 
          <Route exact path='/about' element={<About/>}>  </Route>
          <Route exact path='/contact' element={<Contact/>}> </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
