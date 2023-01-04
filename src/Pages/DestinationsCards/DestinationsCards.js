// import React from 'react';
// import { NavLink } from 'react-router-dom';

// const DestinationsCards = () => {
//     return (
//         <div className='mt-20'>
//             <h2 className='text-xl font-bold'>These top destinations are just a click away</h2>
//             <div className='mt-4'>
//                 <NavLink to="/" className="p-2 font-bold text-gray-500 hover:bg-gray-200">Top Cities</NavLink>
//                 <NavLink to="/destinations" className="p-2 font-bold text-gray-500 hover:bg-gray-200">Top Destinations</NavLink>
//             </div>

//         </div>
//     );
// };

// export default DestinationsCards;





import { useState } from 'react'
import { Tab } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function DestinationsCards() {
  let [categories] = useState({
    Top_Cities: [
      {
        id: 1,
        content: 
        <div className='flex'>
            <div className='w-[272px] h-[328px]'>
            <div>
               <img className='rounded-xl' src="https://imgcy.trivago.com/c_fill,d_dummy.jpeg,e_sharpen:60,f_auto,h_258,q_auto,w_258/dummy.jpeg" alt="" />
            </div>
            <div>
                <h4 className="font-bold mt-1">Hotels in Mumbai</h4>
                <div className='flex gap-2 text-sm mt-1'>
                <p>10,111 Hotels</p>
                <strong>Avg ₹3,675</strong>
                </div>
            </div>
             </div>
            <div className='w-[272px] h-[328px]'>
            <div>
               <img className='rounded-xl' src="https://imgcy.trivago.com/c_fill,d_dummy.jpeg,e_sharpen:60,f_auto,h_258,q_auto,w_258/dummy.jpeg" alt="" />
            </div>
            <div>
                <h4 className="font-bold mt-1">Hotels in Mumbai</h4>
                <div className='flex gap-2 text-sm mt-1'>
                <p>10,111 Hotels</p>
                <strong>Avg ₹3,675</strong>
                </div>
            </div>
             </div>
            <div className='w-[272px] h-[328px]'>
            <div>
               <img className='rounded-xl' src="https://imgcy.trivago.com/c_fill,d_dummy.jpeg,e_sharpen:60,f_auto,h_258,q_auto,w_258/dummy.jpeg" alt="" />
            </div>
            <div>
                <h4 className="font-bold mt-1">Hotels in Mumbai</h4>
                <div className='flex gap-2 text-sm mt-1'>
                <p>10,111 Hotels</p>
                <strong>Avg ₹3,675</strong>
                </div>
            </div>
             </div>
            <div className='w-[272px] h-[328px]'>
            <div>
               <img className='rounded-xl' src="https://imgcy.trivago.com/c_fill,d_dummy.jpeg,e_sharpen:60,f_auto,h_258,q_auto,w_258/dummy.jpeg" alt="" />
            </div>
            <div>
                <h4 className="font-bold mt-1">Hotels in Mumbai</h4>
                <div className='flex gap-2 text-sm mt-1'>
                <p>10,111 Hotels</p>
                <strong>Avg ₹3,675</strong>
                </div>
            </div>
             </div>
        </div>
      }
    ],
    Top_Destinations: [
      {
        id: 1,
        content:
        <div className='flex'>
        <div className='w-[272px] h-[328px]'>
        <div>
           <img className='rounded-xl' src="https://imgcy.trivago.com/c_fill,d_dummy.jpeg,e_sharpen:60,f_auto,h_258,q_auto,w_258/dummy.jpeg" alt="" />
        </div>
        <div>
            <h4 className="font-bold mt-1">Hotels in Mumbai</h4>
            <div className='flex gap-2 text-sm mt-1'>
            <p>10,111 Hotels</p>
            <strong>Avg ₹3,675</strong>
            </div>
        </div>
         </div>
        <div className='w-[272px] h-[328px]'>
        <div>
           <img className='rounded-xl' src="https://imgcy.trivago.com/c_fill,d_dummy.jpeg,e_sharpen:60,f_auto,h_258,q_auto,w_258/dummy.jpeg" alt="" />
        </div>
        <div>
            <h4 className="font-bold mt-1">Hotels in Mumbai</h4>
            <div className='flex gap-2 text-sm mt-1'>
            <p>10,111 Hotels</p>
            <strong>Avg ₹3,675</strong>
            </div>
        </div>
         </div>
        <div className='w-[272px] h-[328px]'>
        <div>
           <img className='rounded-xl' src="https://imgcy.trivago.com/c_fill,d_dummy.jpeg,e_sharpen:60,f_auto,h_258,q_auto,w_258/dummy.jpeg" alt="" />
        </div>
        <div>
            <h4 className="font-bold mt-1">Hotels in Mumbai</h4>
            <div className='flex gap-2 text-sm mt-1'>
            <p>10,111 Hotels</p>
            <strong>Avg ₹3,675</strong>
            </div>
        </div>
         </div>
        <div className='w-[272px] h-[328px]'>
        <div>
           <img className='rounded-xl' src="https://imgcy.trivago.com/c_fill,d_dummy.jpeg,e_sharpen:60,f_auto,h_258,q_auto,w_258/dummy.jpeg" alt="" />
        </div>
        <div>
            <h4 className="font-bold mt-1">Hotels in Mumbai</h4>
            <div className='flex gap-2 text-sm mt-1'>
            <p>10,111 Hotels</p>
            <strong>Avg ₹3,675</strong>
            </div>
        </div>
         </div>
    </div>
      }
    ]
  })

  return (
    <div className="w-full max-w-md px-2 py-16 sm:px-0">
         <h2 className='text-xl font-bold mb-6'>These top destinations are just a click away</h2>
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl  p-1">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-full py-2.5 leading-5 text-gray-500 font-bold',
                  ' focus:outline-none ',
                  selected
                    ? 'text-blue-500 border-b-4 border-gray-500 border rounded-md'
                    : 'text-gray-500  hover:bg-gray-200'
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                'rounded-xl bg-white p-3',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
              )}
            >
              <ul className='w-[1080px]'>
                {posts.map((post) => (
                  <li
                    key={post.id}
                    className="relative rounded-md p-3"
                  >
                    <div className=" leading-5">
                      {post.content}
                    </div>

                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}
