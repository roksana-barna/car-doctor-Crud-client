import React from 'react';
import person from "../../../assets/images/about_us/person.jpg"
import parts from "../../../assets/images/about_us/parts.jpg"


const About = () => {
    return (
        <div>
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
   <div className='lg:w-1/2 relative'>
   <img  className="w-3/4  rounded-lg shadow-2xl"src={person}  />
   <img className='w-1/2 absolute top-1/2 right-5 border-8 shadow-2xl border-white' src={parts}alt="" />
   </div>
    <div className='lg:w-1/2'>
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default About;
