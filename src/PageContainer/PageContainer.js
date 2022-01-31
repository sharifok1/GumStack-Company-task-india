import React from 'react';
import BodyContent from '../AllPages/bodyContent/BodyContent';
import Branding from '../AllPages/branding/Branding';
import FooterSection from '../AllPages/footersection/FooterSection';
import HomePage from '../AllPages/homePage/HomePage';
import Navigation from '../AllPages/navigation/Navigation';
import ReviewSection from '../AllPages/reviewsection/ReviewSection';

const PageContainer = () => {
    return (
        <div>
            <Navigation></Navigation>
            <HomePage></HomePage>
            <BodyContent></BodyContent>
            <Branding></Branding>
            <ReviewSection></ReviewSection>
            <FooterSection></FooterSection>
            
        </div>
    );
};

export default PageContainer;