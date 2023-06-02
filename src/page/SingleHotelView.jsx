import React, { useEffect, useState } from "react";
import WrapperContainer from "../components/WrapperContainer";
import { useParams } from "react-router-dom";
import { HotelRoomDetail } from "../Detail/HotelDetail";

const SingleHotelView = () => {

  const { id } = useParams();
  const [hotelDetail, setHotelDetail] = useState([])
  

  useEffect(() => {
    const arrayDetail = [...HotelRoomDetail]
    const hotelDetailFilter = arrayDetail.filter(detail => detail.id === +id )
    setHotelDetail(hotelDetailFilter)
  }, [id])
  
  if (hotelDetail.length === 0) {
    return null; // or a loading indicator
  }

  const { images, capacity, name, description, type, price, extras } = hotelDetail[0];

  return (
    <div
      className="bg-cover bg-center h-screen relative"
      style={{ backgroundImage: `url(${images})` }}
    >
      <WrapperContainer>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className=" absolute">
          <div className="relative container text-[#fcf2de] capitalize">
             <p className="text-center p-4 py-8 text-6xl">The villa natu is an ode to discovery<br/> a love letter to life lived on <br/> the borderlands</p>
             <div className="flex justify-between items-center py-8">
                 <img className="w-1/2 p-4 rounded" src={images} alt="" />
                 <div className="p-4">
                    <span>Rooms : {capacity}</span>
                    <h2 className="text-7xl font-bold">{name}</h2>
                    <span>{description}</span>
                    <p>{type}</p>
                    <p className="text-white text-4xl py-4">${price}</p>
                    <ul className="pl-6">
                      {extras.map((detail, i) => <li className="list-decimal" key={i}>{detail}</li>)}
                    </ul>
                 </div>
             </div>
          </div>
        </div>
      </WrapperContainer>
    </div>
  );
};

export default SingleHotelView;
