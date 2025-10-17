export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About Rene Charter</h2>
            <p className="text-lg text-gray-600 mb-4">
              With over 15 years of experience in luxury charter services, Rene Charter has become synonymous with excellence on the water. Our commitment to safety, comfort, and unforgettable experiences sets us apart.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              Our professional crew is dedicated to ensuring every voyage exceeds your expectations. Whether you&apos;re celebrating a special occasion, exploring new destinations, or simply enjoying the serenity of the ocean, we&apos;re here to make your dreams a reality.
            </p>
            <div className="grid grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">5000+</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                <div className="text-sm text-gray-600">Safety Record</div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">Why Choose Us?</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-2xl mr-3">✓</span>
                <div>
                  <strong>Professional Crew:</strong> Experienced captains and staff committed to your safety and satisfaction.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-2xl mr-3">✓</span>
                <div>
                  <strong>Premium Vessels:</strong> Well-maintained fleet with modern amenities and comfort features.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-2xl mr-3">✓</span>
                <div>
                  <strong>Flexible Packages:</strong> Customizable experiences tailored to your preferences and budget.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-2xl mr-3">✓</span>
                <div>
                  <strong>Safety First:</strong> All vessels meet the highest safety standards with regular inspections.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-2xl mr-3">✓</span>
                <div>
                  <strong>Unforgettable Memories:</strong> Creating experiences that you&apos;ll cherish for a lifetime.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
