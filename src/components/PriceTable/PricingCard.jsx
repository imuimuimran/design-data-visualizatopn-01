import React from 'react';
import PricingFeatures from './PricingFeatures';

const PricingCard = ({pricing}) => {
    // if we destructrin the below line, we can just use key
    const {name, price, description, features} = pricing

    return (
        <div className='flex flex-col border rounded-2xl bg-blue-400 p-4'>
            {/* Card Header */}
            <div>
                {/* <h1 className='text-2xl'>{pricing.name}</h1>
                <h4 className='text-sm'>{pricing.price}</h4> */}

                {/* use destructuring */}
                <h1 className='text-2xl'>{name}</h1>
                <h4 className='text-sm'>{price}</h4>
            </div>
            {/* Card Body */}
            <div className='p-4 mt-10 rounded-2xl bg-blue-300 flex-1'>
                {/* <p>{pricing.description}</p> */}

                {/* use destructuring */}
                <p>{description}</p>

                {/* Show Features */}
                {
                    features.map(
                        (feature, index) => 
                        <PricingFeatures
                            key = {index} 
                            feature = {feature}>
                        </PricingFeatures>
                    )
                }
            </div>
            <button className="btn w-full mt-5">Wide</button>
        </div>
    );
};

export default PricingCard;