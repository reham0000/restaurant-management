import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";
import useAuth from "../../../hooks/useAuth";

// add publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
  const user = useAuth();
  return (
    <div>
      <SectionTitle
        heading="PAYMENT"
        subHeading="Please pay to eat"
      ></SectionTitle>
      <div>
        <Elements stripe={stripePromise}>
          <CheckOutForm></CheckOutForm>
        </Elements>
      </div>

      <div class="bg-gray-50 p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          Payment Details
        </h2>
        <p class="text-gray-500 mb-6 text-sm">
          Complete your order by providing your payment details.
        </p>

        <div class="mb-6">
          <label
            for="email"
            class="block text-sm font-medium text-gray-700 mb-1"
          >
            Email
          </label>
          <div class="relative">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span class="text-gray-400">@</span>
            </div>
            <input
              type="email"
              id="email"
              name="email"
              value={user?.user?.email}
              class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <button
          type="submit"
          class="w-full bg-gray-900 text-white py-3 rounded-md font-semibold hover:bg-gray-800 transition duration-300"
        // onClick={handleCreatePayment}
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Payment;
