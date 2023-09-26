import React from 'react';
import AllCard from '../AllCard/AllCard';

const Card = ({cards}) => {
console.log(cards)
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 '>
            {
                cards?.map(card => <AllCard key={card.id} card={card}></AllCard>)
            }
        </div>
    );
};

export default Card;