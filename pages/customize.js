import Head from 'next/head';
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

export default function Customize() {
  const [activities, setActivities] = useState([
    {
      id: 'reef-fishing',
      title: 'Reef Fishing',
      description: "Experience the thrill of fishing on Belize's world-renowned barrier reef. Anglers of all levels can target snapper, grouper, barracuda, and other local species while surrounded by turquoise waters.",
      priority: null
    },
    {
      id: 'speargun-fishing',
      title: 'Speargun Fishing',
      description: "For the adventurous, try traditional spearfishing along the reef. With guidance from your captain, you'll learn safe techniques to free dive and spear your own catch for an unforgettable, hands-on experience.",
      priority: null
    },
    {
      id: 'lobster',
      title: 'Lobster (Seasonal: June 15-Feb 14)',
      description: 'Catch Caribbean spiny lobster fresh from the reef during open season. Enjoy your lobster grilled beachside or prepared as part of a fresh meal.',
      priority: null
    },
    {
      id: 'conch',
      title: 'Conch (Seasonal: Oct 1-June 30)',
      description: 'Hunt for queen conch in their natural habitat during season. Conch is a Belizean delicacy, often prepared as fresh ceviche onboard.',
      priority: null
    },
    {
      id: 'snorkel',
      title: 'Snorkel',
      description: "Discover vibrant coral gardens and schools of tropical fish as you snorkel Belize's crystal-clear waters. Snorkel gear rental is $30 per person if needed; guests may bring their own.",
      priority: null
    },
    {
      id: 'shark-ray-alley',
      title: 'Shark Ray Alley / Hol Chan Marine Reserve',
      description: "One of Belize's most famous snorkel spots. Swim alongside nurse sharks and stingrays, and explore Hol Chan's protected reef system teeming with marine life. (Hol Chan Marine Reserve requires a $15 per person fee.)",
      priority: null
    },
    {
      id: 'seahorses-tarpons',
      title: 'Visit Seahorses / Hand-Feed Wild Tarpons & Stingrays',
      description: 'Stop at sanctuaries to see seahorses, hand-feed massive wild tarpons, and interact with friendly stingrays in the shallows.',
      priority: null
    },
    {
      id: 'secret-beach',
      title: 'Secret Beach',
      description: 'Relax in crystal-clear shallow waters at the famous Secret Beach. Enjoy the laid-back island vibe with swings, beach bars, and an inflatable water obstacle course. (Limited with other activities on half-day charters.)',
      priority: null
    },
    {
      id: 'caye-caulker',
      title: 'Caye Caulker',
      description: "A must-see island with Caribbean charm. Stroll sandy streets, shop local vendors, and enjoy fresh seafood and tropical drinks. Don't miss The Split, home to the world-famous Lazy Lizard bar.",
      priority: null
    },
    {
      id: 'beach-bbq',
      title: 'Beach BBQ',
      description: 'Includes fresh catch, lobster (seasonal), and conch (seasonal), served with ceviche, potatoes, vegetables, and rice (Mayan-style). Pricing: $75 per booking (up to 4 guests); $25 each additional guest.',
      priority: null
    }
  ]);

  const setPriority = (activityId, priority) => {
    setActivities(activities.map(activity => 
      activity.id === activityId 
        ? { ...activity, priority } 
        : activity
    ));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission - could send to backend or show confirmation
    console.log('Selected activities:', activities.filter(a => a.priority));
    alert('Your custom charter preferences have been saved! We will contact you to confirm your adventure.');
  };

  return (
    <div>
      <Head>
        <title>Customize Your Adventure - Rene's Adventures</title>
        <meta name="description" content="Design your perfect day on the water. Select and prioritize activities for your custom charter experience." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="py-20 bg-gray-50 min-h-screen">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="section-title text-center">Customize Your Adventure</h1>
            <p className="text-lg text-gray-700 text-center mb-12">
              Select the activities you're interested in and rank them from highest to lowest priority. 
              We'll design your perfect charter experience based on your preferences.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {activities.map((activity) => (
                <div 
                  key={activity.id}
                  className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {activity.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {activity.description}
                      </p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-semibold text-gray-700">Priority</label>
                      <select
                        value={activity.priority || ''}
                        onChange={(e) => setPriority(activity.id, e.target.value)}
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-500 focus:border-transparent"
                      >
                        <option value="">Not Selected</option>
                        <option value="high">High</option>
                        <option value="medium">Medium</option>
                        <option value="low">Low</option>
                      </select>
                    </div>
                  </div>
                </div>
              ))}

              <div className="bg-ocean-50 border-l-4 border-ocean-600 p-6 rounded-lg">
                <p className="text-gray-800">
                  <strong>Note:</strong> If there's something special you'd like custom-tailored, 
                  reach out directly and we'll do our best to accommodate your request and provide 
                  pricing and timing details.
                </p>
              </div>

              <div className="flex justify-center gap-4">
                <button
                  type="submit"
                  className="btn-primary"
                >
                  Submit Your Preferences
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
