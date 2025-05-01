import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Nav from './components/Nav';


function App() {
  return (
    <Fragment className="App">

      <Header></Header>
      <Nav></Nav>
      <Main></Main>
      <Footer></Footer>
    </Fragment>
  );
}

export default App;
