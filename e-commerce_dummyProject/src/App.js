import FormContainer from "./components/FormContainer";
import {Routes,Route} from 'react-router-dom'
import { BrowserRouter } from "react-router-dom";
import Home from "./components/Home.jsx";
import ProductDetails from "./components/ProductDetails.jsx";
import Cart from "./components/Cart.jsx";
import Success from "./components/Success.jsx";

function App() {

  return (
    <>
    <BrowserRouter>

    <Routes>
    
    <Route path="/" element={<FormContainer />}/>
    <Route path="/home" element={ <Home/>} />
    <Route path="/product/:productname/:id" element = {<ProductDetails/>}/>
    <Route path="/cart" element={<Cart />} />
    <Route path="/success_page" element={<Success />} />
  
    </Routes>
    </BrowserRouter>
 

</>
  );
}

export default App;
