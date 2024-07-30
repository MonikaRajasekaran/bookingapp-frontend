// components/GetTicket.js
import { useState } from 'react';
import axios from 'axios';
import styles from '../styles/GetTicket.module.css'; 

function GetTicket() {
  const [tickets, setTickets] = useState([]);
  const [ticketId, setticketId] = useState();


  const fetchTickets = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://localhost:5000/api/ticket/${ticketId}`);
      setTickets(response.data);
    } catch (error) {
      console.error('Error fetching tickets:', error);
    }
  };


  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 py-8">
    <h3 class="mb-4 text-lg font-extrabold text-gray-900 dark:text-white md:text-5xl "><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Get a</span> Tickets</h3>
    <form onSubmit={fetchTickets} className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md">
    <label className="block mb-4">
      <span className="block text-gray-700 font-medium mb-2">Name:</span>
      <input
        type="text"
        value={ticketId}
        onChange={(e) => setticketId(e.target.value)}
        required
        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
      />
    </label>
    <button
      type="submit"
      className="w-full py-2 bg-customColor text-white font-bold rounded-lg hover:bg-customColor transition"
    >
      Get Ticket
    </button>
  </form>

  <div className="mt-8 w-full max-w-2xl bg-white  p-6 rounded-lg shadow-md">
    <div className="mb-6">
      <div className="text-2xl font-bold">{tickets ? tickets.name : ""}</div>
    </div>
    <div className="space-y-4">
      <div className="flex space-x-4">
        <div className="flex-1 p-4 border border-custombg-300 rounded-lg">
          <div className="text-gray-700">{tickets ? tickets.slot : ""}</div>
        </div>
        <div className="flex-1 p-4 border border-gray-300 rounded-lg">
          <div className="text-gray-700">{tickets ? tickets.timing : ""}</div>
        </div>
      </div>
      <div className="flex space-x-4">
        <div className="flex-1 p-4 border border-gray-300 rounded-lg">
          <div className="text-gray-700">{tickets ? tickets.bookingDate : ""}</div>
        </div>
        <div className="flex-1 p-4 border border-gray-300 rounded-lg">
          <div className="text-gray-700">Row</div>
        </div>
        <div className="flex-1 p-4 border border-gray-300 rounded-lg">
          <div className="text-gray-700">Seat</div>
        </div>
      </div>
    </div>
    <div className="mt-8">
      <div className="flex items-center justify-between">
        <div>
        <div className="font-bold">CINEMA TICKET</div>
        <div className="text-gray-500">La Cinemas,Trichy</div>
        </div>
        <div>
          <div className="font-bold">Please Collect the ticket 45mins prior to the show time</div>
          </div>
          {/* <div className="text-gray-500">Ticket once booked cannot be exhanged, cancelled or refunded.  </div> */}
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div className="w-24 h-24 bg-gray-200"></div>
        <div className="flex space-x-4">
          <button className="py-2 px-4 bg-customColor text-white font-bold rounded-lg hover:bg-customColor transition">
           Share Ticket
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

  );
}

export default GetTicket;
