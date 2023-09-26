import React from 'react';

const Banner = () => {
//   const handelSearch=()=>{
// const searchField=document.getElementById('search-Field');
// const searchText =searchField.value;
// console.log(searchText)
//   }
    return (
      <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/1dcygBP/Rectangle-4281.png)'}}>
  <div className="hero-overlay bg-opacity-80"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="">
      <h1 className="mb-5 text-5xl font-bold text-black block">I Grow By Helping People In Need</h1>
       <p>
      <input  type="text" placeholder="Search Here" className="input input-bordered w-full max-w-xs nowrap" />
      <button  className="btn bg-red-500 ">Search</button>
      </p>
      
    </div>
  </div>
</div>
    )
}
                  

export default Banner;