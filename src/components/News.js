function News() {
  const news = [
    { img: "/images/cam-vang-say-kho-300x300.webp", title: "Trà cam lát sấy khô" },
    { img: "/images/congot.jpg", title: "Trà cỏ ngọt" },
    { img: "/images/dongtrung.jpg", title: "Trà đông trùng" },
    { img: "/images/hoahong.jpg", title: "Trà hoa hồng" },
    { img: "/images/kytu.jpg", title: "Trà kỷ tử" },
    { img: "/images/longnhan.jpg", title: "Trà long nhãn" },
    { img: "/images/que.jpg", title: "Trà quế" },
    { img: "/images/taodo.jpg", title: "Trà táo đỏ" }
  ];

  return (
    <section className="content my-5">
      <div className="container">
        <h2 className="text-center text-success">SẢN PHẨM KHUYẾN MÃI</h2>
        <div className="row justify-content-center g-4">
          {news.map((n, idx) => (
            <div className="col-md-3 col-sm-6 p-2" key={idx}>
              <div className="card h-100">
                {/* Thêm class 'news-card-img' vào đây */}
                <img src={n.img} className="card-img-top news-card-img" alt={n.title} />
                <div className="card-body">
                  <p className="card-text text-center fw-bold">{n.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}

export default News;