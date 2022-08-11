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

export class App extends React.Component {
  render(){
    return (
      <Router>
        {/* navigation bar goes here */}
        <nav className='navbar navbar-expand bg-dark'>
          <div className='container'>
            <a className='navbar-brand text-bg-dark' href='#'>Ronans of the Western Alchemy</a>
            <ul className='navbar-nav me-auto'>
              <li className='nav-item'>
                <a className='nav-link active text-bg-dark' href='#'>Docs</a>
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