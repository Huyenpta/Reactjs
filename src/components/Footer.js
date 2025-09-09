import { Link } from "react-router-dom"; // 👈 import Link từ react-router-dom

function Footer() {
  return (
    <footer className="text-center text-lg-start bg-light text-muted mt-5">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"></section>

      <section>
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            {/* Giới thiệu */}
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3"></i>F2505T
              </h6>
              <p>Website giới thiệu bộ sưu tập trà Việt Nam</p>
            </div>

            {/* Sản phẩm */}
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Sản phẩm</h6>
              <p><Link to="/category/oolong" className="text-reset">Trà Oolong</Link></p>
              <p><Link to="/category/den" className="text-reset">Trà Đen</Link></p>
              <p><Link to="/category/xanh" className="text-reset">Trà Xanh</Link></p>
            </div>

            {/* Về chúng tôi */}
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Về chúng tôi</h6>
              <p><Link to="/introduce" className="text-reset">Giới thiệu</Link></p>
              <p><Link to="/news" className="text-reset">Tin tức</Link></p>
              <p><Link to="/contact" className="text-reset">Liên hệ</Link></p>
            </div>

            {/* Thông tin liên hệ */}
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Thông tin liên hệ</h6>
              <p><i className="fas fa-home me-3"></i> No.8, Ton That Thuyet, My Dinh, Ha Noi</p>
              <p><i className="fas fa-envelope me-3"></i> info@gmail.com</p>
              <p><i className="fas fa-phone me-3"></i> +84 234 567 88</p>
            </div>
          </div>
        </div>
      </section>

      {/* Copyright */}
      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2025 Copyright:{" "}
        <Link className="text-reset fw-bold" to="/">
          F2505T
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
