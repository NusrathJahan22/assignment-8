import React from 'react';
import swal from 'sweetalert';

const OneCard2 = ({card}) => {
    
    const {  id,image,category,title,description,price,donate,backgroundColor} = card || {}

    const handelAddToDonetion=() => {
        console.log()

        const addDonation = [];
       const donationItems= JSON.parse(localStorage.getItem('donation'))
if(!donationItems){
    addDonation.push(card)
    localStorage.setItem('donation', JSON.stringify(addDonation))
    swal("Good job!", "Add Successfully", "success");
}else{
  const isExits =donationItems.find(card => card.id ===id )
  
  if(!isExits){
    addDonation.push(...donationItems,card)
    localStorage.setItem('donation', JSON.stringify(addDonation))
    swal("Good job!", "Add Successfully", "success");
  }else{
    swal("Good job!", "Aready Add", "error");
  }
   
    
}
    }
    return (
                    <div className=''>
                      <div className=" justify-center  mx-auto relative flex max-w-[40rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
              <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none justify-center items-center">
                <img className='w-[800px]'
                  src={image}
                  alt="ui/ux review check"
                />
              </div>
              <div className='bg-black  bg-opacity-30 p-2'>
                <button onClick={handelAddToDonetion} className='bg-red-500 text-lg p-2 rounded-lg'>Donate ${price}</button>
                </div>
              <div className="p-6">
                <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                  {title}
                </h4> 
                
                
              
              </div>
              <div className="flex items-center justify-between p-6">
                <div className="flex items-center -space-x-3">
                  
                
                
                  <div>
                  <p>{description}</p>
                    
                  </div>
                </div>
              
                {/* <button onClick={handelAddToDonetion} className="bg-red-400 rounded-lg p-1">
                Add to Donation
                </button> */}
              </div>
            </div>

                    </div>
    );
};

export default OneCard2;