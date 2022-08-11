import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Home from './pages/Home';

export class App extends React.Component {
  render(){
    return (
      <Router>
        {/* navigation bar goes here */}


        {/* pages rendered under the navbar */}
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </Router>
    )
  }
}

export default App;