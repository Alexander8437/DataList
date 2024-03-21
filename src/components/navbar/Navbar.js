import React from 'react';
import { GoBell } from "react-icons/go";
import './navbar.css'
import { Link } from 'react-router-dom';
import img from "../../image/profile.jpg"

const Navbar = () => {

  const profile =
  {
    name: "Alexander Dung",
    image: img
  }

  return (
    <nav>
      <ul style={{ display: 'flex', listStyleType: 'none', padding: 0 }}>
        <li style={{ marginRight: "100px" }}>
          <Link to='/' style={{ color: "black", border: "1px solid black", padding: "4px" }}>
            Home
          </Link>
        </li>
        <li style={{ marginRight: 20 }}>
          <GoBell className='bell-icon' />
        </li>
        <li style={{ marginRight: 20 }}>
          <div className='profileName'>
            <p style={{ display: "flex", gap: "5px", justifyContent: "center", alignItems: "center" }}>
              <span>Hi </span> <p style={{ color: "darkgreen", fontSize: "medium" }}> {profile.name}</p>
            </p>
            <p>Welcome back!</p>
          </div>
        </li>
        <li style={{ marginRight: 20 }}>
          <img src={profile.image} className='profileImage' alt='profile' />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;