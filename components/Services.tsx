export default function Services() {
  const services = [
    {
      icon: '🌊',
      title: 'Luxury Cruises',
      description: 'Experience the ultimate in comfort and style aboard our premium vessels with world-class amenities.'
    },
    {
      icon: '🎣',
      title: 'Fishing Charters',
      description: 'Professional fishing expeditions with expert guides and top-quality equipment for an unforgettable catch.'
    },
    {
      icon: '🏝️',
      title: 'Island Hopping',
      description: 'Explore hidden gems and pristine beaches with our customized island-hopping adventures.'
    },
    {
      icon: '🤿',
      title: 'Snorkeling & Diving',
      description: 'Discover vibrant marine life and stunning underwater landscapes with our diving experiences.'
    },
    {
      icon: '🎉',
      title: 'Private Events',
      description: 'Host unforgettable celebrations, corporate events, or special occasions on our exclusive charters.'
    },
    {
      icon: '🌅',
      title: 'Sunset Tours',
      description: 'Witness breathtaking sunsets while cruising through scenic waters with complimentary refreshments.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From luxury cruises to thrilling adventures, we offer a wide range of charter experiences tailored to your desires.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
