// server.js
const express = require('express');
const cors = require('cors');
const path = require('path');  // <-- Import path to serve frontend
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Dummy Data
let donors = [];
let bloodRequests = [];
let bloodBanks = [
  { id: 1, name: "City Hospital Blood Bank", location: "Downtown", contact: "123-456-7890" },
  { id: 2, name: "Central Blood Bank", location: "Main Street", contact: "987-654-3210" },
];

// API Routes
app.get('/api', (req, res) => {
  res.send('Life Link Backend API Running...');
});

// Donor Routes
app.post('/api/donors', (req, res) => {
  const donor = { id: donors.length + 1, ...req.body };
  donors.push(donor);
  res.status(201).json({ message: "Donor registered successfully!", donor });
});

app.get('/api/donors', (req, res) => {
  res.json(donors);
});

// Blood Request Routes
app.post('/api/requests', (req, res) => {
  const request = { id: bloodRequests.length + 1, ...req.body };
  bloodRequests.push(request);
  res.status(201).json({ message: "Blood request created successfully!", request });
});

app.get('/api/requests', (req, res) => {
  res.json(bloodRequests);
});

// Blood Banks Routes
app.get('/api/banks', (req, res) => {
  res.json(bloodBanks);
});

// Dashboard Stats
app.get('/api/stats', (req, res) => {
  const totalUnitsRaised = 121; // dummy number
  const pendingRequests = bloodRequests.length;
  const goalUnits = 200;
  res.json({ totalUnitsRaised, pendingRequests, goalUnits });
});

// Serve React frontend (after build)
app.use(express.static(path.join(__dirname, 'client/build')));  // <-- Your React frontend build folder

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

