import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import AddEvents from '../../components/addEvents/AddEvents'

const NewRequest = () => {
  return (
    <div className='app'>
      <Navbar />
      <div className='hero'>
        <Sidebar />
        <AddEvents />
      </div>
    </div>

  )
}

export default NewRequest