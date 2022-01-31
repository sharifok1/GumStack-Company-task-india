import React from 'react';
import { Container } from 'react-bootstrap';
import bodyImage from '../../asset/boderBaner.JPG';
import logo1 from '../../asset/logo/logo1.JPG';
import logo2 from '../../asset/logo/logo2.JPG';
import logo3 from '../../asset/logo/logo3.JPG';
import logo4 from '../../asset/logo/logo4.JPG';

import './BodyContent.css'

const BodyContent = () => {
    return (
        // ----------------------------------------------body 1st part///
        <Container className='mt-5 pt-2'>
            <div className='body-heading'>
                <div className='mx-md-4'>
                <h1 className='body-heading'>Seamless one-one conversations on your website</h1>
                    <div className='body-des'>
                    <p className='fs-6 text-secondary'>Allow your customers to call you whenever they need you. Connect them instantly to an agent without taking them away from your website.</p>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-5 ms-md-2 text-md-start'>
                    <ul className='text-start text-secondary service-list'>
                        <li className='my-3 my-md-4 py-2'><span className='service-icon'><img src={logo1} alt="" /></span> Works on all devices</li>
                        <li className='my-3 my-md-4 py-2'><span className='service-icon'><img src={logo2} alt="" /></span> 1-Click video calls directly from browser</li>
                        <li className='my-3 my-md-4 py-2'><span className='service-icon'><img src={logo3} alt="" /></span> Optional video for customers</li>
                        <li className='my-3 my-md-4 py-2'><span className='service-icon'><img src={logo4} alt="" /></span> No  app downloads</li>
                       
                    </ul>
                    <button className='mt-4 mb-5 btn-style ms-md-4'>Get in touch <i class=" fas fa-arrow-right"></i></button>
                </div>
                <div className='col-md-6 my-auto me-md-2 browsing-banar'>
                    <img className='img-fluid' src={bodyImage} alt="" />
                </div>
            </div>
            {/* --------------------------------------------body second part/// */}
            
            <section className='mt-2'>
                {/* ---------------second part 1st step */}
             <div className='mx-md-2'>
                 <div className='body-des'>
                    <p className='fs-6 text-secondary mt-md-5'>
                    Worried about missing calls from customers? What if your team is busy or not available?</p>
                    </div>
                    <h1 className='body-heading'>Let customers schedule calls when you are not around</h1>
                 </div>
                 <div className='d-flex justify-content-evenly body-dubble-card'>
                    <div className='p-4 mt-5 date-card'>
                        <h1 className='fs-5'>When would you like to <br /> schedule the call?</h1>
                        <div>
                            <button className='m-2 date-btn'>WED <br /> Mar 6</button>
                            <button className='m-2 date-btn'>THU <br /> Mar 7</button>
                            <button className='m-2 date-btn'>FRI <br /> Mar8</button>
                        </div>
                    </div>
                    <div className='my-auto mt-5 text-start ps-md-5'>
                        <h2 className='fs-4 text-center text-md-start'>Schedule callback when you are not around</h2>
                         <ul className='text-start text-card'>
                             <li className='py-2'>Automatically capture contact details and schedule callback</li>
                             <li className='py-2'>Book meeting only during your office hours</li>
                             <li className='py-2'>Use any software to complete the call- Zoom, Meet, or just phone</li>
                         </ul>
                    </div>
                 </div>
                 <div className='altBtn1 my-5 '><button className='btn-style'>Let's get started <i class="fas fa-arrow-right"></i></button></div>
                 {/* ---------------second part 2nd step */}
             <div>
                 <div className='d-flex justify-content-evenly body-dubble-card mt-4 order-1'>
                  <div className='my-auto mt-5 text-start ps-md-5 order-1'>
                        <h2 className='fs-2 text-center text-md-start'>Schedule callback when you are not around</h2>
                         <ul className='text-start text-card'>
                             <li className='py-2'>Show availability across your agents’ calendar</li>
                             <li className='py-2'>Send reminders so that they don’t forget their appointments</li>
                             <li className='py-2'>Use any software to complete the call- Zoom, Meet, or just phone</li>
                         </ul>
                    </div>
                    <div className='p-4 date-card pb-5 order-md-2 email-card'>
                        <h1 className='fs-5 mb-5'>When would you like to <br /> schedule the call?</h1>
                        <div className='add-email'>
                            <input type="text" value="George@gmail.com" className='inputMail'/><button className='add'>Add</button>
                        </div>
                    </div>
                 </div>
                
                  <button className='my-5 alt-btn2 btn-style'>
                      Let's get started <i class="fas fa-arrow-right"></i>
                  </button>
                  <button className='my-5 alt-getIn btn-style'>
                      get in touch <i class="fas fa-arrow-right"></i>
                  </button>
                  
                </div>
                
            </section>
        </Container>
    );
};

export default BodyContent;