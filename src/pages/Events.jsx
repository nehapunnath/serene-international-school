import React, { useState } from 'react';
import { 
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaClock,
  FaUsers,
  FaArrowRight,
  FaBookmark,
  FaRegBookmark,
  FaHeart,
  FaRegHeart,
  FaTicketAlt,
  FaStar,
  FaShare
} from 'react-icons/fa';

const Events = () => {
  const [savedEvents, setSavedEvents] = useState(new Set());
  const [likedEvents, setLikedEvents] = useState(new Set());

  const features = [
    {
      icon: <FaCalendarAlt className="text-4xl" />,
      title: "Diverse Events",
      description: "Academic, cultural, sports, and social activities for all interests"
    },
    {
      icon: <FaUsers className="text-4xl" />,
      title: "Community Building",
      description: "Connect with peers and build lasting relationships"
    },
    {
      icon: <FaTicketAlt className="text-4xl" />,
      title: "Easy Registration",
      description: "Simple and quick sign-up process for all events"
    },
    {
      icon: <FaStar className="text-4xl" />,
      title: "Featured Activities",
      description: "Curated selection of must-attend campus events"
    }
  ];

  const stats = [
    { number: '42', label: 'Upcoming Events', icon: <FaCalendarAlt className="text-4xl" />, suffix: 'Activities' },
    { number: '15', label: 'Event Categories', icon: <FaUsers className="text-4xl" />, suffix: 'Types' },
    { number: '2.1K', label: 'Total Attendees', icon: <FaTicketAlt className="text-4xl" />, suffix: 'Students' },
    { number: '98%', label: 'Satisfaction Rate', icon: <FaStar className="text-4xl" />, suffix: 'Rating' }
  ];

  const events = [
    {
      id: 1,
      title: "Annual Science Symposium 2024",
      description: "Join us for the biggest science event of the year featuring Nobel laureates and cutting-edge research presentations. Explore groundbreaking discoveries and network with leading scientists.",
      date: "2024-03-15",
      time: "9:00 AM - 5:00 PM",
      location: "Main Auditorium",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      attendees: 250,
      capacity: 300,
      price: "Free",
      type: "Conference",
      organizer: "Science Department",
      tags: ["Research", "Innovation", "STEM"],
      featured: true
    },
    {
      id: 2,
      title: "Spring Music Festival",
      description: "A celebration of music featuring student bands, orchestras, and special guest performers. Enjoy live performances across multiple genres in our beautiful outdoor amphitheater.",
      date: "2024-04-20",
      time: "6:00 PM - 10:00 PM",
      location: "Central Amphitheater",
      image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      attendees: 180,
      capacity: 200,
      price: "$10",
      type: "Festival",
      organizer: "Music Club",
      tags: ["Music", "Performance", "Entertainment"],
      featured: true
    },
    {
      id: 3,
      title: "Tech Innovation Summit",
      description: "Explore the future of technology with workshops, demos, and keynote speakers from industry leaders. Hands-on sessions with latest tech innovations.",
      date: "2024-05-10",
      time: "10:00 AM - 6:00 PM",
      location: "Innovation Center",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      attendees: 150,
      capacity: 200,
      price: "$15",
      type: "Summit",
      organizer: "Tech Society",
      tags: ["AI", "Robotics", "Innovation"],
      featured: true
    },
    {
      id: 4,
      title: "Basketball Championship Finals",
      description: "Witness the epic showdown between top teams for the campus championship title. Cheer for your favorite team in this high-energy sporting event.",
      date: "2024-03-08",
      time: "7:00 PM - 9:00 PM",
      location: "Sports Complex",
      image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      attendees: 120,
      capacity: 150,
      price: "Free",
      type: "Tournament",
      organizer: "Athletics Department",
      tags: ["Sports", "Competition", "Basketball"]
    },
    {
      id: 5,
      title: "Art Exhibition Opening",
      description: "Opening night of student art exhibition featuring paintings, sculptures, and digital art. Meet the artists and enjoy refreshments.",
      date: "2024-03-12",
      time: "5:00 PM - 8:00 PM",
      location: "Art Gallery",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      attendees: 80,
      capacity: 100,
      price: "Free",
      type: "Exhibition",
      organizer: "Fine Arts Department",
      tags: ["Art", "Exhibition", "Creative"]
    },
    {
      id: 6,
      title: "Career Fair 2024",
      description: "Connect with top employers and explore internship and job opportunities. Bring your resume and make valuable professional connections.",
      date: "2024-03-18",
      time: "9:00 AM - 4:00 PM",
      location: "Convocation Hall",
      image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      attendees: 300,
      capacity: 400,
      price: "Free",
      type: "Fair",
      organizer: "Career Services",
      tags: ["Career", "Networking", "Jobs"]
    },
    {
      id: 7,
      title: "Spring Food Festival",
      description: "Taste culinary delights from around the world prepared by student clubs. Experience diverse cuisines and cooking demonstrations.",
      date: "2024-03-22",
      time: "11:00 AM - 3:00 PM",
      location: "Central Quad",
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      attendees: 200,
      capacity: 300,
      price: "$5-$15",
      type: "Festival",
      organizer: "Culinary Club",
      tags: ["Food", "Culture", "Social"]
    },
    {
      id: 8,
      title: "Environmental Awareness Week",
      description: "Workshops, talks, and activities focused on sustainability and environmental conservation. Learn how to make a positive impact.",
      date: "2024-03-25",
      time: "All Day",
      location: "Various Locations",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      attendees: 150,
      capacity: 250,
      price: "Free",
      type: "Workshop Series",
      organizer: "Environmental Club",
      tags: ["Sustainability", "Environment", "Workshop"]
    }
  ];

  const toggleSaveEvent = (eventId) => {
    const newSaved = new Set(savedEvents);
    if (newSaved.has(eventId)) {
      newSaved.delete(eventId);
    } else {
      newSaved.add(eventId);
    }
    setSavedEvents(newSaved);
  };

  const toggleLikeEvent = (eventId) => {
    const newLiked = new Set(likedEvents);
    if (newLiked.has(eventId)) {
      newLiked.delete(eventId);
    } else {
      newLiked.add(eventId);
    }
    setLikedEvents(newLiked);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 overflow-hidden">
      {/* Header Section  */}
      <section className="relative py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900 text-white overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-teal-400/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="relative container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center bg-white/20 backdrop-blur-lg rounded-full px-6 py-3 border border-white/30 shadow-lg">
                <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-3 animate-pulse"></div>
                <span className="text-white text-lg font-semibold">Vibrant Campus Life Since 1999</span>
              </div>
              
              <h1 className="text-6xl md:text-8xl font-black font-serif leading-tight">
                Campus{' '}
                <span className="bg-gradient-to-r from-blue-300 via-cyan-300 to-teal-400 bg-clip-text text-transparent">
                  Events
                </span>
              </h1>
              
              <p className="text-2xl md:text-3xl text-gray-200 leading-relaxed font-sans">
                Where <span className="text-blue-300 font-bold">memories</span> are made,{' '}
                <span className="text-cyan-300 font-bold">connections</span> are forged, and{' '}
                <span className="text-teal-300 font-bold">experiences</span> come to life
              </p>

              <div className="grid grid-cols-2 gap-6 pt-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-3 text-teal-300">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">{feature.title}</h3>
                      <p className="text-gray-300 text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Interactive Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="group bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-purple-300/50 transition-all duration-500 hover-lift"
                >
                  <div className="text-center">
                    <div className="flex justify-center text-teal-300 mb-4 group-hover:scale-110 transition-transform duration-500">
                      {stat.icon}
                    </div>
                    <div className="text-4xl md:text-5xl font-black text-white mb-2 font-serif group-hover:scale-105 transition-transform duration-500">
                      {stat.number}
                    </div>
                    <div className="text-teal-300 font-bold text-lg mb-1">{stat.suffix}</div>
                    <div className="text-gray-300 text-sm font-sans">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </section>

      {/* Events Grid Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-100/50 rounded-full -translate-x-48 -translate-y-48 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-100/50 rounded-full translate-x-48 translate-y-48 blur-3xl"></div>
        
        <div className="relative container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-3 rounded-full text-lg font-bold mb-6 shadow-2xl">
              <FaCalendarAlt className="mr-2" />
              Upcoming Events
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-8 font-serif leading-tight">
              Discover{' '}
              <span className="bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent">
                Amazing Events
              </span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto font-sans">
              Join our vibrant community and participate in unforgettable experiences
            </p>
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {events.map((event) => (
              <div 
                key={event.id}
                className="group bg-white rounded-4xl shadow-2xl hover-lift transition-all duration-500 overflow-hidden border border-gray-200/50 hover:border-purple-200/50"
              >
                {/* Event Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  
                  {/* Action Buttons */}
                  {/* <div className="absolute top-4 right-4 flex space-x-2">
                    <button 
                      onClick={() => toggleSaveEvent(event.id)}
                      className="bg-white/20 backdrop-blur-lg text-white p-3 rounded-xl hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
                    >
                      {savedEvents.has(event.id) ? <FaBookmark /> : <FaRegBookmark />}
                    </button>
                    <button 
                      onClick={() => toggleLikeEvent(event.id)}
                      className="bg-white/20 backdrop-blur-lg text-white p-3 rounded-xl hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
                    >
                      {likedEvents.has(event.id) ? <FaHeart className="text-red-400" /> : <FaRegHeart />}
                    </button>
                  </div> */}

                  {/* Featured Badge */}
                  {event.featured && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-2 rounded-2xl text-sm font-bold shadow-lg">
                        Featured
                      </span>
                    </div>
                  )}

                  {/* Date Badge */}
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-white/20 backdrop-blur-lg text-white px-4 py-2 rounded-2xl text-center">
                      <div className="text-sm font-bold">{formatDate(event.date)}</div>
                      <div className="text-xs opacity-90">{event.time}</div>
                    </div>
                  </div>
                </div>
                
                {/* Event Details */}
                <div className="p-6">
                  {/* <div className="flex items-center justify-between mb-4">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-2 rounded-2xl text-sm font-bold">
                      {event.type}
                    </span>
                    <span className="text-2xl font-bold text-gray-900">
                      {event.price}
                    </span>
                  </div> */}
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 font-serif group-hover:text-purple-600 transition-colors line-clamp-2">
                    {event.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3">
                    {event.description}
                  </p>

                  {/* Event Meta Information */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-gray-700">
                      <FaMapMarkerAlt className="text-purple-500 mr-3 flex-shrink-0" />
                      <span className="font-medium">{event.location}</span>
                    </div>
                    {/* <div className="flex items-center text-gray-700">
                      <FaUsers className="text-purple-500 mr-3 flex-shrink-0" />
                      <span className="font-medium">{event.attendees} attending • {event.capacity} capacity</span>
                    </div> */}
                    {/* <div className="flex items-center text-gray-700">
                      <FaTicketAlt className="text-purple-500 mr-3 flex-shrink-0" />
                      <span className="font-medium">Organized by {event.organizer}</span>
                    </div> */}
                  </div>

                  {/* Tags */}
                  {/* <div className="flex flex-wrap gap-2 mb-6">
                    {event.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div> */}

                  {/* Action Buttons */}
                  {/* <div className="flex items-center justify-between">
                    <button className="flex-1 bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-4 rounded-2xl font-bold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center mr-3">
                      <span>Register Now</span>
                      <FaArrowRight className="w-4 h-4 ml-2" />
                    </button>
                    <button className="bg-white text-purple-600 p-4 rounded-2xl font-semibold hover:bg-purple-50 border border-purple-200 transform hover:scale-105 transition-all duration-300">
                      <FaShare />
                    </button>
                  </div> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-pink-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-pink-400"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-400/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-8 font-serif leading-tight">
            Don't Miss Out on{' '}
            <span className="bg-gradient-to-r from-purple-300 to-pink-400 bg-clip-text text-transparent">
              Amazing Experiences
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Be part of our vibrant campus community and create memories that will last a lifetime
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center">
              <span>View All Events</span>
              <FaArrowRight className="w-5 h-5 ml-3" />
            </button>
            <button className="bg-transparent text-white border-2 border-white/30 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/10 backdrop-blur-lg transform hover:scale-105 transition-all duration-300">
              Get Event Updates
            </button>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Events;