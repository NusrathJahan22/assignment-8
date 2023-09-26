import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import OneCard2 from '../OneCard2/OneCard2';

const OneCard = () => {
    
    const [card, setCard] =useState()
    const {id}= useParams()
    console.log(id);

    const cards =useLoaderData()
    console.log(cards);

    useEffect(()=>{
const findCard= cards?.find(card=> card.id ===id)
setCard(findCard)
    },[id,cards])
console.log()

    return (
        <div>
            <OneCard2 card={card}></OneCard2>
        </div>
    );
};

export default OneCard;