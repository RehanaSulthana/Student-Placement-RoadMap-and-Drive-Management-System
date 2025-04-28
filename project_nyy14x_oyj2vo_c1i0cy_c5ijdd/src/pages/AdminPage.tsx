import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar'; // Ensure the path is correct
import { Link, useNavigate } from 'react-router-dom';

const AdminPage: React.FC = () => {
  const [drives, setDrives] = useState<{
    _id: string;
    name: string;
    date: string;
    location: string;
    status: 'Upcoming' | 'Ongoing';
  }[]>([]);

  const [newDrive, setNewDrive] = useState({
    name: '',
    date: '',
    location: '',
    status: 'Upcoming',
  });

  const [successMessage, setSuccessMessage] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');

    if (!token || role !== 'admin') {
      navigate('/login');
    }
  }, [navigate]);

  const authAxios = axios.create({
    baseURL: 'http://localhost:5000',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    }
  });

  useEffect(() => {
    const fetchDrives = async () => {
      try {
        const response = await authAxios.get('/api/getBooks');
        setDrives(response.data);
      } catch (error) {
        console.error('Error fetching drives:', error);
        setErrorMessage('Failed to load placement drives. Please try again.');
      }
    };
    fetchDrives();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewDrive((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const handleAddDrive = async () => {
    setErrorMessage('');
    const selectedDate = new Date(newDrive.date);

    if (newDrive.name && newDrive.date && newDrive.location) {
      if (selectedDate < new Date()) {
        setErrorMessage('The date cannot be in the past.');
      } else {
        try {
          const response = await authAxios.post('/api/addBook', newDrive);
          setDrives((prev) => [...prev, response.data.drive]);

          setNewDrive({ name: '', date: '', location: '', status: 'Upcoming' });
          setSuccessMessage('Placement drive added successfully!');

          setTimeout(() => {
            setSuccessMessage('');
          }, 3000);
        } catch (error: any) {
          console.error('Error adding drive:', error);
          setErrorMessage(error.response?.data?.message || 'Failed to add the placement drive.');
        }
      }
    } else {
      setErrorMessage('Please fill in all fields');
    }
  };

  const handleDeleteDrive = async (id: string) => {
    try {
      await authAxios.delete(`/api/deleteBook/${id}`);
      setDrives((prev) => prev.filter((drive) => drive._id !== id));
      setSuccessMessage('Drive deleted successfully!');

      setTimeout(() => {
        setSuccessMessage('');
      }, 3000);
    } catch (error: any) {
      console.error('Error deleting drive:', error);
      setErrorMessage(error.response?.data?.message || 'Failed to delete the placement drive.');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    navigate('/login');
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700"
            >
              Logout
            </button>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Manage Placement Drives</h2>

              {/* Add New Placement Drive Form */}
              <div className="mb-6">
                <input
                  type="text"
                  name="name"
                  value={newDrive.name}
                  onChange={handleChange}
                  placeholder="Drive Name"
                  className="w-full p-2 mb-4 border border-gray-300 rounded"
                />
                <input
                  type="date"
                  name="date"
                  value={newDrive.date}
                  onChange={handleChange}
                  className="w-full p-2 mb-4 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  name="location"
                  value={newDrive.location}
                  onChange={handleChange}
                  placeholder="Location"
                  className="w-full p-2 mb-4 border border-gray-300 rounded"
                />
                <select
                  name="status"
                  value={newDrive.status}
                  onChange={handleChange}
                  className="w-full p-2 mb-4 border border-gray-300 rounded"
                >
                  <option value="Upcoming">Upcoming</option>
                  <option value="Ongoing">Ongoing</option>
                </select>
                <button
                  onClick={handleAddDrive}
                  className="px-6 py-2 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700"
                >
                  Add New Placement Drive
                </button>
              </div>

              {/* Success/Error Messages */}
              {successMessage && (
                <div className="bg-green-100 text-green-800 p-4 rounded-md mb-6">
                  {successMessage}
                </div>
              )}
              {errorMessage && (
                <div className="bg-red-100 text-red-800 p-4 rounded-md mb-6">
                  {errorMessage}
                </div>
              )}

              {/* Display Drives */}
              <div className="mt-6">
                {drives.length === 0 ? (
                  <p>No placement drives added yet. Please add a drive.</p>
                ) : (
                  <>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Upcoming Drives</h3>
                    {drives
                      .filter((drive) => drive.status === 'Upcoming')
                      .map((drive) => (
                        <div key={drive._id} className="flex justify-between items-center p-4 bg-gray-100 mb-4 rounded-lg">
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900">{drive.name}</h4>
                            <p className="text-gray-600">{drive.location}</p>
                            <p className="text-gray-600">{formatDate(drive.date)}</p>
                          </div>
                          <span className="text-white text-sm rounded-full px-4 py-2 bg-blue-500">{drive.status}</span>
                          <Link to={`/placement-drives/${drive._id}`} className="text-indigo-600 hover:text-indigo-800 text-sm">
                            View
                          </Link>
                          <button
                            onClick={() => handleDeleteDrive(drive._id)}
                            className="text-red-600 hover:text-red-800 text-sm ml-4"
                          >
                            Delete
                          </button>
                        </div>
                      ))}

                    <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2">Ongoing Drives</h3>
                    {drives
                      .filter((drive) => drive.status === 'Ongoing')
                      .map((drive) => (
                        <div key={drive._id} className="flex justify-between items-center p-4 bg-gray-100 mb-4 rounded-lg">
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900">{drive.name}</h4>
                            <p className="text-gray-600">{drive.location}</p>
                            <p className="text-gray-600">{formatDate(drive.date)}</p>
                          </div>
                          <span className="text-white text-sm rounded-full px-4 py-2 bg-green-500">{drive.status}</span>
                          <Link to={`/placement-drives/${drive._id}`} className="text-indigo-600 hover:text-indigo-800 text-sm">
                            View
                          </Link>
                          <button
                            onClick={() => handleDeleteDrive(drive._id)}
                            className="text-red-600 hover:text-red-800 text-sm ml-4"
                          >
                            Delete
                          </button>
                        </div>
                      ))}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminPage;
