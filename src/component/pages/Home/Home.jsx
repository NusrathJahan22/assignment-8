import React from 'react';
import Banner from '../../Banner/Banner';
import { useLoaderData } from 'react-router-dom';
import Card from '../Card/Card';

const Home = () => {
    const cards= useLoaderData()
    console.log(cards)
    return (
        <div>
          <Banner></Banner>
          <Card cards={cards}> </Card>
        </div>
    );
};

export default Home;