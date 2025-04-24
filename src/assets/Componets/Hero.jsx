import Carousel from 'react-bootstrap/Carousel';
import '../Componets/Hero.css'
function DarkCarousel() {
  return (
    <Carousel variant="dark" fade className='conatiner'>
      <Carousel.Item interval={10000}>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/4835429/pexels-photo-4835429.jpeg?auto=compress&cs=tinysrgb&w=600" 
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Some representative placeholder content for the first slide.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/1670977/pexels-photo-1670977.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Some representative placeholder content for the second slide.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/1637436/pexels-photo-1637436.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>Some representative placeholder content for the third slide.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkCarousel;
