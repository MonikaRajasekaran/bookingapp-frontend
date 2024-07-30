// components/GetTicket.js
import { useState } from 'react';
import axios from 'axios';


function GetTicket() {
  const [tickets, setTickets] = useState([]);

  const fetchTickets = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get('http://localhost:5000/api/tickets');
      setTickets(response.data);
    } catch (error) {
      console.error('Error fetching tickets:', error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-6 max-w-3xl mx-auto bg-gray-50 shadow-lg rounded-xl border border-gray-300">
      <h1 class="mb-4 text-lg font-extrabold text-gray-900 dark:text-white md:text-5xl "><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">All</span> Tickets</h1>
      <button
        onClick={fetchTickets}
        className="bg-customColor text-white font-semibold py-3 px-6 rounded-lg hover:bg-customColor transition-colors mb-4"
      >
        Fetch Tickets
      </button>
      <ul className="w-full space-y-4">
        {tickets.map(ticket => (
          <li
            key={ticket.ticketId}
            className="p-4 bg-white rounded-lg shadow-md border border-gray-200 flex flex-col items-center text-center"
          >
            <div className="text-xl font-semibold text-gray-900">Name:{ticket.name}</div>
            <div className="text-sm text-gray-700">Screen:{ticket.slot}</div>
            <div className="text-sm text-gray-700">Time:{ticket.timing}</div>
            <div className="text-sm text-gray-600">Date:{new Date(ticket.bookingDate).toLocaleDateString()}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GetTicket;
