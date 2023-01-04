import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import DatePicker from 'react-date-picker';

const SearchBanner = () => {
    const [value, onChange] = useState(new Date());
    const navigate = useNavigate();


    const handleSearch = (event) => {
        event.preventDefault();
        const cityName = event.target.city.value;
        navigate(`/city/${cityName}`)
    };
    
    return (    
        <div className='bg-[#f9fafa] py-10'>
            <div className='mb-3'>
                <div>
                    <NavLink className="p-2 rounded-lg bg-[#e7f4fa] mr-2">All stays</NavLink>
                    <NavLink className="p-2 rounded-lg bg-[#e7f4fa] mr-2">Hotel</NavLink>
                    <NavLink className="p-2 rounded-lg bg-[#e7f4fa]">House/Apartment</NavLink>
                </div>
                <form
                onSubmit={handleSearch}
                className='rounded-lg shadow-md p-2 md:flex gap-4'>
                    <div className='flex items-center relative'>
                    <svg width="24" height="24" viewBox="0 0 24 24" className="pointer-events-none max-h-full max-w-full" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"><path d="M10 3a7 7 0 107 7 7 7 0 00-7-7zM21 21l-6-6" vector-effect="non-scaling-stroke"></path></g></svg>
                    <input  defaultValue="Mumbai" className='p-2 rounded-md border-r' type="text" name="city" id="" />
                    </div>
                    <DatePicker onChange={onChange} value={value} />
                    <DatePicker onChange={onChange} value={value} />
                    <div className='flex items-center gap-2 bg-white'>
                    <svg width="24" height="24" viewBox="0 0 24 24" class="pointer-events-none max-h-full max-w-full" xmlns="http://www.w3.org/2000/svg"><g fill="currentColor"><path d="M13.13 12.14a4.5 4.5 0 10-7.26 0A5 5 0 002 17a3 3 0 003 3h9a3 3 0 003-3 5 5 0 00-3.87-4.86zM9.5 6a3.49 3.49 0 012.44 6A3.5 3.5 0 016 9.5 3.5 3.5 0 019.5 6zM14 19H5a2 2 0 01-2-2 4 4 0 013.74-4 4.41 4.41 0 005.52 0A4 4 0 0116 17a2 2 0 01-2 2z"></path><path d="M19.31 10.24A3.93 3.93 0 0020 8a4 4 0 00-6.94-2.69 5.87 5.87 0 01.7.71A3 3 0 1116 11a2.91 2.91 0 01-1.15-.23v.11a4.5 4.5 0 01-.28.83A4 4 0 0016 12a3.94 3.94 0 002.55-.94A3 3 0 0121 14a1 1 0 01-1 1h-2.35a6.67 6.67 0 01.26 1H20a2 2 0 002-2 4 4 0 00-2.69-3.76z"></path></g></svg>
                    <div>
                        <p><small>1 Room</small></p>
                        <p className='font-bold'><small>2 Gust</small></p>
                    </div>
                    <button className='text-white font-bold  py-2 px-4 rounded-md bg-[#005fa3]'>Search</button>
                    </div>
                </form>
            </div>
            <div className='px-3'>
                <h4 className='font-bold mb-3'>We compare multiple booking sites at once</h4>
                <div className='md:flex justify-between'>
                    <img className='w-14' src="https://imgcy.trivago.com/image/upload/hardcodedimages/mpm-localised-logos/395.png" alt="" />
                    <img className='w-14' src="https://imgcy.trivago.com/image/upload/hardcodedimages/mpm-localised-logos/452.png" alt="" />
                    <img className='w-14' src="https://imgcy.trivago.com/image/upload/hardcodedimages/mpm-localised-logos/626.png" alt="" />
                    <img className='w-14' src="https://imgcy.trivago.com/image/upload/hardcodedimages/mpm-localised-logos/2192.png" alt="" />
                    <img className='w-14' src="https://imgcy.trivago.com/image/upload/hardcodedimages/mpm-localised-logos/14.png" alt="" />
                    <img className='w-14' src="https://imgcy.trivago.com/image/upload/hardcodedimages/mpm-localised-logos/634.png" alt="" />
                    <img className='w-14' src="https://imgcy.trivago.com/image/upload/hardcodedimages/mpm-localised-logos/2452.png" alt="" />
                    <p className='text-gray-300'><small>+100 more</small></p>
                </div>
            </div>
        </div>
    );
};

export default SearchBanner;    