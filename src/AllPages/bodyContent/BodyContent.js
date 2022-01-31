import React from 'react';
import { Container } from 'react-bootstrap';
import bodyImage from '../../asset/boderBaner.JPG'
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
                    <ul className='text-start text-secondary '>
                        <li className='my-3 my-md-5 py-2'>Works on all devices</li>
                        <li className='my-3 my-md-5 py-2'>1-Click video calls directly from browser</li>
                        <li className='my-3 my-md-5 py-2'>Optional video for customers</li>
                        <li className='my-3 my-md-5 py-2'>No  app downloads</li>
                       
                    </ul>
                    <button className='mt-4 mb-5'>Get in Touch</button>
                </div>
                <div className='col-md-6 mt-5 me-md-2 browsing-banar'>
                    <img className='img-fluid' src={bodyImage} alt="" />
                </div>
            </div>
            {/* --------------------------------------------body second part/// */}
            {/* ---------------second part 1st step */}
            <section className='mt-5'>
              <div className='mx-md-2'>
                 <div className='body-des'>
                    <p className='fs-6 text-secondary'>
                    Worried about missing calls from customers? What if your team is busy or not available?</p>
                    </div>
                    <h1 className='body-heading'>Let customers schedule calls when you are not around</h1>
                </div>
                 <div className='row mt-4 mx-auto'>
                    <div className='col-4 p-4 bg-secondary'>
                        <h1 className='fs-5'>When would you like to <br /> schedule the call?</h1>
                        <div>
                            <button className='m-2 border-1'>WED <br /> Mar 6</button>
                            <button className='m-2 border-1'>THU <br /> Mar 7</button>
                            <button className='m-2 border-1'>FRI <br /> Mar8</button>
                        </div>
                    </div>
                    <div className='col-md-6 my-auto text-start ps-md-5'>
                        <h2 className='fs-4 '>Schedule callback when you are not around</h2>
                         <ul className='text-start'>
                             <li className='my-1'>Automatically capture contact details and schedule callback</li>
                             <li className='my-1'>Book meeting only during your office hours</li>
                             <li className='my-1'>Use any software to complete the call- Zoom, Meet, or just phone</li>
                         </ul>
                    </div>
                 </div>
            {/* ---------------second part 2nd step */}
                 <div className='row mt-4'>
                    <div className='col-md-7 my-auto text-start'>
                        <h2 className='fs-4 '>Sync your team’s calendar and manage schedules without a separate calendar software
                        </h2>
                         <ul className='text-start'>
                             <li className='my-1'>
                             Show availability across your agents’ calendar
                             </li>
                             <li className='my-1'>
                             Send reminders so that they don’t forget their appointments</li>
                             <li className='my-1'>
                             Add calls to your calendar or CRM
                             </li>
                         </ul>
                    </div>
                    <div className='col-5 p-4 bg-secondary '>
                        <h1 className='fs-5'>When would you like to <br /> schedule the call?</h1>
                        <div>
                            <button className='m-2 border-1'>WED <br /> Mar 6</button>
                            <button className='m-2 border-1'>THU <br /> Mar 7</button>
                            <button className='m-2 border-1'>FRI <br /> Mar8</button>
                        </div>
                    </div>
                </div>
                
            </section>
        </Container>
    );
};

export default BodyContent;