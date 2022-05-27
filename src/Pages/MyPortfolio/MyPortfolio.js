import React from 'react';
import image from '../../image/Mehady Hasan Akash.png'

const MyPortfolio = () => {
    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row">
                <img src={image} class="max-w-sm rounded-lg shadow-2xl" alt='' />
                <div>
                    <h1 class="text-5xl font-bold">My Portfolio</h1>
                    <p class="py-6">A portfolio is a compilation of materials that exemplifies your beliefs, skills, qualifications, education, training and experiences. It provides insight into your personality and work ethic.
                    </p>
                    <a className='btn btn-primary' href='https://www.linkedin.com/in/mehady-hasan-akash-64400721a/'>linkedin</a>
                    <a className='btn btn-primary' href='https://glistening-moxie-cb32f4.netlify.app/'>website-1</a>
                    {/* <button  class="btn btn-primary" ></button> */}
                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;