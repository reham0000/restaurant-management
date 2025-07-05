import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCalendar, FiClock, FiUser, FiPhone, FiMail, FiCheck, FiX } from 'react-icons/fi';

const ReservationPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    specialRequests: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: '2',
        specialRequests: ''
      });
      setCurrentStep(1);
    }, 2000);
  };

  const nextStep = () => {
    setCurrentStep(prev => prev + 1);
  };

  const prevStep = () => {
    setCurrentStep(prev => prev - 1);
  };

  const availableTimes = [
    '11:00', '11:30', '12:00', '12:30', '13:00', '13:30',
    '17:00', '17:30', '18:00', '18:30', '19:00', '19:30',
    '20:00', '20:30', '21:00'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto"
      >
        <div className="text-center mb-10">
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl font-bold text-orange-800 mb-2"
          >
            Reserve Your Table
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg text-orange-600"
          >
            Experience culinary excellence at Tasty Treat
          </motion.p>
        </div>

        {/* Progress Steps */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between relative">
            {/* Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-orange-200 z-0"></div>
            
            {[1, 2, 3].map((step) => (
              <div key={step} className="relative z-10">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep >= step ? 'bg-orange-600 text-white' : 'bg-orange-200 text-orange-600'} transition-colors duration-300`}>
                  {step}
                </div>
                <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 text-xs font-medium text-orange-600 whitespace-nowrap">
                  {step === 1 && 'Details'}
                  {step === 2 && 'Date & Time'}
                  {step === 3 && 'Confirmation'}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Reservation Form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          <form onSubmit={handleSubmit}>
            <AnimatePresence mode="wait">
              {currentStep === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="p-6 sm:p-8"
                >
                  <h2 className="text-2xl font-bold text-orange-800 mb-6">Your Information</h2>
                  
                  <div className="space-y-5">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      <label className="block text-sm font-medium text-orange-700 mb-1">Full Name</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <FiUser className="text-orange-400" />
                        </div>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="pl-10 w-full rounded-lg border-orange-200 focus:border-orange-500 focus:ring-orange-500"
                          placeholder="Name"
                        />
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <label className="block text-sm font-medium text-orange-700 mb-1">Email Address</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <FiMail className="text-orange-400" />
                        </div>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="pl-10 w-full rounded-lg border-orange-200 focus:border-orange-500 focus:ring-orange-500"
                          placeholder="Email"
                        />
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <label className="block text-sm font-medium text-orange-700 mb-1">Phone Number</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <FiPhone className="text-orange-400" />
                        </div>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="pl-10 w-full rounded-lg border-orange-200 focus:border-orange-500 focus:ring-orange-500"
                          placeholder="Phone Number"
                        />
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <label className="block text-sm font-medium text-orange-700 mb-1">Number of Guests</label>
                      <select
                        name="guests"
                        value={formData.guests}
                        onChange={handleChange}
                        className="w-full rounded-lg border-orange-200 focus:border-orange-500 focus:ring-orange-500"
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                          <option key={num} value={num}>{num} {num === 1 ? 'person' : 'people'}</option>
                        ))}
                        <option value="9+">9+ people (large party)</option>
                      </select>
                    </motion.div>
                  </div>

                  <div className="mt-8 flex justify-end">
                    <button
                      type="button"
                      onClick={nextStep}
                      className="px-6 py-3 bg-orange-600 text-white font-medium rounded-lg hover:bg-orange-700 transition-colors duration-300 shadow-md hover:shadow-orange-200"
                    >
                      Next: Date & Time
                    </button>
                  </div>
                </motion.div>
              )}

              {currentStep === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="p-6 sm:p-8"
                >
                  <h2 className="text-2xl font-bold text-orange-800 mb-6">When Would You Like to Dine?</h2>
                  
                  <div className="space-y-6">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      <label className="block text-sm font-medium text-orange-700 mb-1">Date</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <FiCalendar className="text-orange-400" />
                        </div>
                        <input
                          type="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          required
                          min={new Date().toISOString().split('T')[0]}
                          className="pl-10 w-full rounded-lg border-orange-200 focus:border-orange-500 focus:ring-orange-500"
                        />
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <label className="block text-sm font-medium text-orange-700 mb-1">Time</label>
                      <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                        {availableTimes.map(time => (
                          <motion.button
                            key={time}
                            type="button"
                            onClick={() => setFormData(prev => ({ ...prev, time }))}
                            className={`py-2 px-3 rounded-lg border transition-all duration-200 ${formData.time === time ? 'bg-orange-600 text-white border-orange-600' : 'bg-white text-orange-700 border-orange-200 hover:border-orange-400'}`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            {time}
                          </motion.button>
                        ))}
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <label className="block text-sm font-medium text-orange-700 mb-1">Special Requests (Optional)</label>
                      <textarea
                        name="specialRequests"
                        value={formData.specialRequests}
                        onChange={handleChange}
                        rows="3"
                        className="w-full rounded-lg border-orange-200 focus:border-orange-500 focus:ring-orange-500"
                        placeholder="Allergies, celebrations, seating preferences..."
                      ></textarea>
                    </motion.div>
                  </div>

                  <div className="mt-8 flex justify-between">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="px-6 py-3 bg-white text-orange-600 font-medium rounded-lg border border-orange-200 hover:bg-orange-50 transition-colors duration-300"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={nextStep}
                      disabled={!formData.date || !formData.time}
                      className={`px-6 py-3 font-medium rounded-lg transition-colors duration-300 shadow-md ${!formData.date || !formData.time ? 'bg-orange-300 text-white cursor-not-allowed' : 'bg-orange-600 text-white hover:bg-orange-700 hover:shadow-orange-200'}`}
                    >
                      Next: Confirm Reservation
                    </button>
                  </div>
                </motion.div>
              )}

              {currentStep === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="p-6 sm:p-8"
                >
                  <h2 className="text-2xl font-bold text-orange-800 mb-6">Confirm Your Reservation</h2>
                  
                  <div className="bg-orange-50 rounded-xl p-5 mb-6">
                    <div className="space-y-3">
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="flex items-center"
                      >
                        <FiUser className="text-orange-500 mr-2" />
                        <span className="font-medium">Name:</span>
                        <span className="ml-2">{formData.name}</span>
                      </motion.div>

                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="flex items-center"
                      >
                        <FiMail className="text-orange-500 mr-2" />
                        <span className="font-medium">Email:</span>
                        <span className="ml-2">{formData.email}</span>
                      </motion.div>

                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="flex items-center"
                      >
                        <FiPhone className="text-orange-500 mr-2" />
                        <span className="font-medium">Phone:</span>
                        <span className="ml-2">{formData.phone}</span>
                      </motion.div>

                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="flex items-center"
                      >
                        <FiCalendar className="text-orange-500 mr-2" />
                        <span className="font-medium">Date:</span>
                        <span className="ml-2">{formData.date}</span>
                      </motion.div>

                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="flex items-center"
                      >
                        <FiClock className="text-orange-500 mr-2" />
                        <span className="font-medium">Time:</span>
                        <span className="ml-2">{formData.time}</span>
                      </motion.div>

                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="flex items-center"
                      >
                        <span className="font-medium">Guests:</span>
                        <span className="ml-2">{formData.guests}</span>
                      </motion.div>

                      {formData.specialRequests && (
                        <motion.div 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.7 }}
                        >
                          <span className="font-medium">Special Requests:</span>
                          <p className="mt-1 text-orange-700">{formData.specialRequests}</p>
                        </motion.div>
                      )}
                    </div>
                  </div>

                  <div className="mt-6 flex justify-between">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="px-6 py-3 bg-white text-orange-600 font-medium rounded-lg border border-orange-200 hover:bg-orange-50 transition-colors duration-300"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-6 py-3 bg-orange-600 text-white font-medium rounded-lg hover:bg-orange-700 transition-colors duration-300 shadow-md hover:shadow-orange-200 flex items-center"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </>
                      ) : (
                        "Confirm Reservation"
                      )}
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </motion.div>

        {/* Success Modal */}
        <AnimatePresence>
          {showSuccess && (
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
                className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 15 }}
                  className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <FiCheck className="text-green-600 text-3xl" />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Reservation Confirmed!</h3>
                <p className="text-gray-600 mb-6">Your table at Tasty Treat has been successfully reserved. A confirmation has been sent to your email.</p>
                <button
                  onClick={() => setShowSuccess(false)}
                  className="px-6 py-3 bg-orange-600 text-white font-medium rounded-lg hover:bg-orange-700 transition-colors duration-300 w-full"
                >
                  Great, thanks!
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default ReservationPage;