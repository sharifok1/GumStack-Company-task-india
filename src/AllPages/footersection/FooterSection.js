import React from 'react';
import { Container } from 'react-bootstrap';
import android from '../../asset/an-play.png';
import ios from '../../asset/ioplay.png';
import fb from '../../asset/logo/facebook.JPG'
import link from '../../asset/logo/in.JPG'
import twit from '../../asset/logo/twit.JPG'
import './FooterSection.css'

const FooterSection = () => {
    return (
        <div>
           <section className='footer-bg py-5'>
                <Container>
                <h1 className='text-white pt-5'>
                    Ready to meet your customers face to face?</h1>
                <button className=' mt-4 mb-5 pink-btn-style'>Start a free trial <i class="fas fa-arrow-right"></i>
                </button>
                </Container>
           </section>
           <section>
               <Container>
                   <div className='footer-activities text-start mt-5 '>
                       <div className='m-3'>
                           <h3>Use cases</h3>
                           <small className='text-secondary'>Retail</small> <br/> 
                           <small className='text-secondary'>E-Commerce</small> <br/> 
                           <small className='text-secondary'>SaaS</small> <br/> 
                       </div>
                       <hr />
                       <div className='m-3'>
                           <h3>Integrations</h3>
                           <small className='text-secondary'>Shopify</small> <br/> 
                           <small className='text-secondary'>Google Tag Manager</small> <br/> 
                       </div>
                       <hr />
                       <div className='m-3'>
                           <h3>Compare</h3>
                           <small className='text-secondary'>Vs Whatsapp</small> <br/> 
                           <small className='text-secondary'>Vs Facetime</small> <br/> 
                       </div>
                       <hr />
                       <div className='m-3'>
                           <h3>Support</h3>
                           <small className='text-secondary'>Talk to us on Gumstack</small> <br/> 
                           <small className='text-secondary'>Chat with us </small> <br/> 
                       </div>
                       <hr />
                       <div className='m-3'>
                           <h3>Resources</h3>
                           <small className='text-secondary'>Developer API</small> <br/>
                           <small className='text-secondary'>Download Agent apps</small> <br/> <br />
                           <img src={ios} alt="" /> <br /> <br />
                           <img src={android} alt="" /> 
                       </div>
                       <hr />
                       
                   </div>

                   <div className='footer-copyright-line'>
                    <div className='socail-icon pb-2'>
                        <img style={{width:'32px', margin:'0 auto'}} src={fb} alt="" />
                        <img style={{width:'32px', margin:'0 32px'}} src={link} alt="" />
                        <img style={{width:'32px', margin:'0 auto'}} src={twit} alt="" />
                    </div>
                    <div className='main-copyright'>
                       <p className='text-secondary'>&copy Copyright Gumstack Inc. 2020- All rights reserved</p>
                    </div>
                    <div className='trams'>
                       <p className='text-secondary'>Terms & Conditions</p>
                       <p className='text-secondary'>Privacy Policy</p>
                   </div>
                   <div className='text-center bottom-copy'>
                       <p className='text-secondary'>&copy Copyright Gumstack Inc. 2020- All rights reserved</p>
                    </div>
                 </div>
               </Container>
               
           </section>
        </div>
    ); 
};

export default FooterSection;