import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import moment from "moment";
import image1 from '../../../assets/1.png';
import image2 from '../../../assets/2.png';
import image3 from '../../../assets/3.png';
import { FaCalendarAlt } from "react-icons/fa";

const LeftSideNav = () => {

  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch('categories.json')
      .then(res => res.json())
      .then(data => setCategories(data))
  }, [])

  return (
    <div >

      <div>
        <h2 className="text-2xl mb-8 ">All Categories</h2>
      </div>

      {
        categories.map(category =>
          <NavLink className="block ml-4 text-xl font-semibold mb-4 px-4"
            key={category.id}
            to={`/category/ ${category.id}`}

          >
            {category.name}
          </NavLink>)
      }
      {/* card 01  */}
      <div className="space-y-6 mt-6 mb-5">
        <img src={image1} alt="" />

        <h2 className="text-xl font-semibold">
          Bayern Slams Authorities Over Flight Delay to Club World Cup
        </h2>

        <p className="flex items-center gap-4">
          <p className="font-medium text-base ">Sports</p>

          <p><FaCalendarAlt></FaCalendarAlt></p>
          <p>   {moment().format(" MMM D, YYYY")}</p>
        </p>
      </div>
      {/* card 02  */}
      <div className="space-y-6 mt-6 mb-5">
        <img src={image2} alt="" />

        <h2 className="text-xl font-semibold">
          Bayern Slams Authorities Over Flight Delay to Club World Cup
        </h2>

        <p className="flex items-center gap-4">
          <p className="font-medium text-base ">Sports</p>

          <p><FaCalendarAlt></FaCalendarAlt></p>
          <p>   {moment().format(" MMM D, YYYY")}</p>
        </p>
      </div>
      {/* card 03  */}
      <div className="space-y-6 mt-6 mb-5">
        <img src={image3} alt="" />

        <h2 className="text-xl font-semibold">
          Bayern Slams Authorities Over Flight Delay to Club World Cup
        </h2>

        <p className="flex items-center gap-4">
          <p className="font-medium text-base ">Sports</p>

          <p><FaCalendarAlt></FaCalendarAlt></p>
          <p>   {moment().format(" MMM D, YYYY")}</p>
        </p>
      </div>




    </div>
  );
};

export default LeftSideNav;
