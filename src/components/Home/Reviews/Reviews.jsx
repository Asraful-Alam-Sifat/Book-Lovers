import React from 'react';
import reviewsData from '@/assets/JSON/reviewsData.json';
import ReviewCard from './ReviewCard';

const Reviews = () => {
    // console.log(reviewsData);
    return (
        <div className='container mx-auto my-15'>
            <h1 className='font-bold text-5xl uppercase text-center mb-5'>recent user reviews</h1>

            <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-3  '>
            {reviewsData.map((review) => (
               <ReviewCard key={review.id} review={review} />
            ))}
        </div>
        </div>
    );
};

export default Reviews;