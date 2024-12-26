import car from "../../../assets/car.png";
import cart from "../../../assets/cart.png";
import clock from "../../../assets/clock.png";
import bank from "../../../assets/bank.png";
import support from "../../../assets/support.png";

export default function Facilities() {
  return (
    <div className="py-16 bg-gradient-to-b from-gray-100 to-white">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-center text-4xl lg:text-5xl font-bold text-gray-800 mb-12">
          Why Choose Us
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Feature 1 */}
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-center space-x-4">
              <img src={car} alt="Fast Delivery" className="w-12 h-12" />
              <div>
                <h4 className="text-xl font-semibold text-gray-800">
                  Fast Delivery
                </h4>
              </div>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-center space-x-4">
              <img src={cart} alt="Wide Variety" className="w-12 h-12" />
              <div>
                <h4 className="text-xl font-semibold text-gray-800">
                  Wide Variety
                </h4>
              </div>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-center space-x-4">
              <img src={clock} alt="24/7 Support" className="w-12 h-12" />
              <div>
                <h4 className="text-xl font-semibold text-gray-800">
                  24/7 Support
                </h4>
              </div>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-center space-x-4">
              <img src={bank} alt="Secure Payments" className="w-12 h-12" />
              <div>
                <h4 className="text-xl font-semibold text-gray-800">
                  Secure Payments
                </h4>
              </div>
            </div>
          </div>

          {/* Feature 5 */}
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-center space-x-4">
              <img src={support} alt="Customer Care" className="w-12 h-12" />
              <div>
                <h4 className="text-xl font-semibold text-gray-800">
                  Customer Care
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
