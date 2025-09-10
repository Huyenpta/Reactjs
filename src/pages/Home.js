import Banner from "../components/Banner";
import Product from "../components/Product";
import SPBanChay from "../components/SPBanChay";

function Home() {
    return (
        <>
            <Banner />
            <div className="container">
                <Product />
                <SPBanChay />
            </div>
        </>
    );
}

export default Home;