import React from 'react'
import data from '../../data.json'
import ReactPaginate from 'react-paginate';
import './table.css'

const Table = () => {
  const [page, setPage] = React.useState(0);

  const startIndex = page * 15;
  const endIndex = startIndex + 15;

  const displayedData = data.slice(startIndex, endIndex);

  const handlePageChange = ({ selected }) => {
    setPage(selected);
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th className='eventName'>Event Name</th>
            <th>Event Start</th>
            <th>Event End</th>
            <th>Client Name</th>
            <th>Contact Info</th>
            <th>Venue</th>
            <th>City</th>
            <th>State</th>
            <th>Zip Code</th>
          </tr>
        </thead>
        <tbody className='tableBody'>
          {displayedData.map((item, index) => (
            <tr key={index}>
              <td className='eventName'>{item.eventName}</td>
              <td>{item.eventStart}</td>
              <td>{item.eventEnd}</td>
              <td>{item.clientName}</td>
              <td>{item.contactInfo}</td>
              <td>{item.venue}</td>
              <td>{item.city}</td>
              <td>{item.state}</td>
              <td>{item.zipCode}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <ReactPaginate

        id="page"
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageChange}
        pageRangeDisplayed={5}
        pageCount={Math.ceil(data.length / 15)}
        previousLabel="<"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageLinkClassName="page-num"
        previousLinkClassName="page-num"
        nextLinkClassName="page-num"
        activeLinkClassName="active"
      />
    </>
  )
}

export default Table