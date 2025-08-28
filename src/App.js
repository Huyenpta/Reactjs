import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import ProductList from "./components/ProductList";
import News from "./components/News";
import Footer from "./components/Footer";

function App() {
  return (
    <div id="home">
      <Header />
      <NavBar />
      <Banner />
      <main className="section main">
        <ProductList />
        <News />
      </main>
      <Footer />
    </div>
  );
}

export default App;