import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/js/dist/dropdown';
import Home from './pages/Home';
import './App.css'

export class App extends React.Component {
  render(){
    return (
      <Router>
        {/* navigation bar goes here */}
        <nav className='navbar navbar-expand fixed-top bg-dark'>
          <div className='container'>
            <a className='navbar-brand text-bg-dark' href='#'>Ronans of the Western Alchemy</a>
            <ul className='navbar-nav me-auto'>
              <li className='nav-item p-2'>
                <a className='nav-link my-link text-bg-dark' href='#'>OSCP</a>
              </li>
              <li className='nav-item p-2'>
                <a className='nav-link my-link text-bg-dark' href='#'>CEH</a>
              </li>
              <li className='nav-item p-2'>
                <a className='nav-link my-link text-bg-dark' href='#'>General Hacking</a>
              </li>
            </ul>
          </div>
        </nav>

        {/* pages rendered under the navbar */}
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </Router>
    )
  }
}

export default App;