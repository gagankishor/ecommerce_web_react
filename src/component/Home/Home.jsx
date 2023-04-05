import {
  Container,
  Button,
  Card,
  Row,
  Col,
} from "react-bootstrap";
import { useState } from "react";
import Slider from "./Slider/Slider";
import Navbar1 from "./Navbar/Navbar1";
const Home = () => {
  const [Product, setProduct] = useState([
    {
      titel: "Rasgulla",
      img: "https://cdn.pixabay.com/photo/2014/12/22/12/33/sweets-577230__340.jpg",
    },
    {
      titel: "Laddu",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRufIGdaAYkl5DYqluWeFR3WzTCjt7NiKbArA&usqp=CAU",
    },
    {
      titel: "Kaju Katali",
      img: "https://www.rakhibazaar.com/blog/wp-content/uploads/2022/05/KajuKatli.jpg",
    },
    {
      titel: "Rasgulla",
      img: "https://cdn.pixabay.com/photo/2014/12/22/12/33/sweets-577230__340.jpg",
    },
    {
      titel: "Laddu",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRufIGdaAYkl5DYqluWeFR3WzTCjt7NiKbArA&usqp=CAU",
    },
    {
      titel: "Kaju Katali",
      img: "https://www.rakhibazaar.com/blog/wp-content/uploads/2022/05/KajuKatli.jpg",
    },
  ]);

  return (
    <>
     <Navbar1/>
     <Slider/>
     <Container>
     
     <Row className=" mb-3 mt-4 ">
      <Col sm={8} className="mx-auto btn btn-danger text-center">
      <h3>Sweets</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et dolor voluptatum ab voluptatem exercitationem ducimus ipsam, quidem quo eius modi maxime adipisci dolorem corrupti non nam reprehenderit at repellendus. Praesentium!</p>
      </Col>
     </Row>

      <Container className="d-flex">
        <Row>
          {Product.map((prod) => (
            <Col sm={3} >
              <>
                <Card className="mb-4">
                  <Card.Img style={{ height: '100px' }} variant="top" src={prod.img} />
                  <Card.Body >
                    <Card.Title>{prod.titel}</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      
                      
                    </Card.Text>
                  </Card.Body>
                  

                  <Card.Body className="text-aline-center d-flex">
                  
                  <del>₹ 700 </del> <h4> ₹ 500</h4> 
                    <Button className="btn btn-primeary ms-auto">Add </Button>
                  </Card.Body>
                </Card>
              </>
            </Col>
          ))}
        </Row>
      </Container>
      </Container>
    </>
  );
};
export default Home;
