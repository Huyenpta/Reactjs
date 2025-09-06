function Product() {
  const products = [
    { img: "/images/Tea1.jpg", title: "Trà Oolong", desc: "Bộ Sưu Tập Trà Cổ Ancient Tea - Trải Nghiệm Khám Phá Đặc Trưng Văn Hóa Việt Nam" },
    { img: "/images/Tea2.jpg", title: "Trà đen", desc: "Trà Nguyên bản - Giữ trọn nguyên bản, đậm vị từng khoảnh khắc." },
    { img: "/images/Tea3.jpg", title: "Trà xanh", desc: "Bộ Sưu Tập Trà Healthy Tea - Trong lành từ bên trong!" }
  ];

  return (
    <section className="content my-5">
      <div className="container">
        <h2 className="text-center text-success mb-4 mt-4">SẢN PHẨM BÁN CHẠY</h2>
        <div className="row g-4 justify-content-center">
          {products.map((p, idx) => (
            <div className="col-md-4 col-sm-6" key={idx}>
              <div className="card h-100 text-center">
                <img src={p.img} className="card-img-top" alt={p.title} />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{p.title}</h5>
                  <p className="card-text">{p.desc}</p>
                  <a href="#" className="btn btn-success mt-auto">Xem thêm</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Product;
