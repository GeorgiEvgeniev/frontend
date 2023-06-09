import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { Link } from 'react-router-dom';

export const CardCat = ({
  name, breed, age, imageUrl, description, _id
}) => {
  return (
    <Card style={{ width: "18rem", margin: "10px"}}>
      <Card.Img variant='top' src={imageUrl} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{breed}</Card.Text>
        <Button as={Link} to={`/catalog/${_id}`} variant='primary'>Details</Button>
      </Card.Body>
    </Card>
  );
};
