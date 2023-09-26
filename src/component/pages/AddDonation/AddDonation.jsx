const AddDonation = ({card}) => {
  const { id ,image,category,title,price,donate,bg,textColors,categorybg,btnColor,priceCo} = card || {}
    return (
        <div>
            
            <div style={{
            backgroundColor:bg,
           }} className="card card-side bg-base-100 shadow-xl">
  <figure><img src={image}alt="Movie"/></figure>
  <div className="card-body">
    <h2 style={{backgroundColor:categorybg ,color:textColors}} className="card-title w-20">{category}</h2>
    <p>{title}</p>
    <p style={{color:priceCo}}>${price}</p>
    <div  className="card-actions justify-start">
      <button style={{background:btnColor}} className="btn text-white">View Details</button>
    </div>
  </div>
</div>
  
        </div>
    );
};

export default AddDonation;