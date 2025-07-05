import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { RiRestaurantFill } from "react-icons/ri";
import useCart from "../../../hooks/useCart";
import useAdmin from "../../../hooks/useAdmin";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  const [cart] = useCart();

  const handleLogOut = () => {
    logOut().catch((error) => console.log(error));
  };

  const navOptions = (
    <>
      <li>
        <Link
          to="/"
          className="text-gray-800 hover:text-amber-600 font-medium transition-colors duration-200"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="/menu"
          className="text-gray-800 hover:text-amber-600 font-medium transition-colors duration-200"
        >
          Our Menu
        </Link>
      </li>
      <li>
        <Link
          to="/order/salad"
          className="text-gray-800 hover:text-amber-600 font-medium transition-colors duration-200"
        >
          Order Food
        </Link>
      </li>
      {user && isAdmin && (
        <li>
          <Link
            to="/dashboard/adminHome"
            className="text-gray-800 hover:text-amber-600 font-medium transition-colors duration-200"
          >
            Dashboard
          </Link>
        </li>
      )}
      {user && !isAdmin && (
        <li>
          <Link
            to="/dashboard/userHome"
            className="text-gray-800 hover:text-amber-600 font-medium transition-colors duration-200"
          >
            Dashboard
          </Link>
        </li>
      )}
    </>
  );

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 text-xl font-bold">
            <RiRestaurantFill className="text-amber-600 text-2xl" />
            <span className="text-gray-900">Bistro</span>
            <span className="text-amber-600">Boss</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">{navOptions}</ul>

            <div className="flex items-center gap-4 ml-4">
              {/* Cart */}
              <Link
                to="/dashboard/cart"
                className="relative p-2 rounded-full hover:bg-amber-50 transition-colors"
              >
                <FaShoppingCart className="h-5 w-5 text-gray-700 hover:text-amber-600" />
                {cart.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-amber-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {cart.length}
                  </span>
                )}
              </Link>

              {/* User Profile or Login */}
              {user ? (
                <div className="dropdown dropdown-end">
                  <label
                    tabIndex={0}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    {user.photoURL ? (
                      <img
                        src={user.photoURL}
                        alt="Profile"
                        className="w-8 h-8 rounded-full object-cover border-2 border-amber-100"
                      />
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-amber-600 text-white flex items-center justify-center font-medium">
                        {user.displayName?.charAt(0).toUpperCase() || "U"}
                      </div>
                    )}
                  </label>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu p-2 shadow bg-white rounded-box w-48 mt-2 border border-gray-100"
                  >
                    <li>
                      <button
                        onClick={handleLogOut}
                        className="text-gray-700 hover:bg-amber-50"
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              ) : (
                <Link
                  to="/login"
                  className="px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors font-medium shadow hover:shadow-md"
                >
                  Login
                </Link>
              )}
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <Link
              to="/dashboard/cart"
              className="relative p-2 rounded-full hover:bg-amber-50"
            >
              <FaShoppingCart className="h-5 w-5 text-gray-700" />
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-amber-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </Link>

            <label
              htmlFor="mobile-menu"
              className="btn btn-ghost btn-circle p-2 hover:bg-amber-50"
            >
              <FiMenu className="h-5 w-5 text-gray-700 hover:text-amber-600" />
            </label>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <input type="checkbox" id="mobile-menu" className="hidden peer" />
      <div className="md:hidden hidden peer-checked:block bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 py-3">
          <ul className="flex flex-col gap-3">
            {navOptions}
            {user ? (
              <li>
                <button
                  onClick={handleLogOut}
                  className="w-full text-left px-4 py-2 text-gray-700 hover:bg-amber-50 rounded-lg"
                >
                  Logout
                </button>
              </li>
            ) : (
              <li>
                <Link
                  to="/login"
                  className="block px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 text-center shadow hover:shadow-md transition-colors"
                >
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
