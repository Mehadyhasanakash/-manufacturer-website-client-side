import React, { useEffect, useState } from 'react';

const HomeReview = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/review')
        .then(res => res.json())
        .then(data => setReviews(data))
    } ,[])

    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:p-10'>
            {
                reviews.map(review => 


                    <div class="card w-96 bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="card-title">{review.user}</h2>
    <h2 class="card-title">{review.userName}</h2>
    
    <div class="card-actions justify-end">
    <div class="rating">
       Ratings: {review.ratings}
</div>
    </div>
  </div>
</div>
                )
            }
        </div>
    );
};

export default HomeReview;