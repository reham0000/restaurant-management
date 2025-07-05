import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSearch, FiCalendar, FiClock, FiUser, FiPhone, FiMail, FiEdit2, FiTrash2, FiCheck, FiX } from 'react-icons/fi';

const ManageBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [filteredBookings, setFilteredBookings] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [modalBooking, setModalBooking] = useState(null);

  // Mock data - in a real app, you'd fetch this from an API
  useEffect(() => {
    const mockBookings = [
      {
        id: 1,
        name: 'John Smith',
        email: 'john.smith@example.com',
        phone: '555-123-4567',
        date: '2023-06-15',
        time: '19:00',
        guests: 4,
        status: 'confirmed',
        specialRequests: 'Window seat preferred',
        createdAt: '2023-05-20T10:30:00Z'
      },
      {
        id: 2,
        name: 'Emily Johnson',
        email: 'emily.j@example.com',
        phone: '555-987-6543',
        date: '2023-06-16',
        time: '18:30',
        guests: 2,
        status: 'confirmed',
        specialRequests: 'Vegetarian menu',
        createdAt: '2023-05-21T14:15:00Z'
      },
      {
        id: 3,
        name: 'Michael Brown',
        email: 'michael.b@example.com',
        phone: '555-456-7890',
        date: '2023-06-15',
        time: '20:00',
        guests: 6,
        status: 'pending',
        specialRequests: 'Birthday celebration',
        createdAt: '2023-05-22T09:45:00Z'
      },
      {
        id: 4,
        name: 'Sarah Wilson',
        email: 'sarah.w@example.com',
        phone: '555-789-0123',
        date: '2023-06-17',
        time: '19:30',
        guests: 5,
        status: 'cancelled',
        specialRequests: 'Allergic to nuts',
        createdAt: '2023-05-23T16:20:00Z'
      },
      {
        id: 5,
        name: 'David Lee',
        email: 'david.lee@example.com',
        phone: '555-234-5678',
        date: '2023-06-18',
        time: '18:00',
        guests: 3,
        status: 'confirmed',
        specialRequests: '',
        createdAt: '2023-05-24T11:10:00Z'
      },
    ];

    setBookings(mockBookings);
    setFilteredBookings(mockBookings);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    let results = bookings;
    
    if (searchTerm) {
      results = results.filter(booking => 
        booking.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        booking.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        booking.phone.includes(searchTerm)
      );
    }
    
    if (selectedDate) {
      results = results.filter(booking => booking.date === selectedDate);
    }
    
    setFilteredBookings(results);
  }, [searchTerm, selectedDate, bookings]);

  const handleEdit = (booking) => {
    setEditingId(booking.id);
    setEditForm({
      name: booking.name,
      email: booking.email,
      phone: booking.phone,
      date: booking.date,
      time: booking.time,
      guests: booking.guests,
      status: booking.status,
      specialRequests: booking.specialRequests
    });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditForm(prev => ({ ...prev, [name]: value }));
  };

  const saveEdit = (id) => {
    setBookings(prev => 
      prev.map(booking => 
        booking.id === id ? { ...booking, ...editForm } : booking
      )
    );
    setEditingId(null);
  };

  const cancelEdit = () => {
    setEditingId(null);
  };

  const deleteBooking = (id) => {
    setBookings(prev => prev.filter(booking => booking.id !== id));
  };

  const toggleStatus = (id) => {
    setBookings(prev => 
      prev.map(booking => 
        booking.id === id 
          ? { 
              ...booking, 
              status: booking.status === 'confirmed' ? 'cancelled' : 'confirmed' 
            } 
          : booking
      )
    );
  };

  const viewDetails = (booking) => {
    setModalBooking(booking);
    setShowModal(true);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'confirmed': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Manage Bookings</h1>
        <p className="text-gray-600 mb-6">View and manage all restaurant reservations</p>
        
        {/* Filters */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="bg-white rounded-lg shadow-md p-6 mb-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiSearch className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search by name, email or phone"
                className="pl-10 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiCalendar className="text-gray-400" />
              </div>
              <input
                type="date"
                className="pl-10 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
              />
            </div>
            
            <select
              className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              defaultValue=""
              onChange={(e) => {
                if (e.target.value === "") {
                  setFilteredBookings(bookings);
                } else {
                  setFilteredBookings(bookings.filter(b => b.status === e.target.value));
                }
              }}
            >
              <option value="">All Statuses</option>
              <option value="confirmed">Confirmed</option>
              <option value="pending">Pending</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>
        </motion.div>
        
        {/* Bookings Table */}
        {isLoading ? (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-center items-center h-64"
          >
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date & Time</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Guests</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <AnimatePresence>
                    {filteredBookings.length > 0 ? (
                      filteredBookings.map((booking) => (
                        <motion.tr 
                          key={booking.id}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.3 }}
                          className="hover:bg-gray-50"
                          layout
                        >
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold">
                                {booking.name.charAt(0)}
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">{booking.name}</div>
                                <div className="text-sm text-gray-500">{booking.email}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900 flex items-center">
                              <FiCalendar className="mr-1" /> {booking.date}
                            </div>
                            <div className="text-sm text-gray-500 flex items-center">
                              <FiClock className="mr-1" /> {booking.time}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{booking.guests}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(booking.status)}`}>
                              {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <div className="flex space-x-2">
                              <button
                                onClick={() => viewDetails(booking)}
                                className="text-indigo-600 hover:text-indigo-900"
                              >
                                View
                              </button>
                              <button
                                onClick={() => handleEdit(booking)}
                                className="text-yellow-600 hover:text-yellow-900"
                              >
                                Edit
                              </button>
                              <button
                                onClick={() => toggleStatus(booking.id)}
                                className={booking.status === 'confirmed' ? 'text-red-600 hover:text-red-900' : 'text-green-600 hover:text-green-900'}
                              >
                                {booking.status === 'confirmed' ? 'Cancel' : 'Confirm'}
                              </button>
                            </div>
                          </td>
                        </motion.tr>
                      ))
                    ) : (
                      <motion.tr
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <td colSpan="5" className="px-6 py-4 text-center text-gray-500">
                          No bookings found matching your criteria
                        </td>
                      </motion.tr>
                    )}
                  </AnimatePresence>
                </tbody>
              </table>
            </div>
          </motion.div>
        )}
      </motion.div>

      {/* Edit Modal */}
      <AnimatePresence>
        {editingId && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-lg shadow-xl max-w-md w-full p-6"
            >
              <h2 className="text-xl font-bold mb-4">Edit Booking</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={editForm.name}
                    onChange={handleEditChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={editForm.email}
                      onChange={handleEditChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={editForm.phone}
                      onChange={handleEditChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Date</label>
                    <input
                      type="date"
                      name="date"
                      value={editForm.date}
                      onChange={handleEditChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Time</label>
                    <input
                      type="time"
                      name="time"
                      value={editForm.time}
                      onChange={handleEditChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700">Guests</label>
                  <input
                    type="number"
                    name="guests"
                    value={editForm.guests}
                    onChange={handleEditChange}
                    min="1"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700">Status</label>
                  <select
                    name="status"
                    value={editForm.status}
                    onChange={handleEditChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  >
                    <option value="confirmed">Confirmed</option>
                    <option value="pending">Pending</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700">Special Requests</label>
                  <textarea
                    name="specialRequests"
                    value={editForm.specialRequests}
                    onChange={handleEditChange}
                    rows="3"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  ></textarea>
                </div>
              </div>
              
              <div className="mt-6 flex justify-end space-x-3">
                <button
                  onClick={cancelEdit}
                  className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Cancel
                </button>
                <button
                  onClick={() => saveEdit(editingId)}
                  className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Save Changes
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* View Details Modal */}
      <AnimatePresence>
        {showModal && modalBooking && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-lg shadow-xl max-w-md w-full p-6"
            >
              <div className="flex justify-between items-start">
                <h2 className="text-xl font-bold mb-4">Booking Details</h2>
                <button 
                  onClick={() => setShowModal(false)}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <FiX size={20} />
                </button>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <FiUser className="text-gray-400 mr-2" />
                  <span className="font-medium">Name:</span>
                  <span className="ml-2">{modalBooking.name}</span>
                </div>
                
                <div className="flex items-center">
                  <FiMail className="text-gray-400 mr-2" />
                  <span className="font-medium">Email:</span>
                  <span className="ml-2">{modalBooking.email}</span>
                </div>
                
                <div className="flex items-center">
                  <FiPhone className="text-gray-400 mr-2" />
                  <span className="font-medium">Phone:</span>
                  <span className="ml-2">{modalBooking.phone}</span>
                </div>
                
                <div className="flex items-center">
                  <FiCalendar className="text-gray-400 mr-2" />
                  <span className="font-medium">Date:</span>
                  <span className="ml-2">{modalBooking.date} at {modalBooking.time}</span>
                </div>
                
                <div className="flex items-center">
                  <span className="font-medium">Guests:</span>
                  <span className="ml-2">{modalBooking.guests}</span>
                </div>
                
                <div className="flex items-center">
                  <span className="font-medium">Status:</span>
                  <span className={`ml-2 px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(modalBooking.status)}`}>
                    {modalBooking.status.charAt(0).toUpperCase() + modalBooking.status.slice(1)}
                  </span>
                </div>
                
                {modalBooking.specialRequests && (
                  <div>
                    <span className="font-medium">Special Requests:</span>
                    <p className="mt-1 text-gray-600">{modalBooking.specialRequests}</p>
                  </div>
                )}
              </div>
              
              <div className="mt-6 pt-4 border-t border-gray-200 flex justify-end">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ManageBookings;