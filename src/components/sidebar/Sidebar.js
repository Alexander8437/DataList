import React, { useState } from 'react'
import './sidebar.css'

const Sidebar = () => {
  const [otherIndex, setOtherIndex] = useState(null)

  const toggleDropdown = (num) => {
    if (otherIndex === num) {
      setOtherIndex(null)
    } else {
      setOtherIndex(num)
    }
  };

  const items = [
    {
      title: "Events",
      submenu: [
        { title: "New Request" },
        { title: "Estimate" },
        { title: "Events" },
        { title: "Partial Requests" }
      ]
    },
    { title: "Positions" },
    { title: "Contractors" },
    {
      title: "Users",
      submenu: [
        { title: "Admins" },
        { title: "Clients" },
        { title: "Coordinators" }
      ]
    },
    { title: "Profile" }
  ];

  return (
    <aside>
      <div className="sidebar">
        <ul className='mainList'>
          {items.map((item, index) => (
            <li key={index}>
              <button onClick={item.submenu ? () => { toggleDropdown(index) } : null}>
                {item.title}
              </button>
              {item.submenu && otherIndex === index && (
                <ul className='subMenu'>
                  {item.submenu.map((subitem, i) => (
                    <li key={i}>
                      <p>
                        {subitem.title}
                      </p>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        <div className='logout'>
          <button>Logout</button>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar