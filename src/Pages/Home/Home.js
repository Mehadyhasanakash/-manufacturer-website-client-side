import React from 'react';
import Banner from '../../Components/Banner';
import BusinessSummary from '../../Components/BusinessSummary';
import DefferentSection from '../../Components/DefferentSection';
import ToolsParts from '../../Components/ToolsParts';


const Home = () => {
    return (
        <div>
           <Banner/>
           <BusinessSummary/>
           <DefferentSection/>
           <ToolsParts/>
           
        </div>
    );
};

export default Home;