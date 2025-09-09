import { useParams, Link } from "react-router-dom";
import { Container, Image, Card, Button } from "react-bootstrap";
import News from "../data/News";

function NewsDetail() {
  const { id } = useParams();
  const newsItem = News.find((n) => n.id === parseInt(id));

  if (!newsItem)
    return (
      <Container className="py-5">
        <p>Tin tức không tồn tại</p>
      </Container>
    );

  // Split content theo 2 dòng trống để tách paragraph, giữ nguyên dấu .
  const paragraphs = newsItem.content.split(/\n\s*\n/).filter(p => p.trim() !== "");

  return (
    <Container className="py-5">
      <h1 className="mb-2">{newsItem.title}</h1>
      <p className="text-muted mb-3">
        {newsItem.date} - {newsItem.author}
      </p>
      <Image src={newsItem.image} fluid className="mb-4 rounded shadow-sm" />

      <Card className="p-4 shadow-sm">
        {paragraphs.map((para, index) => {
          const lines = para.split("\n").filter(line => line.trim() !== "");
          return (
            <div key={index} style={{ marginBottom: "1rem" }}>
              {lines.map((line, i) => {
                const trimmed = line.trim();
                // Nếu dòng bắt đầu bằng "-", hiển thị bullet
                if (trimmed.startsWith("-")) {
                  return (
                    <li
                      key={i}
                      style={{
                        textAlign: "left",
                        marginBottom: "0.5rem",
                        marginLeft: "1.5rem",
                      }}
                    >
                      {trimmed.slice(1).trim()}
                    </li>
                  );
                }
                // Dòng bình thường
                return (
                  <p
                    key={i}
                    style={{ textAlign: "left", marginBottom: "0.8rem" }}
                  >
                    {trimmed}
                  </p>
                );
              })}
            </div>
          );
        })}
      </Card>

      <div className="mt-4">
        <Button as={Link} to="/news" variant="secondary">
          ← Quay lại danh sách tin
        </Button>
      </div>
    </Container>
  );
}

export default NewsDetail;
