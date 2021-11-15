import React,{useState,useEffect} from "react";
import HeroSlider from "react-slick";
import axios from "axios";

import { BiChevronRight, BiChevronLeft } from 'react-icons/bi';


// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroCarousal = () => {
  

      const [images, setImages] = useState([]); 
 
      useEffect(() => {
        const requestNowPlayingMovies = async() => {
          const getImages = await axios.get("/movie/now_playing");
          console.log(getImages);
          setImages(getImages.data.results);

        };
        requestNowPlayingMovies();
      }, []);       
          

  
        const settingsLg = {
            arrows: true,
	    dots:false,
            autoplay: true,
            centerMode: true,
            centerPadding: "300px",
            infinite: true,
            speed:300,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: (
              <div>
                <div className='next-slick-arrow bg-black   bg-opacity-50 backdrop-filter rounded-full  absolute'>
                  <BiChevronRight/>
                </div>
              </div>
            ),  
            prevArrow: (
              <div>
                <div className='prev-slick-arrow bg-black  bg-opacity-50 backdrop-filter rounded-full  absolute'>
                  <BiChevronLeft/>
                </div>
              </div>
            )
        };
  
        const settings = {
            arrows: true,
            autoplay: true,
	    dots:false,
            infinite: true,
            speed: 300,
            slidesToShow: 1,  
            slidesToScroll: 1,
            nextArrow: (
              <div>
                <div className='next-slick-arrow bg-black  bg-opacity-50 backdrop-filter text-sm rounded-full  absolute'>
                  <BiChevronRight/>
                </div>
              </div>
            ),
            prevArrow: (
              <div>
                <div className='prev-slick-arrow bg-black bg-opacity-50 backdrop-filter rounded-full  text-sm absolute'>
                  <BiChevronLeft/>
                </div>
              </div>
            )
        };

        
        return ( 
    <>
	   <div className="lg:hidden">
          <HeroSlider {...settings }> 
          {images.map( (image) => (
			           <div className="w-full h-64  md:h-80 py-3  ">
				                 <img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`} 
                              alt="testing" className="w-full h-full rounded-md" />
				         </div>
                           ) 
                        )
                      }
		  </HeroSlider>
		</div>
	    <div className="hidden lg:block ">
			<HeroSlider {...settingsLg }> 
                   { images.map((image) => (
					     <div className="w-full h-96 px-2 py-3">
							<img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`}
                   alt="testing" className="w-full h-full rounded-md" />
					     </div>) ) 
                         }
    		</HeroSlider>
		 </div>
    </>  
   )
};
export default HeroCarousal;  
