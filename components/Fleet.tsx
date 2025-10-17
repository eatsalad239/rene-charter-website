export default function Fleet() {
  const vessels = [
    {
      name: 'Ocean Star',
      type: 'Luxury Yacht',
      capacity: '12 guests',
      length: '65 feet',
      features: ['Full Bar', 'Dining Area', 'Sun Deck', 'Sound System'],
      emoji: '🛥️'
    },
    {
      name: 'Wave Runner',
      type: 'Sport Cruiser',
      capacity: '8 guests',
      length: '45 feet',
      features: ['Water Sports Equipment', 'Fishing Gear', 'Refreshments', 'Shade Area'],
      emoji: '⛵'
    },
    {
      name: 'Blue Horizon',
      type: 'Catamaran',
      capacity: '20 guests',
      length: '55 feet',
      features: ['Spacious Deck', 'BBQ Grill', 'Snorkel Gear', 'Restrooms'],
      emoji: '🚤'
    }
  ];

  return (
    <section id="fleet" className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Fleet</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose from our selection of premium vessels, each meticulously maintained and equipped for your comfort.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vessels.map((vessel, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
            >
              <div className="bg-gradient-to-br from-blue-400 to-blue-600 text-white p-8 text-center">
                <div className="text-7xl mb-4">{vessel.emoji}</div>
                <h3 className="text-2xl font-bold mb-2">{vessel.name}</h3>
                <p className="text-blue-100">{vessel.type}</p>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-gray-500">Capacity</p>
                    <p className="font-semibold">{vessel.capacity}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Length</p>
                    <p className="font-semibold">{vessel.length}</p>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-2">Features</p>
                  <div className="flex flex-wrap gap-2">
                    {vessel.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-blue-100 text-blue-800 px-3 py-1 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                <button className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
