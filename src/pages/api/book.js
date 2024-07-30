import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, slot, timing, date } = req.body;

    try {
      const response = await axios.post('http://localhost:5000/api/book', {
        name,
        slot,
        timing,
        date
      });
      res.status(201).json(response.data);
    } catch (error) {
      res.status(500).json({ message: 'Failed to book ticket' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
