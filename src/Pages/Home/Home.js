import React from 'react';
import Banner from '../Banner/Banner';
import DestinationsCards from '../DestinationsCards/DestinationsCards';

const Home = () => {
    return (
        <div className='h-screen w-[1080px] mx-auto my-14'>
            <Banner/>
            <DestinationsCards/>
        </div>
    );
};

export default Home;