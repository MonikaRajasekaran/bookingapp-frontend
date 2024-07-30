import { useState, useEffect } from 'react';
import axios from 'axios';

export default function TicketList() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/tickets');
        setTickets(response.data);
      } catch (error) {
        alert('Error fetching tickets: ' + error.response?.data?.message || 'An error occurred');
      }
    };
    fetchTickets();
  }, []);

  return (
    <div>
      <h2>All Tickets</h2>
      <ul>
        {tickets.map(ticket => (
          <li key={ticket.ticketId}>
            {ticket.name} - {ticket.slot} - {ticket.timing} - {new Date(ticket.booking).toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
}
