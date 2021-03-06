import React from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar/navbar.component";
import HeroCarousal from "../components/HeroCarousal/HeroCarousal.component";
const DefaultLayout = (props) => {
  return (
    <>
      <Navbar />
      <header class="text-white body-font bg-gray-900">
        <div class="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
         
          <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 flex flex-wrap items-center text-base justify-center">
          <Link to={`/`}> <a class="mr-5 hover:text-gray-400 text-xl">Home</a>  </Link>
          <Link to={`/movie/${props.id}`}> <a class="mr-5 hover:text-gray-400 text-xl">Movie</a> </Link>
          <Link to={`/plays`}> <a class="mr-5 hover:text-gray-400 text-xl">Plays</a> </Link>
          
          </nav>
         
        </div>
      </header>

      <HeroCarousal />
      {props.children}
    </>  
  );
};
export default DefaultLayout;
