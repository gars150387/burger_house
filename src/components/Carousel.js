import React, {useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';


export const ControlledCarousel = () =>{

            const [index, setIndex] = useState(0);
          
            const handleSelect = (selectedIndex, e) => {
              setIndex(selectedIndex);
            };
          
            return (
              <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                  <img
                    className="img-carousel"
                    src="https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Smash-Burgers_EXPS_TOHcom20_246232_B10_06_10b.jpg"
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="img-carousel"
                    src="https://www.recipetineats.com/wp-content/uploads/2019/08/Avocado-Chicken-Burgers_9.jpg"
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="img-carousel"
                    src="https://images.ricardocuisine.com/services/recipes/bruger.png"
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
            );
          }
          
        //   render(<ControlledCarousel />);


