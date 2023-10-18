import Nav from "./Nav";
import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage from "./ExampleCarouselImage.jsx";
import AutoLayoutExample from "./grid.jsx";
import AboutPort from "./AboutPort.jsx";
export default function Home() {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <ExampleCarouselImage />
          <img src="images/dev2b.jpg" alt="dfhgfh" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage />
          <img src="images/dev2b.jpg" alt="dfhgfh" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage text="Third slide" />
          <img src="images/devb.jpg" alt="dfhgfh" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <AboutPort />
      <AutoLayoutExample />
    </>
  );
}
