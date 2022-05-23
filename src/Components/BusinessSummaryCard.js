import React from 'react';

const BusinessSummaryCard = ({img,cartTile,number}) => {
    return (
        <div>

            
            <div class="card w-full bg-base-100 shadow-xl ">
  <figure class="px-10 pt-10">
    <img  src={img}  alt="Shoes" width={100} class="rounded-xl"  />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">{number}</h2>
    <h2 class="card-title">{cartTile}</h2>
    
  </div>
</div>
        </div>
    );
};

export default BusinessSummaryCard;