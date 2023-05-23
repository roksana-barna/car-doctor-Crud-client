import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services,setServices]=useState([]);
    const[asc,setAsc]=useState(true);
    useEffect(()=>{
        fetch(`http://localhost:5000/services?sort=${asc?'asc' :'desc'}`)
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[asc])
    return (
        <div className='mt-4'>
           <div className='text-center'>
           <h6 className='text-orange-600'>Service</h6>
            <h1 className='font-bold'>Our service Area</h1>
            <p>the majority have suffered alteration in some form, by injected humour, or randomised<br/> words which don't look even slightly believable. </p>
             {/* sort */}
           <button className ='bg-orange-600 px-2 py-2 text-white rounded-xl' onClick={()=>setAsc(!asc)}>
            {asc?'price:High To Low' :'Price:Low To High'}
           </button>
           </div>
          
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                services.map(service=><ServiceCard
                key={service._id}
                service={service}
                ></ServiceCard>)
            }
           </div>
        </div>
    );
};

export default Services;