export default function VideoSection() {
  const videos = [
    {
      id: 1,
      title: 'Feed Wild Tarpon Near Caye Caulker',
      description: 'Experience the thrill of hand-feeding massive wild tarpons in their natural habitat',
      videoUrl: '/videos/feed-tarpon.mp4',
      thumbnail: '/images/tarpon-thumb.jpg'
    },
    {
      id: 2,
      title: 'Catch Lobster on a Reef Adventure',
      description: 'Dive for Caribbean spiny lobster on the pristine Belize barrier reef',
      videoUrl: '/videos/lobster-reef.mp4',
      thumbnail: '/images/lobster-thumb.jpg'
    },
    {
      id: 3,
      title: 'Caribbean Sunset Experience',
      description: 'Watch the sky turn gold and crimson from the best seat in the house',
      videoUrl: '/videos/sunset-cruise.mp4',
      thumbnail: '/images/sunset-thumb.jpg'
    },
    {
      id: 4,
      title: 'Caye Caulker Day Trip',
      description: 'Experience the island charm and adventure activities at Caye Caulker',
      videoUrl: '/videos/caye-caulker.mp4',
      thumbnail: '/images/caye-caulker-thumb.jpg'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <h2 className="section-title text-center mb-12">Experience the Adventure</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((video) => (
            <div 
              key={video.id}
              className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group"
            >
              {/* Video Container */}
              <div className="relative aspect-video bg-gray-900">
                <video
                  className="w-full h-full object-cover"
                  controls
                  preload="metadata"
                  poster={video.thumbnail}
                >
                  <source src={video.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              
              {/* Video Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {video.title}
                </h3>
                <p className="text-gray-200 text-sm">
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
