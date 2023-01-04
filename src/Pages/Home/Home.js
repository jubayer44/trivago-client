import React from 'react';
import Banner from '../Banner/Banner';
import DestinationsCards from '../DestinationsCards/DestinationsCards';
import SearchBanner from '../SearchBanner/SearchBanner';
import TrivagoDetails from '../TrivagoDetails/TrivagoDetails';

const Home = () => {
    return (
        <div className='md:w-[1080px] mx-auto my-14'>
            <Banner/>
            <SearchBanner/>
            <DestinationsCards/>
            <TrivagoDetails/>
        </div>
    );
};

export default Home;