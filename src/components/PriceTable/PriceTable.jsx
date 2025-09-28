import React, { use } from 'react';
import PricingCard from './PricingCard';
import DaisyPricingCard from '../DaisyComponents/DaisyPricingCard';

const PriceTable = ({pricingPromise}) => {
    const pricingData = use(pricingPromise);

    return (
        <div className='mt-10'>
            {/* Manual Pricing Card */}
            <h2 className='text-3xl text-center'>Get Our Membership</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    pricingData.map(
                        pricing => 
                            <PricingCard 
                                key= {pricing.id} 
                                pricing ={pricing}>
                            </PricingCard>)
                }
            </div>

            <h2 className='text-3xl text-center mt-10'>Get Our Membership</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {/* Daisy Pricing Card */}
                {/* <h2 className='text-3xl text-center'>Get Our Membership</h2> */}
                {
                    pricingData.map(
                        pricing => 
                            <DaisyPricingCard
                                key = {pricing.id}
                                pricing = {pricing}>
                            </DaisyPricingCard>
                    )
                }
            </div>
        </div>
    );
};

export default PriceTable;