import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Nav from './components/Nav';
import {Fragment} from 'react';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    
      <div className="App">



        <Main></Main>
        <Footer></Footer>
      </div>
  );
}

export default App;
