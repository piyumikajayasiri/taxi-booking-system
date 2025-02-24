import React from "react";
import { Clock, Shield, CreditCard, MapPin } from "lucide-react";
export const Features = () => {
  return (
    <div className="w-full bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-black">
          Why Choose Us
        </h2>
        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="text-white" size={24} />
            </div>
            <h3 className="font-semibold mb-2 text-black">24/7 Service</h3>
            <p className="text-gray-600">
              Available round the clock for your convenience
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="text-white" size={24} />
            </div>
            <h3 className="font-semibold mb-2 text-black">Safe Rides</h3>
            <p className="text-gray-600">
              Professional drivers and well-maintained vehicles
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <CreditCard className="text-white" size={24} />
            </div>
            <h3 className="font-semibold mb-2 text-black">Easy Payment</h3>
            <p className="text-gray-600">
              Multiple payment options for your convenience
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="text-white" size={24} />
            </div>
            <h3 className="font-semibold mb-2 text-black">Live Tracking</h3>
            <p className="text-gray-600">Track your ride in real-time</p>
          </div>
        </div>
      </div>
    </div>
  );
};
