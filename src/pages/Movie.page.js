import React from "react";
import MovieHero from "../components/MovieHero/MovieHero.component";
import{BiCameraMovie} from "react-icons/bi";

import {ImFacebook2} from "react-icons/im";
import {GrInstagram} from "react-icons/gr";
import {AiOutlineTwitter, AiFillYoutube, AiFillLinkedin} from "react-icons/ai";
import {FaPinterest} from "react-icons/fa"
export const launchRazorPay = () => {
    let options = {
      key:"rzp_test_rAkrH5ljGccbyC",
     amount: 500*100,
     currency: "INR",
     name:"Book My Show Clone",
     description:"Movie Purchase on Rental",
     image:"https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png",
     handler: () =>{
         alert("Payment Done")

     },   
     theme: {color:"#c4242d"}

    };
    let rzp =  new window.Razorpay(options);
    rzp.open();
};
  

const Movie = () => {
   
    return ( 
    <>
        <MovieHero/>
        <div className="my-12 container px-4 lg:w-2/3 lg:ml-64">
            <div className="flex flex-col items-start gap-3">
               <h2 className="text-black font-extrabold text-2xl">About the movie</h2>
               <p className="text-black "> Shang-Chi and The Legend of The Ten Rings features Simu Liu as Shang-Chi, who must confront the past he thought he left behind when he is drawn into the web of the mysterious Ten Rings organization. The film is directed by Destin Daniel Cretton and produced by Kevin Feige and Jonathan Schwartz.</p>
            </div>
            <div className="my-8 " >
                <hr />
            </div>

            <div className="flex flex-col items-start gap-3">
                <h1 className="font-extrabold text-2xl">Applicable Offers</h1>
                
                <div className="flex items-start gap-2 bg-yellow-200 border-2  border-dashed border-yellow-400 w-1/2 p-3"> 
                    <div className="w-8 h-8">
                    <BiCameraMovie className="w-full h-full"/>
                    </div>

                  <div className="flex flex-col items-start">
                    <h3 className="font-bold text-l">Filmy Pass </h3>
                    <p className="text-gray-800 text-sm">Get Rs.75* off on 3 movies you buy/rent on stream. Buy Filmy Pass @Rs.99</p>
                  </div>
                </div>

            </div>
            <button onClick={launchRazorPay} class=" mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-8 rounded">Book Tickets</button>
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
export default Movie;
