import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

export default function Home() {
  const [name, setName] = useState('');
  const [slot, setSlot] = useState('Screen1');
  const [timing, setTiming] = useState('');
  const [bookingDate, setbookingDate] = useState('');
  const Router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const obj = { name, slot, timing, bookingDate };
      console.log(obj);
      const response = await axios.post('http://localhost:5000/api/book', obj);
      if (response.data) {
        Router.push('/getTicket');
      }
      alert('Ticket booked successfully!');
    } catch (error) {
      console.error('Error booking ticket:', error);
      alert('Error booking ticket: ' + error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <form className="bg-white p-8 shadow-md rounded-md max-w-md w-full" onSubmit={handleSubmit}>
    <h3 class="mb-4 text-lg font-extrabold text-gray-900 dark:text-white md:text-5xl "><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Book a</span> Tickets</h3>
    <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
          Name:
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2" htmlFor="slot">
          Slot:
        </label>
        <select
          id="slot"
          value={slot}
          onChange={(e) => setSlot(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg"
          required
        >
          <option value="Screen1">Screen1</option>
          <option value="Screen2">Screen2</option>
          <option value="Screen3">Screen3</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2" htmlFor="timing">
          Timing:
        </label>
        <input
          id="timing"
          type="text"
          value={timing}
          onChange={(e) => setTiming(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2" htmlFor="bookingDate">
          Date:
        </label>
        <input
          id="bookingDate"
          type="date"
          value={bookingDate}
          onChange={(e) => setbookingDate(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg"
          required
        />
      </div>
      <button
      type="submit"
      className="w-full py-3 bg-customColor text-white font-bold rounded-lg hover:bg-opacity-90 transition"
    >
        Book Ticket
      </button>
    </form>
  </div>
  
  );
}
