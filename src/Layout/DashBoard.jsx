import {

  FaCartShopping,
  FaEnvelope,
  FaHouseMedical,
  FaList,
} from "react-icons/fa6";
import { MdOutlineReviews,MdMenuBook  } from "react-icons/md";
import { TbReservedLine } from "react-icons/tb";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";

const DashBoard = () => {

    const [cart] = useCart();

    // TODO: get isAdmin value from the database.
    const isAdmin = true;

  return (
    <div className="flex">
        
      {/* dashboard side bar */}
      <div className="w-64 min-h-screen bg-orange-400">
      <h1 className="text-4xl font-semibold p-2 text-center">Tasty Treat</h1>
      <p className="text-xl font-semibold text-center">Restaurant</p>
        <ul className="menu p-4">
          <li>
            <NavLink to="/dashboard/userHome">
              {" "}
              <FaHouseMedical></FaHouseMedical>User Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/reservation">
              {" "}
              <TbReservedLine /> Reservation
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/cart">
              <FaCartShopping></FaCartShopping> My Cart ({cart.length})
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/review">
              {" "}
              <MdOutlineReviews />
              Add a Review
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/bookings">
              {" "}
              <FaList></FaList> My Booking
            </NavLink>
          </li>
          {/* shared nav links */}
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              {" "}
              <FaHouseMedical></FaHouseMedical>Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/salad">
              {" "}
              <MdMenuBook /> Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/contact">
              {" "}
              <FaEnvelope></FaEnvelope> Contact
            </NavLink>
          </li>
        </ul>
      </div>
      {/* dashboard content */}
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashBoard;
