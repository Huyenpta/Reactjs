import { Routes } from "react-router-dom";
import { Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Cart from "./pages/Cart";
import NavDrop from "./components/Nav";

function App() {
  return (
    <div className="App">
      <NavDrop>
      </NavDrop>
      <main>
        <div className="container">
          <Routes>
            <Route path="" Component={Home} />
            <Route path="/category" Component={Category}/>
            <Route path="/cart" Component={Cart}/>
          </Routes>
        </div>
      </main>
    </div>
  )
}

export default App;
