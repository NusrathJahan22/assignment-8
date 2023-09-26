import { useEffect, useState } from 'react';
import AllCard from '../component/pages/AllCard/AllCard';
import AddDonation from '../component/pages/AddDonation/AddDonation';

const Donation = () => {

    const [donation , setDonation] = useState([]);
    const [noFound ,setNoFound]= useState(false);
    const [isShow ,setIsShow] =useState(false)

useEffect(() =>{
    const donationItems= JSON.parse(localStorage.getItem("donation"));
    if(donationItems){
        setDonation(donationItems)
    }else{
        setNoFound('No Donate');
    }
},[]);
console.log(donation);



    return (
        // eslint-disable-next-line no-unreachable
        <div>{noFound? <p className='h-[80vh] flex justify-center items-center'>{noFound}</p> : 
        <div className='grid grid-cols-1 lg:grid-cols-2  mx-auto gap-3'>
                    {
                        isShow? donation.map(card => <AddDonation key ={card.id} card={card}></AddDonation>):
                        donation.slice(0,4).map(card => <AddDonation key ={card.id} card={card}></AddDonation>)
                    }
                    
                 </div>}
                    {
                    donation.length > 4 && <button onClick={() => setIsShow(!isShow)} className='p-5 bg-green-700 rounded-lg mx-auto block'>{isShow ? "See Less":"See More"}</button>
                }
               {
                donation.forEach(card=> <AddDonation card={card}></AddDonation>)
               }
        </div>
    )
};

export default Donation;