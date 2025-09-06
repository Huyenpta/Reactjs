import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; // Đảm bảo bạn đã import Bootstrap CSS

function BannerProduct() {
  return (
    <div className="banner-section">
      <Carousel fade className="w-100">
        <Carousel.Item>
          <img className="d-block w-100" src="/images/Banner-web-tea1.png" alt="Slide 1" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="/images/Banner-web-tea2.png" alt="Slide 2" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default BannerProduct;