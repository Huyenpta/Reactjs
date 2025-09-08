import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

function Contact() {
    return (
        <Container className="my-5">
            <h1 className="mb-4 text-success text-start">Liên hệ</h1>
            <Row>
                {/* Thông tin liên hệ */}
                <Col md={5} className="mb-4">
                    <Card className="p-4 shadow-sm h-100">
                        <h4 className="mb-3">Thông tin liên hệ</h4>
                        <p><FaMapMarkerAlt className="me-2 text-success" /> No.8, Ton That Thuyet, My Dinh, Ha Noi</p>
                        <p><FaPhone className="me-2 text-success" /> +84 234 567 88</p>
                        <p><FaEnvelope className="me-2 text-success" /> info@gmail.com</p>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.102750904703!2d105.78331569999999!3d21.0285743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454b3285df81f%3A0x97be82a66bbe646b!2sDetech%20Building!5e0!3m2!1svi!2s!4v1757355051667!5m2!1svi!2s"
                            width="100%"
                            height="300"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </Card>
                </Col>

                {/* Form liên hệ */}
                <Col md={7}>
                    <Card className="p-4 shadow-sm">
                        <h4 className="mb-3">Gửi tin nhắn cho chúng tôi</h4>
                        <Form>
                            <Form.Group className="text-start mb-3" controlId="formName">
                                <Form.Label>Họ và tên</Form.Label>
                                <Form.Control type="text" placeholder="Nhập họ tên của bạn" />
                            </Form.Group>

                            <Form.Group className="text-start mb-3" controlId="formEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Nhập email của bạn" />
                            </Form.Group>

                            <Form.Group className="text-start mb-3" controlId="formMessage">
                                <Form.Label>Nội dung</Form.Label>
                                <Form.Control as="textarea" rows={5} placeholder="Nhập tin nhắn..." />
                            </Form.Group>

                            <Button variant="success" type="submit">
                                Gửi liên hệ
                            </Button>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Contact;
