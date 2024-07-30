// components/TicketsPage.js
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function TicketsPage() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/tickets');
        setTickets(response.data);
      } catch (error) {
        // Handle the error here
        console.error('Error fetching tickets:', error);
      }
    };

    fetchTickets();
  }, []);

  return (
    <div>
      <h1>All Tickets</h1>
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
