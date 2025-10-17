import Head from 'next/head';
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TourCard from '../components/TourCard';
import VideoSection from '../components/VideoSection';
import BookingModal from '../components/BookingModal';

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedTour, setSelectedTour] = useState(null);

  const tours = [
    {
      id: 'deep-sea-fishing',
      title: 'Deep Sea Fishing',
      description: "Set out into the open waters for a thrilling offshore adventure where the big game fish roam. This trip is perfect for anglers looking to battle larger species while enjoying the excitement of deep sea action. Our experienced crew provides all the equipment, bait, and necessary licenses. Your fresh catch will be cleaned and filleted for you, ready to enjoy after a day on the sea.",
      pricing: 'Half Day $650 | Full Day $900',
      image: '/images/deep-sea-fishing.jpg'
    },
    {
      id: 'sunset-cruise',
      title: 'Sunset Cruise',
      description: "Experience Belize's famous sunsets from the best seat in the house - the water. Relax on board as the sky turns gold and crimson, with the option to stop at a waterfront restaurant or bar. This 2.5-hour trip is perfect for couples, friends, or anyone who wants to end the day in paradise. Champagne, wine, or other beverages can be requested in advance.",
      pricing: '2.5 Hours $350 (departure between 6-7 PM)',
      image: '/images/sunset-cruise.jpg'
    },
    {
      id: 'custom-charter',
      title: 'Custom Charter',
      description: "Design your perfect day on the water - whether it's fishing, snorkeling, island hopping, or simply cruising the turquoise seas. With flexible itineraries and a private boat, you choose how to spend your time. Our crew ensures a safe, fun-filled day tailored to your group's interests.",
      pricing: 'Half Day $400 | Full Day $600',
      image: '/images/custom-charter.jpg',
      customizable: true
    }
  ];

  const handleBooking = (tour) => {
    setSelectedTour(tour);
    setIsBookingOpen(true);
  };

  return (
    <div>
      <Head>
        <title>Rene's Adventures - Belize Charter Tours & Experiences</title>
        <meta name="description" content="Experience unforgettable charter tours in Belize. Deep sea fishing, sunset cruises, and custom adventures with Rene's Adventures." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        {/* Hero Section with Video */}
        <section className="relative h-screen">
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/videos/hero-video.mp4" type="video/mp4" />
          </video>
          <div className="relative z-20 h-full flex items-center justify-center text-center px-4">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Rene's Adventures
              </h1>
              <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto">
                Discover Belize's turquoise waters with custom charter experiences
              </p>
              <button
                onClick={() => setIsBookingOpen(true)}
                className="btn-primary text-lg"
              >
                Book Your Adventure
              </button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="section-title">Your Belize Adventure Awaits</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Welcome to Rene's Adventures! We offer personalized charter experiences 
                in the beautiful waters of Belize. Whether you're looking for thrilling 
                deep sea fishing, a romantic sunset cruise, or a custom adventure tailored 
                to your interests, we're here to make your day on the water unforgettable. 
                We provide transportation from local docks and resorts.
              </p>
            </div>
          </div>
        </section>

        {/* Tour Offerings */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <h2 className="section-title text-center mb-12">Our Tours</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tours.map((tour) => (
                <TourCard
                  key={tour.id}
                  tour={tour}
                  onBook={handleBooking}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Video Gallery Section */}
        <VideoSection />

        {/* Contact/CTA Section */}
        <section className="py-20 bg-ocean-600 text-white">
          <div className="container-custom text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Book Your Adventure?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contact us today to reserve your spot or customize your perfect day on the water.
            </p>
            <button
              onClick={() => setIsBookingOpen(true)}
              className="btn-secondary text-lg"
            >
              Get Started
            </button>
          </div>
        </section>
      </main>

      <Footer />

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        selectedTour={selectedTour}
      />
    </div>
  );
}
