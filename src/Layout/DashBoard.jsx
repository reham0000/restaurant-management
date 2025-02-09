import {
  FaBook,
  FaCartShopping,
  FaEnvelope,
  FaHouseMedical,
  FaList,
  FaUsers,
  FaUtensils,
} from "react-icons/fa6";
import { MdOutlineReviews, MdMenuBook } from "react-icons/md";
import { TbReservedLine } from "react-icons/tb";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const DashBoard = () => {
  const [cart] = useCart();

  // TODO: get isAdmin value from the database.
  const [isAdmin] = useAdmin();

  return (
    <div className="flex">
      {/* dashboard side bar */}
      <div className="w-64 min-h-screen bg-orange-400">
        <h1 className="text-4xl font-semibold p-2 text-center">Tasty Treat</h1>
        <p className="text-xl font-semibold text-center">Restaurant</p>
        <ul className="menu p-4">
          {isAdmin ? (
            <>
              <li>
            <NavLink to="/dashboard/adminHome">
              {" "}
              <FaHouseMedical></FaHouseMedical>Admin Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/addItems">
              {" "}
              <FaUtensils></FaUtensils> Add Items
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/manageItems">
              <FaList></FaList> Manage Items
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/bookings">
              {" "}
              <FaBook></FaBook>
              Manage Bookings
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/users">
              {" "}
              <FaUsers></FaUsers> All Users
            </NavLink>
          </li>
            </>
          ) : (
            <>
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
                <NavLink to="/dashboard/PaymentHistory">
                  {" "}
                  <FaList></FaList> Payment History
                </NavLink>
              </li>
            </>
          )}
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
