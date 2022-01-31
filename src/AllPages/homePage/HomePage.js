import React from 'react';
import { Container } from 'react-bootstrap';
import circleImg from '../../asset/banar.png';
import './HomePage.css'

const HomePage = () => {
    return (
        <div className='homePage p-2'>
          <Container className='mt-4 mb-5'>
          <div className='row p-4'>
              <div className='col-md-6 text-md-start'>
                 <h1 className='heading-text mb-2 mt-4'>
                   Meet your customers <br /> face-to-face
                </h1> 
                <p className='text-warning fs-4 mb-4'>
                Instantly on your website/app
                </p>
                <p className='text-white mb-5 mt-2 me-lg-5 pe-lg-3'>
                Integrate video calling on your website/app in under 5 minutes. Showcase your products, assist them with their purchase or help resolve issues faster with video.
                </p>
                <button className='border-0 p-1 px-2 mt-4 mb-5 '>Register for a demo </button>
              </div>
              <div className='col-md-6 mt-4 '>
                    <img className='img-fluid' src={circleImg} alt="" />
              </div>
          </div>
          </Container>
        </div>
    );
};

export default HomePage;