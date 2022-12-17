import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';
import Navbar from './Components/navbar/Navbar';
import Home from './Pages/Home';

function App() {
  return (
    <Fragment>
      <Navbar />
      <Home />
    </Fragment>
  );
}

export default App;
