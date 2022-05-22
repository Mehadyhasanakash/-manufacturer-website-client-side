import React from 'react';

const Banner = () => {
    return (
        < >
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://i.ibb.co/tcTNGkY/Background.jpg" alt='background' className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">
                            manufacturer News!</h1>
                        <p className="py-6">A manufacturer is a person or company that produces finished goods from raw materials by using various tools, equipment, and processes, and then sells the goods ...</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Banner;