import React from 'react'
import Eventbar from '../eventbar/Eventbar'
import './addEvents.css'

const AddEvents = () => {
  const eventData = {
    eventName: 'Event Name',
    startDate: '12-12-2023',
    endDate: '15-12-2023',
    venueAddress: 'Some Location 12, Name Here, City, State',
    rooms: [
      {
        positions: [
          {
            position: 'Camera 1 (Video)',
            time: '9 am - 7 pm',
            info: 'LP default',
            quantity: 20,
          },
          {
            position: 'Camera 2 (Video)',
            time: '9 am - 7 pm',
            info: 'LP default',
            quantity: 20,
          },
          {
            position: 'Camera 3 (Video)',
            time: '9 am - 7 pm',
            info: 'LP default',
            quantity: 20,
          },
          {
            position: 'Camera 4 (Video)',
            time: '9 am - 7 pm',
            info: 'LP default',
            quantity: 20,
          },
          {
            position: 'Camera 5 (Video)',
            time: '9 am - 7 pm',
            info: 'LP default',
            quantity: 20,
          },
          {
            position: 'Camera 6 (Video)',
            time: '9 am - 7 pm',
            info: 'LP default',
            quantity: 20,
          },
          {
            position: 'Camera 7 (Video)',
            time: '9 am - 7 pm',
            info: 'LP default',
            quantity: 20,
          },
          {
            position: 'Camera 8 (Video)',
            time: '9 am - 7 pm',
            info: 'LP default',
            quantity: 20,
          },
          {
            position: 'Camera 9 (Video)',
            time: '9 am - 7 pm',
            info: 'LP default',
            quantity: 20,
          }]
      }
    ]
  }
  return (
    <div className='addEvent'>
      <h1>{eventData.eventName} (Venue Details)</h1>
      <Eventbar />
      <div className='assignHead'>
        <div className='assignCoordinate'>
          <p>Assign Coordinator</p>
          <select id='assignCoordinate' name='assignCoordinate'>
            <option>Select Coordinate</option>
          </select>
          <p style={{ fontSize: "x-small" }}>Add New Coordinate</p>
        </div>
        <div className='assignCoordinateHead'>
          <p>Event Name (Venue here)</p>
          <p className='eventDate'>
            <p>
              <span>Start -</span> <input defaultValue={eventData.startDate} />
            </p>
            <p>
              <span>Ends -</span><input defaultValue={eventData.endDate} />
            </p>
          </p>
          <p className='eventVenue'>Venue Address: {eventData.venueAddress}</p>
        </div>
      </div>
      <h4>Assign Contractor</h4>
      <div className='meetingHero'>
        <div className='meetingList'>
          <ul>
            <li>Meeting 1</li>
            <li>Meeting 2</li>
            <li>Meeting 3</li>
            <li>Meeting 4</li>
            <li>Meeting 5</li>
          </ul>
        </div>
        {eventData.rooms.map((room, index) => (<>
          <div key={index}>
            <h5>Positions</h5>
            <table>
              <thead>
                <tr>
                  <th>Position</th>
                  <th>Time</th>
                  <th>Info</th>
                  <th colSpan={2}>Quantity</th>
                </tr>
              </thead>
              <tbody>
                {room.positions.map((position, i) => (
                  <tr key={i}>
                    <td>{position.position}</td>
                    <td>{position.time}</td>
                    <td>{position.info}</td>
                    <td>{position.quantity}</td>
                    <td><select id='contractor' name='contractor'>
                      <option>Select Contractor</option>
                    </select></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
        ))}
      </div>
      <div className='eventSubmit'>
        <button>Save Edits</button>
      </div>
    </div>
  )
}

export default AddEvents