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
    <section className="container content my-5">
      <h2 className="text-center text-success">Tin tức & Khuyến mãi</h2>
      <p className="text-center text-muted">Tin tức & Khuyến mãi của cửa hàng</p>

      <div className="d-flex justify-content-center flex-wrap g-4">
        {news.map((n, idx) => (
          <div className="col-md-3 col-sm-6 p-2 mx-auto" key={idx}>
            <div className="card h-100">
              <img src={n.img} className="card-img-top" alt={n.title} />
              <div className="card-body">
                <p className="card-text text-center">{n.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default News;