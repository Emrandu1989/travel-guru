import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import slide1 from '../../assets/images/Rectangle 1.png';
import slide2 from '../../assets/images/Rectangle 26.png';
import slide3 from '../../assets/images/Rectangle 27.png';
import { FaArrowRight } from "react-icons/fa";
import img1 from '../../assets/images/Sajek.png'
import img2 from '../../assets/images/Sreemongol.png'
import img3 from '../../assets/images/sundorbon.png'
import { Link } from 'react-router-dom';




const Home = () => {
    return (
        <div className='relative'>
                <div className='flex absolute top-[20%] left-[5%] z-10'>
                <div className=' w-96  space-y-4  text-white'>
                 <h2 className='text-4xl font-bold text-blue-200'>Cox's bazar</h2>
                 <p>Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...</p>
                <Link to='/booking'>
                <button className='btn btn-success'>Booking <FaArrowRight /></button> 
                </Link>
              </div>
              <div className='flex gap-3 mr-5'>
                   <div className='relative border border-yellow-400 rounded-xl'>
                        <img src={img1} alt="" />
                         <p className='absolute bottom-3 text-white left-5'>Cox's Bazar</p>
                   </div>
                   <div className='relative border border-green-500 rounded-xl'>
                        <img src={img2} alt="" />
                         <p className='absolute bottom-3 text-white left-5'>Sremongol</p>
                   </div>
                   <div className='relative border border-blue-500 rounded-xl'>
                        <img src={img3} alt="" />
                         <p className='absolute bottom-3 text-white left-5'>Sundarban</p>
                   </div>
                   
              </div>
                </div>
               <Carousel>
                <div>
                    <img src={slide1} />
                     
                </div>
                <div>
                    <img src={slide2} />
                    
                </div>
                <div>
                    <img src={slide3} />
                    
                </div>
            </Carousel>
        </div> 
    );
};

export default Home;