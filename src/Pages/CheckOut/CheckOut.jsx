// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const CheckOut = () => {
    const {user}=useContext(AuthContext);
    const service =useLoaderData();
    const {title,price,_id,img}=service;
    const handleBookService=event=>{
        event.preventDefault();
        const form = event.target;
        const name =form.name.value;
        const date = form.date.value;
        const email =user?.email;
        const booking = {
            customerName:name,
            email,
            date,
            img,
            service:title,
            service_id:_id,
            price:price
        }
        console.log(booking);
        // booking data to server /bookings
        fetch('https://car-doctor-crud-server-alpha.vercel.app/bookings',{
          method:'POST',
          headers:{
            'content-type':'application/json'
          },
          body:JSON.stringify(booking)
        })
        .then(res=>res.json())
        .then(data=>{
          console.log(data);
          if(data.insertedId){
            alert('service book successfully')
          }
        })

    }
    return (
       
           <div>
            <h2 className='text-center font-bold text-3xl'> Book Services : <span className='text-center font-bold text-3xl text-orange-500'>{title}</span></h2>
             <div className="card-body">
                
             <form onSubmit={handleBookService}>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="name" name="name" defaultValue={user?.displayName} className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Date</span>
                </label>
                <input type="date" placeholder=""  name="date"className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email"  defaultValue={user?.email} name="email" className="input input-bordered" />
                
              </div>
             
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Due Amount</span>
                </label>
                <input type="text" defaultValue={'$'+price} name="due" className="input input-bordered" />
                
              </div>
            </div>
              <div className="form-control mt-6 ">
                <input className='bg-orange-600 text-white p-2 rounded-xl' type="submit" value="Order Confirm" />
              </div>
             </form>
        
      </div>
           </div>
    );
};

export default CheckOut;