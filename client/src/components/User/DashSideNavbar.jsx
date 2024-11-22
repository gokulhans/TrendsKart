import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { logout } from "../../redux/actions/userActions";
import { RiDashboardLine } from "react-icons/ri";
import {
  AiOutlineHeart,
  AiOutlineWallet,
  AiOutlineLogout,
} from "react-icons/ai";
import { TiTicket } from "react-icons/ti";
import { MdTrackChanges } from "react-icons/md";
import { BiUser, BiHistory } from "react-icons/bi";
import { GiMailbox } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { FiSettings } from "react-icons/fi";
import { clearUserState } from "@/redux/reducers/userSlice";

const DashSideNavbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    function clearCookie(name) {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    }
    dispatch(clearUserState()); // Clear all items from cart
    // Usage
    clearCookie("user_token");
    dispatch(logout());
    navigate("/");
  };

  return (
    <div className="sm:w-1/5 bg-white h-fit shrink-0 rounded lg:block">
      <NavLink className="side-nav-link-sp" to="/dashboard/">
        <RiDashboardLine />
        Dashboard
      </NavLink>
      <NavLink className="side-nav-link-sp" to="profile">
        <BiUser />
        Account Details
      </NavLink>
      <NavLink className="side-nav-link-sp" to="order-history">
        <BiHistory />
        Order History
      </NavLink>
      {/* <NavLink className="side-nav-link-sp" to="track-order">
        <MdTrackChanges />
        Track Order
      </NavLink> */}
      <NavLink className="side-nav-link-sp" to="wishlist">
        <AiOutlineHeart />
        Wishlist
      </NavLink>
      <NavLink className="side-nav-link-sp" to="addresses">
        <GiMailbox />
        Addresses
      </NavLink>
      {/* <NavLink className="side-nav-link-sp" to="wallet">
        <AiOutlineWallet />
        Wallet
      </NavLink> */}
      {/* <NavLink className="side-nav-link-sp" to="find-coupons">
        <TiTicket />
        Find Coupons
      </NavLink> */}
      {/* <NavLink className="side-nav-link-sp" to="settings">
        <FiSettings />
        Settings
      </NavLink> */}
      <button className="side-nav-link-sp w-full" onClick={handleLogout}>
        <AiOutlineLogout />
        Logout 
      </button>
    </div>
  );
};

export default DashSideNavbar;
