
import { BiChevronRight, BiChevronLeft } from 'react-icons/bi';


const settings = {

    autoplay: true,
    speed:300,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 2,
    InitialSlide: 0,

    nextArrow: (
        <div>
          <div className='next-slick-arrow bg-black  p-1  bg-opacity-50 backdrop-filter rounded-full absolute'>
            <BiChevronRight/>
          </div>
        </div>
      ),
      prevArrow: (
        <div>
          <div className='prev-slick-arrow bg-black p-1  bg-opacity-50 backdrop-filter rounded-full  absolute'>
            <BiChevronLeft/>
          </div>
        </div>
      ),
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                nextArrow: (
                    <div>
                      <div className='next-slick-arrow bg-black   bg-opacity-50 backdrop-filter rounded-full  absolute'>
                        <BiChevronRight/>
                      </div>
                    </div>
                  ),
                  prevArrow: (
                    <div>
                      <div className='prev-slick-arrow bg-black  p-1 bg-opacity-50 backdrop-filter rounded-full  absolute'>
                        <BiChevronLeft/>
                      </div>
                    </div>
                  )
            }
        },

        {
            breakpoint: 600,
            settings: {   
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 400,  
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                nextArrow: (
                    <div>
                      <div className='next-slick-arrow bg-black   bg-opacity-50 backdrop-filter rounded-lg  absolute'>
                        <BiChevronRight/>
                      </div>
                    </div>
                  ),
                  prevArrow: (
                    <div>
                      <div className='prev-slick-arrow bg-black  bg-opacity-50 backdrop-filter rounded-lg  absolute'>
                        <BiChevronLeft/>
                      </div>
                    </div>
                  )
            }
        }
    ]
};
export default settings;