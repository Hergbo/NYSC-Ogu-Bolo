import React from 'react'
import Background from "../assets/Img/background.jpg"
import Image1 from "../assets/Img/group.png"
import Image2 from "../assets/Img/capgirl.png"
import Image3 from "../assets/Img/handshake.png"
import Image4 from "../assets/Img/group2.png"
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const Content = [
  {
    id:1,
    img: Image1,
    title: "Welcome to Ogu/bolo Local Government Area, Rivers State"
  },
  {
    id:2,
    img: Image2,
    title: "Our mission: Impacting lives and making a difference",
  },
  {
    id:3,
    img: Image3,
    title: "As a team, coming together to make the community a better place",
  },
  {
    id:4,
    img: Image4,
    title: "with effective Community Development Services (CDs) activities to Sanitize the Community",
  },

];

const BackgroundImg = {
    background: `url(${Background})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover", 
    
};

const HomePage = () => {
  var settings = {
    dots: true,
    arrows: false,
    Infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div style={BackgroundImg} className='h-[900px] md:h-[700px] lg:h-[658px] '>
      <div className=''>
        <Slider {...settings}>
          {Content.map((data) => (
            <div className='lg:-mt-24 lg:ml-24'>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
                {/* text area  */}
                <div className='flex flex-col justify-center order-2 lg:order-1 p-4 text-center lg:text-left md:mr-4 lg:ml-12'>
                  <h1 className='text-gray-100 font-extrabold md:font-bold text-4xl md:text-5xl lg:text-8xl '>{data.title}</h1>
                </div>

                {/* image are  */}
                <div className='order-1 md:order-1 lg:order-2'>
                  <img src={data.img} alt="" className='lg:w-[550px] lg:ml-20' />
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div className='text-center md:text-end lg:text-start p-4 mt-20 lg:mt-20 md:mr-9 lg:ml-40'>
          <a href="/register">
            <button className='bg-amber-400 p-4 rounded-2xl shadow-black shadow-md hover:bg-amber-700 hover:scale-115
            text-black font-bold hover:text-white duration-300 lg:text-3xl'>
             Sign-in for Today's CDs
            </button>
          </a>
        </div>
      </div> 
    </div>
  )
}

export default HomePage
