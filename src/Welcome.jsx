import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Welcome() {
  return (
    <Card className="text-center">
      <Card.Header>Stop!</Card.Header>
      <Card.Body>
        <Card.Title>Special Books</Card.Title>
        <Card.Text>Best books in the planet</Card.Text>
        <Button variant="primary">See more</Button>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
  );
}

export default Welcome;
