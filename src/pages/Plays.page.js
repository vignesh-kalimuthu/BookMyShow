import React from 'react';
import PlaysFilter from '../components/PlaysFilters/PlaysFilters.component';
import PlaysPoster from '../components/Poster/PlaysPoster.component';

import {ImFacebook2} from "react-icons/im";
import {GrInstagram} from "react-icons/gr";
import {AiOutlineTwitter, AiFillYoutube, AiFillLinkedin} from "react-icons/ai";
import {FaPinterest} from "react-icons/fa"  
const Plays = () => {
  return (
    <>
      <div className='container mx-auto px-4 bg-vaish-900  bg-gray-50 '>
        <div className='w-full lg:flex lg:flex-row-reverse'>
          <div className='lg:w-8/12 mt-9'>
            <h2 className='text-2xl font-bold mb-4'>Plays in Bhubaneswar</h2>
            <div className='flex flex-wrap'>
              <div className='w-1/2 md:w-1/3 my-3 lg:w-1/4'>
                <PlaysPoster
                  src='https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VGh1LCAyMSBPY3Qgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:oi-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,ox-15,oy-15,ow-50/et00316131-stvumyphdw-portrait.jpg'
                  title='Tvk Cultural presents Ponniyin Selvan'
                  subtitle='Tamil ₹300'
                />
              </div>
              <div className='w-1/2 md:w-1/3 my-3 lg:w-1/4'>
                <PlaysPoster
                  title='TVK Presents Amarar Kalki '
                    subtitle='Tamil ₹199'
                  src='https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyMyBPY3Qgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00315707-rqpsgwxemm-portrait.jpg'
                />
              </div>
              <div className='w-1/2 md:w-1/3 my-3 lg:w-1/4'>
                <PlaysPoster
                  title='Tvk Cultural presents Ponniyin Selvan'
                  subtitle='Tamil ₹300'
                  src='https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNCBPY3Q%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00310368-bprzbkxdue-portrait.jpg'
                />
              </div>
              <div className='w-1/2 md:w-1/3 my-3 lg:w-1/4'>
                <PlaysPoster
                  title='Ranga Shankara'
                  subtitle='Kannada ₹150'
                  src='https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyMyBPY3Qgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00316263-cbrzeytcwa-portrait.jpg'
                />
              </div>
              <div className='w-1/2 md:w-1/3 my-3 lg:w-1/4'>
                <PlaysPoster
                  src='https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyMyBPY3Qgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00314727-qhmcpmappx-portrait.jpg'
                  title='Tvk Cultural presents Ponniyin Selvan'
                  subtitle='Tamil ₹300'
                />
              </div>
              <div className='w-1/2 md:w-1/3 my-3 lg:w-1/4'>
                <PlaysPoster
                  title='TVK Presents Amarar Kalki '
                  subtitle='Tamil ₹199'
                  src='https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyMyBPY3Q%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00315896-tcmkeeskcb-portrait.jpg'
                />
              </div>
              <div className='w-1/2 md:w-1/3 my-3 lg:w-1/4'>
                <PlaysPoster
                  title='Tvk Cultural presents Ponniyin Selvan'
                  subtitle='Tamil ₹300'
                  src='https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxMyBOb3Y%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00316159-kqdcdgwtwe-portrait.jpg'
                />
              </div>
              <div className='w-1/2 md:w-1/3 my-3 lg:w-1/4'>
                <PlaysPoster
                  title='Ranga Shankara'
                  subtitle='Kannada ₹150'
                  src='https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyMyBPY3Qgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00314369-yhhpvqsaab-portrait.jpg'
                />
              </div>
              <div className='w-1/2 md:w-1/3 my-3 lg:w-1/4'>
                <PlaysPoster
                  src='https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAzMCBPY3Qgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00316017-meqkwtxdnc-portrait.jpg'
                  title='Tvk Cultural presents Ponniyin Selvan'
                  subtitle='Tamil ₹300'
                />
              </div>
              <div className='w-1/2 md:w-1/3 my-3 lg:w-1/4'>
                <PlaysPoster
                  title='TVK Presents Amarar Kalki '
                  subtitle='Tamil ₹199'
                  src='https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxMiBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00314523-lychsakbav-portrait.jpg'
                />
              </div>
              <div className='w-1/2 md:w-1/3 my-3 lg:w-1/4'>
                <PlaysPoster
                  title='Tvk Cultural presents Ponniyin Selvan'
                  subtitle='Tamil ₹300'
                  src='https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyMCBOb3Y%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00316353-mapmvnqpyt-portrait.jpg'
                />
              </div>
              <div className='w-1/2 md:w-1/3 my-3 lg:w-1/4'>
                <PlaysPoster
                  title='Ranga Shankara'
                  subtitle='Kannada ₹150'
                  src='https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxOCBTZXAgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:oi-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,ox-15,oy-15,ow-50/et00304172-pclggvbndr-portrait.jpg'
                />
              </div>
            </div>
          </div>

          <div className='lg:w-1/4 m-9 bg-white text-xl gap-4'>
            <h2 className='text-2xl font-bold mb-4'>Filters</h2>
            <div className='mb-4 p-2 '>
              <PlaysFilter
                title='Date'
                tags={['Today', 'Tomorrow', 'This weekend']}
              />
            </div>
            <div className='mb-4'>
              <PlaysFilter title='Language' tags={['Tamil', 'Kannada']} />
            </div>
            <div className='mb-4'>
              <PlaysFilter title='Categories' tags={['Theatre']} />
            </div>
            <div className='mb-4'>
              <PlaysFilter
                title='Genres'
                tags={[
                  'Drama',
                  'Adaption',
                  'Historical',
                  'Online Streaming Plays',
                ]}
              />
            </div>
            <div className='mb-4'>
              <PlaysFilter
                title='More Filters'
                tags={['Online Streaming', 'Kids Allowed', 'Outdoor Events']}
              />
            </div>
            <div className='mb-4'>
              <PlaysFilter
                title='Prices'
                tags={['Free', '0 - 500', '501 - 2000', 'Above 2000']}
              />
            </div>
            <div className="border-2 border-red-400 p-1">
                          <button className="text-center w-full h-full  text-red-400">Browse By Venues</button>
                      </div>
          </div>
        </div>
      </div>
      <footer className=" p-9 w-auto h-auto bg-black bg-opacity-75 hidden lg:block">
        <div className="p-4 m-5 text-left text-gray-400">
          <h3>Online Booking </h3>
          <h6>
            Online Movie Ticket Booking Mumbai | Online Movie Ticket Booking
            Delhi | Online Movie Ticket Booking Bengaluru | Online Movie Ticket
            Booking Hyderabad| Online Movie Ticket Booking Chennai | Online Movie
            Ticket Booking Kolkata | Online Movie Ticket Booking Noida | Online
            Movie Ticket Booking Ahmedabad |  Online Movie Ticket Booking Pune
          </h6>
          <br /> <br />

          <h3>MOVIES BY GENRE</h3>
          <h6>
            Best Action Movies| Best Romantic Movies| Best Comedy Movies| Best
            Adult Movies| Best Adventure Movies| Best Biography Movies| Best
            Classic Movies| Best Crime Movies| Best Drama Movies| Best Family
            Movies| Best Fantasy Movies| Best History Movies| Best Musical
            Movies| Best Mystery Movies| Best Sci-Fi Movies| Best Suspense
            Movies| Best Thriller Movies| Best Western Movies
          </h6>
          <br/><br/>

          <h3>POPULAR MOVIES BY LANGUAGE</h3>
          <h6>
            Popular Hindi Movies | Popular English Movies | Popular Marathi
            Movies | Popular Bengali Movies | Popular Tamil Movies | Popular
            Telugu Movies | Popular Malayalam Movies | Popular Bhojpuri Movies |
            Popular Kannada Movies | Popular Punjabi Movies | Popular Gujarati
            Movies | Popular Sindhi Movies
          </h6>
       </div>
      <div class=" p-4 flex justify-center">
          <ul class=" flex flex-row gap-5 p-5 m-5 text-3xl  text-gray-400">
             <li><a href="https://www.facebook.com/BookMyShowIN"><ImFacebook2/></a></li>
             <li><a href="https://www.instagram.com/bookmyshowin/"><GrInstagram/></a></li>
             <li><a href="https://www.pinterest.com/bookmyshow/"><FaPinterest/></a></li>
             <li><a href="https://www.youtube.com/user/BookMyShow/featured "><AiFillYoutube/></a></li>
             <li><a href="https://www.linkedin.com/company/bookmyshow/"><AiFillLinkedin/></a></li>
             <li><a href="https://twitter.com/BookMyShow/"><AiOutlineTwitter/></a></li>
           </ul>
       </div>
    </footer>
    </>
  );
};

export default Plays;
