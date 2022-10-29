import './App.css';
import { NavLink, Route, Routes } from 'react-router-dom';
import Nav from './components/nav.component';
import Home from './components/home.component';
import About from './components/about.component';
import Contact from './components/contact.component';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Nav/>}>\
        <Route path='/home' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
      </Route>
    </Routes>
  );
}

export default App;
