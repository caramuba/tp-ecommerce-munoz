import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import Header from "./components/Header";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import AboutUs from "./pages/AboutUs";
import NoEncontrada from "./pages/NoEncontrada";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-green-200 text-gray-900 flex flex-col">
        <Header/>
        <main className="flex-1 max-w-6x1 mx-auto w-full px-4 py-4">
          <Routes>  
            <Route path="/" element={<Home/>}/>
            <Route path="/products" element={<Products />}/>
            <Route path="/aboutUs" element={<AboutUs />}/>
            <Route path="*" element={<NoEncontrada />}/>
          </Routes>
        </main>
        <Cart />
        <Footer />
      </div>
    </Router>
  )
}

export default App;