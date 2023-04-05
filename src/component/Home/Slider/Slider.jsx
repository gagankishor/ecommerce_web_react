import { Carousel } from "react-bootstrap";
import  "./Slider.css"
const Slider = () => {
    return(
        <Carousel>
        <Carousel.Item className="max-hight">
          <img
            className="d-block w-100 item "
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRufIGdaAYkl5DYqluWeFR3WzTCjt7NiKbArA&usqp=CAU"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="max-hight">
          <img
            className="d-block w-100"
            src="https://www.rakhibazaar.com/blog/wp-content/uploads/2022/05/KajuKatli.jpg"
            alt="Second slide"
          />

          <Carousel.Caption className="max-hight">
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="max-hight">
          <img className="d-block w-100" src="https://cdn.pixabay.com/photo/2014/12/22/12/33/sweets-577230__340.jpg" alt="Third slide" />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
};
export default Slider;