import React from 'react';
import { Link } from 'react-router-dom';

const AllCard = ({card}) => {
    
const { id ,image,category,title,description,price,donate,bg,textColors,categorybg,descriptionbg} = card || {}

    return (
        <div>
           <Link to={`/card/${id}`}>
           <div style={{
            backgroundColor:bg,
           }} className="relative flex w-80 flex-col rounded-xl bg-clip-border text-gray-700 shadow-md gap-5 m-3">
  <div className="relative mx-4 mt-4  overflow-hidden rounded-xl  bg-clip-border text-gray-700">
    <img
      src={image}
      className="h-full w-full object-cover"
    />
  </div>
  <div className="p-6">
    <div className="mb-2 flex items-center justify-between">
      <p style={{backgroundColor:categorybg,color:textColors}} className="block font-sans text-base font-medium leading-relaxed  antialiased">
        {category}
      </p>
    =<p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
      {donate}
      </p>
    </div>
    <p style={{color:descriptionbg}} className="block font-sans text-sm font-normal leading-normal  antialiased opacity-75">
     {description}
    </p>
  </div>
  
</div>

           </Link>
        </div>
    );
};

export default AllCard;