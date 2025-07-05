import { motion } from "framer-motion";
import { FiUser, FiMail, FiLock, FiCalendar } from "react-icons/fi";
import useAuth from "../../../hooks/useAuth";

const UserHome = () => {
  const { user } = useAuth();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6"
    >
      <div className="max-w-4xl mx-auto">
        {/* Welcome Header */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            <span className="text-indigo-600">Hi, </span>
            {user?.displayName || "Welcome Back"}
          </h2>
          <p className="text-gray-600 mt-2">Welcome to your dashboard</p>
        </motion.div>

        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="bg-white rounded-xl shadow-lg overflow-hidden p-6"
        >
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            

            <div className="flex-1">
              <h3 className="text-2xl text-center font-bold text-gray-800 mb-2">
                {user?.displayName || "Anonymous User"}
              </h3>
              <div className="space-y-3 text-gray-600">
                <div className="flex justify-center items-center gap-2">
                  <FiMail className="text-indigo-500" />
                  <span>{user?.email || "No email provided"}</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <FiLock className="text-indigo-500" />
                  <span>
                    Last login:{" "}
                    {user?.metadata?.lastSignInTime
                      ? new Date(user.metadata.lastSignInTime).toLocaleString()
                      : "Unknown"}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-indigo-50 p-4 rounded-lg border border-indigo-100"
            >
              <h4 className="font-medium text-indigo-800">Account Status</h4>
              <p className="text-gray-600 mt-1">
                {user?.emailVerified ? "Verified" : "Unverified"} Account
              </p>
            </motion.div>
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-indigo-50 p-4 rounded-lg border border-indigo-100"
            >
              <h4 className="font-medium text-indigo-800">Member Since</h4>
              <p className="text-gray-600 mt-1">
                {user?.metadata?.creationTime
                  ? new Date(user.metadata.creationTime).toLocaleDateString()
                  : "Unknown"}
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Stats Cards */}
        
      </div>
    </motion.div>
  );
};

export default UserHome;
