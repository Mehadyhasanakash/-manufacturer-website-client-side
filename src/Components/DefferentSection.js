import React from 'react';
import background from '../image/Background.jpg'

const DefferentSection = () => {
    return (
        <div>
            <div class="hero  lg:h-[60vh] bg-accent mt-16">
  <div class="hero-content flex-col lg:flex-row ">
    
    <div>
      <h1 class="text-5xl font-bold">What is a manufacturer in marketing?</h1>
      <p class="py-6">A manufacturer is a person or a registered company which makes finished products from raw materials in a bid to make a profit. The goods are later distributed to wholesalers and retailers who then sell to customers......</p>
      
      
    </div>
    <div className='lg:h-[60vh] shrink-0' >
    <img src={background} class="h-full " alt='fdf' />
    </div>
  </div>
</div>
        </div>
    );
};

export default DefferentSection;