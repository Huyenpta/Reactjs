import React from "react";

function Footer() {
  return (
    <footer className="text-center text-lg-start bg-light text-muted mt-5">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
      </section>
      <section>
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3"></i>F2505T
              </h6>
              <p>Website giới thiệu bộ sưu tập trà Việt Nam</p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Sản phẩm</h6>
              <p><a href="#!" className="text-reset">Trà ô long</a></p>
              <p><a href="#!" className="text-reset">Trà hoa quả</a></p>
              <p><a href="#!" className="text-reset">Trà sen</a></p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Về chúng tôi</h6>
              <p><a href="#!" className="text-reset">Giới thiệu</a></p>
              <p><a href="#!" className="text-reset">Công bố sản phẩm</a></p>
              <p><a href="#!" className="text-reset">Công thức</a></p>
              <p><a href="#!" className="text-reset">Tuyển dụng</a></p>
              <p><a href="#!" className="text-reset">Tin tức</a></p>
              <p><a href="#!" className="text-reset">Liên hệ</a></p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Thông tin liên hệ</h6>
              <p><i className="fas fa-home me-3"></i> No.8, Ton That Thuyet, My Dinh, Ha Noi</p>
              <p><i className="fas fa-envelope me-3"></i> info@gmail.com</p>
              <p><i className="fas fa-phone me-3"></i> +84 234 567 88</p>
              <p><i className="fas fa-print me-3"></i> +84 985 542 89</p>
            </div>
          </div>
        </div>
      </section>
      <div className="text-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
        © 2025 Copyright: <a className="text-reset fw-bold" href="#">F2505E</a>
      </div>
    </footer>
  );
}

export default Footer;