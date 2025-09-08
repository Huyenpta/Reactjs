import { Link } from "react-router-dom";
function Product() {
  const products = [
    { img: "/images/Tea1.jpg", title: "Trà Oolong", desc: "Bộ Sưu Tập Trà Oolong – Khám Phá Nét Đẹp Văn Hóa Truyền Thống.", link: "/oolong" },
    { img: "/images/Tea2.jpg", title: "Trà đen", desc: "Bộ Sưu Tập Trà Đen - Giữ trọn nguyên bản, đậm vị từng khoảnh khắc.",link: "/den" },
    { img: "/images/Tea3.jpg", title: "Trà xanh", desc: "Bộ Sưu Tập Trà Xanh - Trong lành từ bên trong!", link: "/xanh" }
  ];

  return (
    <section className="content my-5">
      <div className="container">
        <h2 className="text-center text-success mb-4 mt-4">BỘ SƯU TẬP TRÀ</h2>
        <div className="row g-4 justify-content-center">
          {products.map((p, idx) => (
            <div className="col-md-4 col-sm-6" key={idx}>
              <div className="card h-100 text-center">
                <img src={p.img} className="card-img-top" alt={p.title} />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{p.title}</h5>
                  <p className="card-text">{p.desc}</p>
                  <Link to={p.link} className="btn btn-success mt-auto">Xem thêm</Link>
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
