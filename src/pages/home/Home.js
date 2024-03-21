import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar';
import Table from '../../components/table/Table';
import Navbar from '../../components/navbar/Navbar';
import './home.css'
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div className='app'>
      <Navbar />
      <div className='hero'>
        <Sidebar />
        <div className='table-data'>
          <div className='table-head'>
            <div className='tableHeading'>
              <h1>Event Requests</h1>
            </div>
            <p>
              <Link to='/newRequest' style={{
                textDecoration: "none", color: 'black', border: "1px solid black",
                padding: "4px"
              }}>
                New Request
              </Link>
            </p>
            <div className='search-div'>
              <input className='search' id='search' placeholder='search' />
              <button>+</button>
            </div>
          </div>
          <div className='tableContent'>
            <Table />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home