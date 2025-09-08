import { useParams, Link } from "react-router-dom";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import newsData from "../data/News"; // 👈 import danh sách tin

function NewsDetail() {
  const { id } = useParams(); // lấy id từ URL
  const article = newsData.find((n) => n.id === parseInt(id));

  if (!article) {
    return (
      <Container className="py-5">
        <h2>Bài viết không tồn tại</h2>
        <Link to="/news" className="btn btn-outline-success mt-3">
          Quay lại Tin tức
        </Link>
      </Container>
    );
  }

  return (
    <Container className="py-5">
      <Row>
        <Col lg={8} className="mx-auto">
          <h1 className="mb-3 text-success fw-bold">{article.title}</h1>
          <p className="text-muted">
            {article.date} • Tác giả: {article.author}
          </p>
          <Image
            src={article.image}
            alt={article.title}
            fluid
            rounded
            className="mb-4 shadow"
          />
          <p className="fs-5 text-start" style={{ lineHeight: "1.8" }}>
            {article.content}
          </p>

          <div className="d-flex justify-content-between mt-4">
            <Link to="/news" className="btn btn-outline-success">
              ← Quay lại Tin tức
            </Link>
            <Button variant="success">Chia sẻ</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default NewsDetail;
