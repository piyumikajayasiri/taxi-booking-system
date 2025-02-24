import { BookingForm } from "../components/BookingForm";
import { Features } from "../components/Feature";
import { Header } from "../components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-yellow-500">
      <Header />
      <main>
        <div className="max-w-7xl mx-auto px-4 py-12 ">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-black">
              Book Your Taxi in Seconds
            </h1>
            <p className="text-xl text-gray-600">
              Fast, reliable, and comfortable rides at your fingertips
            </p>
          </div>
          <BookingForm />
        </div>
        <Features />
      </main>
    </div>
  );
}
