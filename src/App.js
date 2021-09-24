import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Carousels from './components/Carousels';
import Products from './components/Products';

function App() {
  return (
    <div style={{ overflowX: "hidden"}}>
    <Header/>
    <Carousels/>
    <Products/>
    </div>
  );
}

export default App;
