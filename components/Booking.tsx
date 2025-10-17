'use client';

import { useState } from 'react';

interface Tour {
  id: string;
  name: string;
  duration: string;
  price: number;
  description: string;
  capacity: number;
  image: string;
}

export default function Booking() {
  const [selectedTour, setSelectedTour] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [numberOfGuests, setNumberOfGuests] = useState(1);

  // Sample tours - this will be replaced with API data
  const tours: Tour[] = [
    {
      id: '1',
      name: 'Sunset Cruise',
      duration: '3 hours',
      price: 299,
      description: 'Experience a breathtaking sunset on the water with complimentary refreshments.',
      capacity: 12,
      image: '🌅'
    },
    {
      id: '2',
      name: 'Full Day Adventure',
      duration: '8 hours',
      price: 799,
      description: 'Explore hidden coves, snorkel in crystal-clear waters, and enjoy a gourmet lunch.',
      capacity: 10,
      image: '⛵'
    },
    {
      id: '3',
      name: 'Private Charter',
      duration: 'Custom',
      price: 1499,
      description: 'Create your own adventure with a fully customized private charter experience.',
      capacity: 15,
      image: '🛥️'
    },
    {
      id: '4',
      name: 'Fishing Expedition',
      duration: '5 hours',
      price: 549,
      description: 'Deep sea fishing with professional equipment and experienced crew.',
      capacity: 8,
      image: '🎣'
    }
  ];

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    // This will be replaced with Whop.com payment integration
    alert('Booking system will be integrated with Whop.com payment API. Demo mode active.');
  };

  const getTotalPrice = () => {
    const tour = tours.find(t => t.id === selectedTour);
    return tour ? tour.price * numberOfGuests : 0;
  };

  return (
    <section id="booking" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Book Your Experience</h2>
          <p className="text-xl text-gray-600">Choose from our exclusive charter packages</p>
        </div>

        {/* Tour Selection Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {tours.map((tour) => (
            <div
              key={tour.id}
              onClick={() => setSelectedTour(tour.id)}
              className={`cursor-pointer bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-xl ${
                selectedTour === tour.id ? 'ring-4 ring-blue-600' : ''
              }`}
            >
              <div className="text-6xl text-center py-8 bg-gradient-to-br from-blue-100 to-blue-200">
                {tour.image}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{tour.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{tour.description}</p>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-500">Duration:</span>
                  <span className="text-sm font-semibold">{tour.duration}</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-500">Capacity:</span>
                  <span className="text-sm font-semibold">{tour.capacity} guests</span>
                </div>
                <div className="flex justify-between items-center mt-4 pt-4 border-t">
                  <span className="text-sm text-gray-500">From</span>
                  <span className="text-2xl font-bold text-blue-600">${tour.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Booking Form */}
        {selectedTour && (
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8 animate-fade-in">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Complete Your Booking</h3>
            <form onSubmit={handleBooking} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Date
                  </label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    required
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Number of Guests
                  </label>
                  <select
                    value={numberOfGuests}
                    onChange={(e) => setNumberOfGuests(Number(e.target.value))}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  >
                    {Array.from({ length: tours.find(t => t.id === selectedTour)?.capacity || 10 }, (_, i) => i + 1).map((num) => (
                      <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-semibold">Tour:</span>
                  <span className="text-lg">{tours.find(t => t.id === selectedTour)?.name}</span>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-semibold">Guests:</span>
                  <span className="text-lg">{numberOfGuests}</span>
                </div>
                <div className="flex justify-between items-center text-2xl font-bold border-t-2 pt-4">
                  <span>Total:</span>
                  <span className="text-blue-600">${getTotalPrice()}</span>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                <p className="text-sm text-yellow-800">
                  <strong>Demo Mode:</strong> Payment integration with Whop.com will be available after API credentials are provided.
                </p>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Proceed to Payment
              </button>
            </form>
          </div>
        )}

        {!selectedTour && (
          <div className="text-center text-gray-500 mt-8">
            <p>Select a tour package above to begin your booking</p>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </section>
  );
}
