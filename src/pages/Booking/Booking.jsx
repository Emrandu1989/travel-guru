import slide1 from '../../assets/images/Rectangle 1.png';
const Booking = () => {

  return (
    <>
        <div className="hero min-h-screen" style={{backgroundImage: `url(${slide1})`}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="flex gap-12">
    
    <div className='w-72 -ml-24 space-y-4  text-white'>
                 <h2 className='text-4xl font-bold text-blue-200'>Cox's bazar</h2>
                 <p>Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...</p>
               
              </div>
              <div className='ml-24'>
               <div className='text-white'>
               <h3 className='text-2xl text-yellow-500'>Origin</h3>
               <input type="text" placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs" />
               </div>
                 <div className='text-white'>
                 <h3 className='text-2xl text-yellow-500'>Destination</h3>
                 <input type="text" placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs" />
                 </div>
                 <div className='flex gap-3 my-5'>
                      
                     <div className=''>
                        <h2 className='text-2xl text-yellow-500'>From</h2>
                     <input className='px-3 py-1 rounded-lg' type="date" name="" id="" />
                     </div>
                       <div>
                        <h2 className='text-2xl text-yellow-500'>To</h2>
                       <input className='px-3 py-1 rounded-lg' type="date" name="" id="" />
                       </div>
                 </div>
                 <button className='btn bg-yellow-500 w-full'>Start Booking</button>
              </div>
    
  </div>
</div>    
    </>
  );
};

export default Booking;
