import React from 'react';
import BusinessSummaryCard from './BusinessSummaryCard';
import Flag from '../image/Flag.png'
import happyClient from '../image/HappyCLient.png'
import project from '../image/review.png'
import feedback from '../image/Feedback.png'

const BusinessSummary = () => {




    return (
        <div className='bg-neutral p-10'>

           <div>
           <h1 className='text-center text-3xl font-bold text-primary'> MILLIONS BUSINESS TRUST US.</h1>
            <h1 className='text-center text-2xl font-bold text-secondary'> TRY TO UNDERSTAND USERS EXPECTATION.</h1>
           </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10'>

                <BusinessSummaryCard number="72" cartTile="Countries" img={Flag} />
                <BusinessSummaryCard number="555+" cartTile="HappyClient" img={happyClient} />
                <BusinessSummaryCard number="273+" cartTile="Project" img={project} />
                <BusinessSummaryCard number="432+" cartTile="Feedback" img={feedback} />



            </div>
        </div>

    );
};

export default BusinessSummary;