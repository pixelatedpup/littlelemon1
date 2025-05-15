import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Nav from './components/Nav';
import {Fragment} from 'react';


function App() {
  return (
    <Fragment className="App">

      <div className='heading'>
        <Header></Header>
        <Nav></Nav>
      </div>
      
      <Main></Main>
      <Footer></Footer>
    </Fragment>
  );
}

export default App;
