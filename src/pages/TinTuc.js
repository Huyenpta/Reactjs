import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import News from "../data/News";

function TinTuc() {
    return (
        <Container className="my-4">
            <h1 className="mb-4 text-success text-center">Tin tức</h1>
            <Row>
                {News.map((item) => (
                    <Col md={4} key={item.id} className="mb-4">
                        <Card className="h-100 shadow-sm">
                            <Card.Img variant="top" src={item.image} alt={item.title} />
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">
                                    {new Date(item.date).toLocaleDateString("vi-VN")}
                                </Card.Subtitle>
                                <Card.Text>{item.desc}</Card.Text>
                                <Button
                                    as={Link}
                                    to={`/news/${item.id}`}  // 👈 link tới trang chi tiết
                                    variant="success"
                                    size="sm"
                                >
                                    Xem chi tiết
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default TinTuc;
