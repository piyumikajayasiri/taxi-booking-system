import React from "react";
import { MapPin, Calendar, Clock, Car } from "lucide-react";
export const BookingForm = () => {
  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-6 text-black">Book Your Ride</h2>
      <form className="space-y-4">
        <div className="space-y-2">
          <label className="flex items-center gap-2">
            <MapPin size={20} className="text-yellow-500" />
            <span className="text-black">Pickup Location</span>
          </label>
          <input
            type="text"
            placeholder="Enter pickup address"
            className="w-full p-2 border rounded focus:ring-2 text-black focus:ring-yellow-500 focus:border-transparent"
          />
        </div>
        <div className="space-y-2">
          <label className="flex items-center gap-2">
            <MapPin size={20} className="text-yellow-500" />
            <span className="text-black">Destination</span>
          </label>
          <input
            type="text"
            placeholder="Enter destination"
            className="w-full text-black p-2 border rounded focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="flex items-center gap-2">
              <Calendar size={20} className="text-yellow-500" />
              <span className="text-black">Date</span>
            </label>
            <input
              type="date"
              className="w-full text-black p-2 border rounded focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            />
          </div>
          <div className="space-y-2">
            <label className="flex items-center gap-2">
              <Clock size={20} className="text-yellow-500" />
              <span className="text-black">Time</span>
            </label>
            <input
              type="time"
              className="w-full text-black p-2 border rounded focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            />
          </div>
        </div>
        <div className="space-y-2">
          <label className="flex items-center gap-2">
            <Car size={20} className="text-yellow-500" />
            <span className="text-black">Vehicle Type</span>
          </label>
          <select className="w-full p-2 text-black border rounded focus:ring-2 focus:ring-yellow-500 focus:border-transparent">
            <option>Standard Taxi</option>
            <option>Premium Sedan</option>
            <option>SUV</option>
            <option>Van</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-yellow-500 text-white py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors"
        >
          Book Now
        </button>
      </form>
    </div>
  );
};
