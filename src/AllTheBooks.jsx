import fantasy from "./fantasy.json";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
function AllTheBooks() {
  return fantasy.map((book) => {
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={book.img} />
        <Card.Body>
          <Card.Title></Card.Title>
          <Card.Text></Card.Text>
          <Button variant="primary">Buy</Button>
        </Card.Body>
      </Card>
    );
  });
}

export default AllTheBooks;
