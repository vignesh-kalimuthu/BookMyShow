import axios from "axios";
import React, { useState, useEffect } from "react";
import EntertainmentCardSlider from "../components/Entertainment/EntertainmentCard.component";
import PosterSlider from "../components/PosterSlider/PosterSlider.component";
import {ImFacebook2} from "react-icons/im";
import {GrInstagram} from "react-icons/gr";
import {AiOutlineTwitter, AiFillYoutube, AiFillLinkedin} from "react-icons/ai";
import {FaPinterest} from "react-icons/fa"

const HomePage = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [premierMovies, setPremierMovies] = useState([]);
  const [onlineStreamEvents, setOnlineStreamEvents] = useState([]);

  useEffect(() => {
    const requestPopularMovies = async () => {
      const getPopularMovies = await axios.get("/movie/popular");
      setPopularMovies(getPopularMovies.data.results);
    };
    requestPopularMovies();
  }, []);

  console.log({ popularMovies });
  useEffect(() => {
    const requestTopRatedMovies = async () => {
      const getTopRatedMovies = await axios.get("/movie/top_rated");
      setPremierMovies(getTopRatedMovies.data.results);
    };

    requestTopRatedMovies();
  }, []);

  useEffect(() => {
    const requestUpcomingMovies = async () => {
      const getUpcomingMovies = await axios.get("/movie/upcoming");
      setOnlineStreamEvents(getUpcomingMovies.data.results);
    };

    requestUpcomingMovies();
  }, []);

  

  

  return (
    <>
      <div className="flex flex-col gap-10">
        <div className="container mx-auto px-4 m-4" >
          <h1 className="text-2xl font-bold text-gray-800 p-6">
            {" "}
            The Best of Entertainment
          </h1>
          <EntertainmentCardSlider />
        </div>

        <div className="bg-navCol-200 py-16">
          <div className="container mx-auto px-4 ">
            <div className="flex ">
              <img
                src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
                alt="Rupay"
                className="w-full h-full"
              />
            </div>
            <PosterSlider
              images={popularMovies}
              title="Premiers"
              subtitle="Brand New Releases Every Friday "
              isDark
            />
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <PosterSlider
          images={premierMovies}
          title=" Outdoor Events"
          isDark={false}
        />
      </div>

      <div className="container mx-auto px-4">
        <PosterSlider
          images={onlineStreamEvents}  
          title="Online Streaming Events"
          isDark={false}
        />
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

export default HomePage;  
