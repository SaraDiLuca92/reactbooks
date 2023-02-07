import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function MyFooter() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <p id="par">Via Apollo 12, 87030 (RM) </p>
          <p>tel. 06/5640929 </p>
          <p>email:lolyn@hotmail.com</p>
        </Col>
      </Row>
    </Container>
  );
}

export default MyFooter;
