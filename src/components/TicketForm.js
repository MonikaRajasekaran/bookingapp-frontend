import { useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [name, setName] = useState('');
  const [slot, setSlot] = useState('Screen1');
  const [timing, setTiming] = useState('');
  const [bookingDate, setBookingDate] = useState('');
  const [tickets, setTickets] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const obj = ({name,slot, timing, bookingDate})
      console.log(obj)
      const response = await axios.post('http://localhost:5000/api/book',{name,slot, timing, bookingDate});
      console.log(response)
      alert('Ticket booked successfully!');
    } catch (error) {
      // alert('Error booking ticket: ' + error.response.data.message);
    }
  };

  const fetchTickets = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/tickets');
      setTickets(response.data);
    } catch (error) {
      // alert('Error fetching tickets: ' + error.response.data.message);
    }
  };

  return (
    <div>
      <h1>Book a Ticket</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <label>
          Slot:
          <select value={slot} onChange={(e) => setSlot(e.target.value)} required>
            <option value="Screen1">Screen1</option>
            <option value="Screen2">Screen2</option>
            <option value="Screen3">Screen3</option>
          </select>
        </label>
        <label>
          Timing:
          <input type="text" value={timing} onChange={(e) => setTiming(e.target.value)} required />
        </label>
        <label>
          Date:
          <input type="date" value={bookingDate} onChange={(e) => setDate(e.target.value)} required />
        </label>
        <button type="submit">Book Ticket</button>
      </form>
      
      <h2>All Tickets</h2>
      <button onClick={fetchTickets}>Fetch Tickets</button>
      <ul>
        {tickets.map(ticket => (
          <li key={ticket.ticketId}>
            {ticket.name} - {ticket.slot} - {ticket.timing} - {new Date(ticket.bookingDate).toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
}
