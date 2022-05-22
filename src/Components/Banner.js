import React from 'react';
import background01 from '../image/background01.png'

const Banner = () => {
    return (
        < >
            <div className="hero h-[60vh] bg-accent">
                <div className="hero-content flex-col lg:flex-row">
                    
                    <div>
                        <h1 className="text-5xl font-bold">
                            Manufacturer Item!</h1>
                        <p className="py-6 max-w-xl">A manufacturer is a person or company that produces finished goods from raw materials by using various tools, equipment, and processes, and then sells the goods ...</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>

                    <div className='h-[60vh]'>
                    <img src={background01} className="h-full" alt='background'  />
                    </div>
                </div>
            </div>

        </>
    );
};

export default Banner;