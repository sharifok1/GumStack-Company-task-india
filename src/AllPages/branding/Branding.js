import React from 'react';
import { Container } from 'react-bootstrap';
import './Branding.css'
import allbrand from '../../asset/allBrand.png';
import brandIcon1 from '../../asset/logo/icon1.JPG'
import brandIcon2 from '../../asset/logo/icon2.JPG'
import brandIcon3 from '../../asset/logo/icon3.JPG'
import brandIcon4 from '../../asset/logo/icon4.JPG'
import brandIcon5 from '../../asset/logo/icon5.JPG'
import brandIcon6 from '../../asset/logo/icon6.JPG'
import brandIcon7 from '../../asset/logo/icon7.JPG'
import brandIcon8 from '../../asset/logo/icon8.JPG'

const Branding = () => {
    return (
        <div> 
            <div className='brand-cycle'>
            <Container>
                {/* branding 1st sectioon---------------------- */}
            <div className='row brand-cycle py-5'>
                <div className='col-md-6 my-auto order-2'>
                    <h2 className='fs-4 text-center text-md-start main-heading'>Integrate in under 5 minutes</h2>
                         <ul className='text-start text-card mt-4 mt-md-2'>
                             <li className='py-2'>&nbsp; Integrate using Google Tag Manager, or add a few lines of script to your website.</li>
                             <li className='py-2'>&nbsp; 1-click installations for Shopify, Wordpress, Wix.</li>
                             <li className='py-2'>&nbsp; Install easily on Webflow, Squarespace and more.</li>
                             <button className='mt-4 mb-3 mt-5 btn-style ms-3 ms-md-0'>Talk to our developer &nbsp; <i class="fas fa-arrow-right"></i></button>
                         </ul>     
                </div>
                <div className='col-md-6 order-md-2'>
                <h2 className='fs-4 text-center text-md-start alt-heading'>Integrate in under 5 minutes</h2>
                    <img className='img-fluid' src={allbrand} alt="" />
                </div>
            </div>
        </Container>
        </div>
         {/* branding 2nd sectioon---------------------- */}
        <Container>
            <div className='my-5'>
                <h2>Everything you need  to support your customers over video call</h2>
                <p className='text-secondary'>Just install your script, add your team and start delighting your customers.</p>
            </div>
        <div className='row'>
                <div className='col-6 col-md-3'>
                    <div className='text-md-start px-3 my-4'>
                        <img style={{width:'50px'}} src={brandIcon1} alt="" />
                        <h4>Agent Inbox</h4>
                        <p className='text-secondary service-des'>
                        Allows agents to manage their queue & answer customers from any device.
                        </p>
                    </div>
                </div>
                <div className='col-6 col-md-3'>
                    <div className='text-md-start px-3 my-4'>
                        <img style={{width:'50px'}} src={brandIcon2} alt="" />
                        <h4>Call Routing</h4>
                        <p className='text-secondary service-des'>
                        Route your calls to the right agent.
                        </p>
                    </div>
                </div>
                <div className='col-6 col-md-3'>
                    <div className='text-md-start px-3 my-4'>
                        <img style={{width:'50px'}} src={brandIcon3} alt="" />
                        <h4>Calendar</h4>
                        <p className='text-secondary service-des'>
                        Manage your team’s schedules, availability and workload.
                        </p>
                    </div>
                </div>
                <div className='col-6 col-md-3'>
                    <div className='text-md-start px-3 my-4'>
                        <img style={{width:'50px'}} src={brandIcon4} alt="" />
                        <h4>Recording</h4>
                        <p className='text-secondary service-des'>
                        Use recordings to train your agents to be more effective.
                        </p>
                    </div>
                </div>
                <div className='col-6 col-md-3'>
                    <div className='text-md-start px-3 my-4'>
                        <img style={{width:'50px'}} src={brandIcon5} alt="" />
                        <h4>Reminders</h4>
                        <p className='text-secondary service-des'>
                        Notifications and alerts to agents and customers, so no calls go unanswered.
                        </p>
                    </div>
                </div>
                <div className='col-6 col-md-3'>
                    <div className='text-md-start px-3 my-4'>
                        <img style={{width:'50px'}} src={brandIcon6} alt="" />
                        <h4>Triaging</h4>
                        <p className='text-secondary service-des'>
                        Manually assign calls to agents based on their schedules.
                        </p>
                    </div>
                </div>
                <div className='col-6 col-md-3'>
                    <div className='text-md-start px-3 my-4'>
                        <img style={{width:'50px'}} src={brandIcon7} alt="" />
                        <h4>Scheduling</h4>
                        <p className='text-secondary service-des'>
                        Automatically assign scheduled calls to the available agent.
                        </p>
                    </div>
                </div>
                <div className='col-6 col-md-3'>
                    <div className='text-md-start px-3 my-4'>
                        <img style={{width:'50px'}} src={brandIcon8} alt="" />
                        <h4>Dashboard</h4>
                        <p className='text-secondary service-des'>
                        Monitor response times and improve the overall customer experience.
                        </p>
                    </div>
                </div>
                
             </div>
             <button className='mt-4 mb-3 mt-5 btn-style'>Get started for free &nbsp; <i class="fas fa-arrow-right"></i></button>
             <p className='text-secondary powerby-text'>Powered by Gumstack</p>
        </Container>       
</div>
        
    );
};

export default Branding;