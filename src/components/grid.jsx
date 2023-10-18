import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function AutoLayoutExample() {
  return (
    <Container>
      <Row>
        <Col>
          <h2>Skills</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <h3>Programming Languages</h3>
        </Col>
      </Row>

      <Row>
        <Col>
          <img src="images/pythonb.png" alt="####" />
          <h5>Python</h5>
        </Col>
        <Col>
          <img src="images/htmlb.png" alt="####" />
          <h5>HTML</h5>
        </Col>
        <Col>
          <img src="images/kotlinb.jpg" alt="####" />
          <h5>Kotlin</h5>
        </Col>
        <Col>
          <img src="images/jsb.jpg" alt="####" />
          <h5>Java Script</h5>
        </Col>
      </Row>
      <Row>
        <Col>
          <h3>Developer Frameworks & Libaries</h3>
        </Col>
      </Row>

      <Row>
        <Col>
          <img src="images/firebaseb.jpg" alt="####" />
          <h5>Firebase</h5>
        </Col>
        <Col>
          <img src="images/djangob.png" alt="####" />
          <h5>Django</h5>
        </Col>
        <Col>
          <img src="images/bootlogob.png" alt="####" />
          <h5>Bootstrap</h5>
        </Col>
        <Col>
          <img src="images/tailwindb.png" alt="####" />
          <h5>Tailwind</h5>
        </Col>
      </Row>
    </Container>
  );
}

export default AutoLayoutExample;
