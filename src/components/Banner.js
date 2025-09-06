// src/components/Banner.js
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; // Đảm bảo bạn đã import Bootstrap CSS

function Banner() {
  return (
    <div className="banner-section">
      <Carousel fade className="w-100">
        {/* <Carousel.Item>
          <img className="d-block w-100" src="/images/tea1.png" alt="Slide 1" />
          <Carousel.Caption className="caption-left">
            <h3>Khám phá hương vị trà Việt</h3>
            <p>Mở đầu câu chuyện bằng một tách trà.</p>
          </Carousel.Caption>
        </Carousel.Item> */}

        <Carousel.Item>
          <img className="d-block w-100" src="/images/tea3.png" alt="Slide 2" />
          <Carousel.Caption className="custom-carousel-caption">
            <h3>Trà xanh tự nhiên</h3>
            <p>Sức khỏe từ thiên nhiên, vẻ đẹp từ bên trong.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Banner;