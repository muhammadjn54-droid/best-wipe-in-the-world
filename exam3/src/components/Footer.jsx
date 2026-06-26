import React from "react";
import footer from "../pages/assets/Logo (24).png";
export default function Footer() {
  return (
    <footer>
      <div className="flex items-center justify-center ">
        <img src={footer} alt="DubaiRealty" />
      </div>

      <div className="lg:flex justify-between w-[95%] mk ">
        <div className="par">
          <h1 className=" font-bold text-gray-500">Buy</h1>
          <p className="text-gray-500">Apartment in Dubai</p>
          <p className="text-gray-500">House in Dubai</p>
          <p className="text-gray-500">Apartments in Dubai</p>
          <p className="text-gray-500">Loft in Dubai</p>
          <p className="text-gray-500">Penthouse in Dubai</p>
          <p className="text-gray-500">Villa in Dubai</p>
        </div>
            <div className=" lg:par">
          <h1 className=" font-bold text-gray-500">Services</h1>
          <p className="text-gray-500">Property management in Dubai, UAE</p>
          <p className="text-gray-500">Sell ​​property in Dubai, UAE</p>
          <p className="text-gray-500">Rent property in Dubai, UAE</p>
          <p className="text-gray-500">Investments in Dubai, UAE</p>
          <p className="text-gray-500">Real estate for cryptocurrency in Dubai</p>
          <p className="text-gray-500">Moving to Dubai, UAE</p>
        </div>
        <div className="par">
          <h1 className=" font-bold text-gray-500">Information</h1>
          <p className="text-gray-500">Video</p>
          <p className="text-gray-500">Podcasts</p>
          <p className="text-gray-500">Laws</p>
          <p className="text-gray-500">Questions and answers</p>
          <p className="text-gray-500">Books</p>
          <p className="text-gray-500">Articles</p>
        </div>
        <div className="par">
          <h1 className=" font-bold text-gray-500">About company</h1>
          <p className="text-gray-500">Jobs </p>
          <p className="text-gray-500">Story</p>
          <p className="text-gray-500">Licenses</p>
          <p className="text-gray-500">Why are we</p>
          <p className="text-gray-500">Real estate agency</p>
        </div>
        <div className="par">
          <h1 className=" font-bold text-gray-500">Contact</h1>
          <p className="text-gray-500">964 Worthington Drive</p>
          <p className="text-gray-500">Dubai, UAE</p>
          <p className="text-gray-500">dubairealty@mail.com</p>
          <button className="button-primary">Book a consultation</button>
        </div>
    
      </div>
    </footer>
  );
}
