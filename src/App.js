import Product from "./Pages/Product";
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Modal} from "react-bootstrap";


//import ProductTable from "./components/ProductPage/ProductTable";

function App() {
  return (
        <div className="App">   
      <Product/>
      <Modal/>    
    </div>
  );
}

export default App;
