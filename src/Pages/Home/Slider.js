import React from 'react';
import { Carousel } from 'react-bootstrap';
import slider1 from '../../assets/images/slider1.jpg'
import slider2 from '../../assets/images/slider2.jpg'
import slider3 from '../../assets/images/slider3.jpg'
import './Home.css'
import './Slider.css'

const Slider = () => {
    return (
      <div className=' mx-auto'>
        <div className="d-flex justify-content-center">
          <Carousel fade>
            <Carousel.Item className=' w-100'>
              <img  className="d-block slide-img" src={slider1} alt="First slide"/>
              <Carousel.Caption>
              <h3>Explopre your Talent</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                {/* <button className='btn-grad'>get started</button> */}
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block slide-img" src={slider2} alt="Second slide" />
              <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block text-center  slide-img" src={slider3} alt="Third slide"/>
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    );
};

export default Slider;