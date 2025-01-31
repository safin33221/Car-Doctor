import React from 'react';
import "../globals.css";
const Banner = () => {
    return (
        <div className='banner h-[400px] w-10/12 mx-auto  bg-cover bg-center rounded-lg flex justify-center items-center  '>
            <div className='w-1/2'>
                <h1 className='text-4xl font-bold text-white'>Affordable <br /> Price For Car <br /> Servicing</h1>
                <p className='text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                <button className="btn text-white bg-[#FF3811] mx-2">Discover More</button>
                <button className="btn text-white btn-outline">Latest Projects</button>
            </div>
        </div>
    );
};

export default Banner;