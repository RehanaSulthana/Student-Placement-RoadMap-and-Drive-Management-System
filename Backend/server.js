const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/placementDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.error('MongoDB connection error:', err));

// ===== User Schema & Model =====
const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, required: true, enum: ['admin', 'student'] },
}, { timestamps: true });

const User = mongoose.model('User', UserSchema);

// ===== Placement Drive Schema & Model =====
const DriveSchema = new mongoose.Schema({
  name: { type: String, required: true },
  date: { type: String, required: true },
  location: { type: String, required: true },
  status: { type: String, required: true, enum: ['Upcoming', 'Ongoing'] },
}, { timestamps: true });

const Drive = mongoose.model('Drive', DriveSchema);

// ===== Authentication Middleware =====
const authMiddleware = (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '');
    if (!token) {
      return res.status(401).json({ message: 'Authorization token required' });
    }
    
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secretkey');
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Authentication failed' });
  }
};

// Admin role middleware
const adminMiddleware = (req, res, next) => {
  if (req.user && req.user.role === 'admin') {
    next();
  } else {
    res.status(403).json({ message: 'Access denied. Admin privileges required.' });
  }
};

// ===== Authentication Routes =====
// Register endpoint
app.post('/api/register', async (req, res) => {
  try {
    const { email, password, role } = req.body;
    
    if (!email || !password || !role) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }
    
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ email, password: hashedPassword, role });
    await newUser.save();
    
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Login endpoint
app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }
    
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    
    const token = jwt.sign(
      { id: user._id, role: user.role, email: user.email },
      process.env.JWT_SECRET || 'secretkey',
      { expiresIn: '24h' }
    );
    
    res.json({ 
      token, 
      role: user.role,
      user: {
        id: user._id,
        email: user.email,
        role: user.role
      }
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// ===== Placement Drive Routes =====
// Get all drives
app.get('/api/getBooks', async (req, res) => {
  try {
    const drives = await Drive.find().sort({ date: 1 });
    res.json(drives);
  } catch (error) {
    console.error('Error fetching drives:', error);
    res.status(500).json({ message: 'Failed to fetch placement drives' });
  }
});

// Get a single drive by ID
app.get('/api/getBook/:id', async (req, res) => {
  try {
    const drive = await Drive.findById(req.params.id);
    if (!drive) {
      return res.status(404).json({ message: 'Drive not found' });
    }
    res.json(drive);
  } catch (error) {
    console.error('Error fetching drive:', error);
    res.status(500).json({ message: 'Failed to fetch placement drive' });
  }
});

// Add a new drive (protected - admin only)
app.post('/api/addBook', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const { name, date, location, status } = req.body;
    
    if (!name || !date || !location || !status) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    
    const newDrive = new Drive({
      name,
      date,
      location,
      status
    });
    
    const savedDrive = await newDrive.save();
    res.status(201).json({ message: 'Drive added successfully', drive: savedDrive });
  } catch (error) {
    console.error('Error adding drive:', error);
    res.status(500).json({ message: 'Failed to add placement drive' });
  }
});

// Delete a drive (protected - admin only)
app.delete('/api/deleteBook/:id', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const drive = await Drive.findByIdAndDelete(req.params.id);
    if (!drive) {
      return res.status(404).json({ message: 'Drive not found' });
    }
    res.json({ message: 'Drive deleted successfully' });
  } catch (error) {
    console.error('Error deleting drive:', error);
    res.status(500).json({ message: 'Failed to delete placement drive' });
  }
});

// Update a drive (protected - admin only)
app.put('/api/updateBook/:id', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const { name, date, location, status } = req.body;
    
    if (!name || !date || !location || !status) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    
    const updatedDrive = await Drive.findByIdAndUpdate(
      req.params.id,
      { name, date, location, status },
      { new: true }
    );
    
    if (!updatedDrive) {
      return res.status(404).json({ message: 'Drive not found' });
    }
    
    res.json({ message: 'Drive updated successfully', drive: updatedDrive });
  } catch (error) {
    console.error('Error updating drive:', error);
    res.status(500).json({ message: 'Failed to update placement drive' });
  }
});

// ===== Server Initialization =====
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
