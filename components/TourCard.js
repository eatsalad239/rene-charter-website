import Link from 'next/link';

export default function TourCard({ tour, onBook }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Tour Image */}
      <div className="relative h-64 bg-ocean-100">
        <img
          src={tour.image}
          alt={tour.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">
          {tour.title}
        </h3>
      </div>

      {/* Tour Content */}
      <div className="p-6">
        <p className="text-gray-700 leading-relaxed mb-4">
          {tour.description}
        </p>
        
        <div className="mb-6">
          <p className="text-lg font-semibold text-ocean-700">
            {tour.pricing}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          {tour.customizable ? (
            <>
              <Link href="/customize">
                <a className="block btn-secondary text-center">
                  Customize Your Adventure
                </a>
              </Link>
              <button
                onClick={() => onBook(tour)}
                className="btn-primary w-full"
              >
                Book Now
              </button>
            </>
          ) : (
            <button
              onClick={() => onBook(tour)}
              className="btn-primary w-full"
            >
              Book Now
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
