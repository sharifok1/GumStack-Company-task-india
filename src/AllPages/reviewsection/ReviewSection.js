import React from 'react';
import { Container } from 'react-bootstrap';
import user from '../../asset/Ellipse 4.png';
import './ReviewSection.css'


const ReviewSection = () => {
    return (
       <div style={{backgroundColor:'rgba(255, 249, 250, 1)'}}>
           <Container className='py-5 mt-5'>
           <h1>You are in good company</h1>
            <div className='review-info'>
            <p className='text-secondary pb-3'>Gumstack allows your customers to call you directly from your online store, and get them to video shop with the help of your agents
           </p>
            </div>
            <img style={{width:'100px'}} src={user} alt="" />
            <h5 style={{color:'rgba(39, 27, 70, 1)'}}>Sameen Eajaz</h5>
            <small className='text-secondary'>COO, Co-Founder, Koskii</small>
            <div style={{color:'goldenrod'}}>
                 <i class="fas fa-star m-1"></i> 
                 <i class="fas fa-star m-1"></i> 
                 <i class="fas fa-star m-1"></i> 
                 <i class="fas fa-star m-1"></i> 
                 <i class="fas fa-star m-1"></i> 
            </div>
                <div className='review-info2'>
                     <p>“The app is exactly what we were looking for and has helped us add another sales channel very quickly giving our customers a discovery platform to explore high asp products”
                     </p>
                </div>
          
            
       </Container>
       </div>
    );
};

export default ReviewSection; 