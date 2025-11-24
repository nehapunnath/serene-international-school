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
  FaGraduationCap,
  FaTrophy,
  FaMusic,
  FaPalette,
  FaFlask,
  FaTree
} from 'react-icons/fa';

const Events = () => {
  const [savedEvents, setSavedEvents] = useState(new Set());
  const [likedEvents, setLikedEvents] = useState(new Set());

  const features = [
    {
      icon: <FaCalendarAlt className="text-4xl" />,
      title: "Diverse Activities",
      description: "Academic, sports, arts, and cultural events for all students"
    },
    {
      icon: <FaUsers className="text-4xl" />,
      title: "Community Building",
      description: "Fostering friendships and school spirit through events"
    },
    {
      icon: <FaGraduationCap className="text-4xl" />,
      title: "Educational Focus",
      description: "Learning experiences beyond the classroom"
    },
    {
      icon: <FaStar className="text-4xl" />,
      title: "Featured Programs",
      description: "Special events that highlight student talents"
    }
  ];

  const stats = [
    { number: '25+', label: 'Annual Events', icon: <FaCalendarAlt className="text-4xl" />, suffix: 'Activities' },
    { number: '8', label: 'Event Types', icon: <FaUsers className="text-4xl" />, suffix: 'Categories' },
    { number: '1.2K', label: 'Student Participants', icon: <FaTicketAlt className="text-4xl" />, suffix: 'Students' },
    { number: '95%', label: 'Participation Rate', icon: <FaStar className="text-4xl" />, suffix: 'Engagement' }
  ];

  const events = [
    {
      id: 1,
      title: "Annual Science Fair 2024",
      description: "Showcasing innovative science projects and experiments by our talented students. Explore fascinating discoveries and hands-on demonstrations.",
      date: "2024-03-15",
      time: "9:00 AM - 3:00 PM",
      location: "School Science Block",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      attendees: 200,
      capacity: 250,
      price: "Free",
      type: "Science Fair",
      organizer: "Science Department",
      tags: ["Science", "Projects", "Innovation"],
      featured: true
    },
    {
      id: 2,
      title: "School Annual Day Celebration",
      description: "A grand celebration of our school's achievements featuring cultural performances, award ceremonies, and student talents on display.",
      date: "2024-04-20",
      time: "5:00 PM - 8:00 PM",
      location: "School Auditorium",
      image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      attendees: 500,
      capacity: 600,
      price: "Free",
      type: "Cultural Event",
      organizer: "School Management",
      tags: ["Celebration", "Performance", "Awards"],
      featured: true
    },
    {
      id: 3,
      title: "Sports Day 2024",
      description: "Annual inter-house sports competition featuring track events, team games, and exciting matches. Cheer for your house teams!",
      date: "2024-02-10",
      time: "8:00 AM - 4:00 PM",
      location: "School Sports Ground",
      image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      attendees: 800,
      capacity: 1000,
      price: "Free",
      type: "Sports Event",
      organizer: "Sports Department",
      tags: ["Sports", "Competition", "Houses"],
      featured: true
    },
    {
      id: 4,
      title: "Art & Craft Exhibition",
      description: "Display of creative artworks, paintings, sculptures, and crafts created by our students throughout the academic year.",
      date: "2024-03-08",
      time: "10:00 AM - 4:00 PM",
      location: "School Art Gallery",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      attendees: 150,
      capacity: 200,
      price: "Free",
      type: "Art Exhibition",
      organizer: "Art Department",
      tags: ["Art", "Creativity", "Exhibition"]
    },
    {
      id: 5,
      title: "Math Olympiad Competition",
      description: "Inter-school mathematics competition challenging students with complex problems and logical reasoning tests.",
      date: "2024-03-25",
      time: "9:30 AM - 1:30 PM",
      location: "School Library",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      attendees: 100,
      capacity: 120,
      price: "Free",
      type: "Academic Competition",
      organizer: "Mathematics Department",
      tags: ["Mathematics", "Competition", "Academic"]
    },
    {
      id: 6,
      title: "Environment Day Celebration",
      description: "Awareness programs, tree plantation drive, and workshops on environmental conservation and sustainable practices.",
      date: "2024-06-05",
      time: "9:00 AM - 2:00 PM",
      location: "School Campus",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      attendees: 300,
      capacity: 400,
      price: "Free",
      type: "Awareness Program",
      organizer: "Eco Club",
      tags: ["Environment", "Sustainability", "Workshop"]
    },
    {
      id: 7,
      title: "School Book Fair",
      description: "Annual book fair featuring educational books, story collections, and interactive reading sessions with authors.",
      date: "2024-05-15",
      time: "9:00 AM - 5:00 PM",
      location: "School Library",
      image: "https://images.unsplash.com/photo-1524578271613-d550eacf6090?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      attendees: 250,
      capacity: 300,
      price: "Free Entry",
      type: "Book Fair",
      organizer: "Library Department",
      tags: ["Books", "Reading", "Education"]
    },
    {
      id: 8,
      title: "Music & Dance Recital",
      description: "An evening of musical performances and dance recitals showcasing the talents of our student musicians and dancers.",
      date: "2024-04-12",
      time: "5:30 PM - 7:30 PM",
      location: "School Amphitheater",
      image: "https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      attendees: 180,
      capacity: 220,
      price: "Free",
      type: "Performance",
      organizer: "Music Department",
      tags: ["Music", "Dance", "Performance"]
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
      {/* Header Section */}
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
                <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mr-3 animate-pulse"></div>
                <span className="text-white text-lg font-semibold">Vibrant School Life Since 1995</span>
              </div>
              
              <h1 className="text-6xl md:text-8xl font-black font-serif leading-tight">
                School{' '}
                <span className="bg-gradient-to-r from-blue-300 via-cyan-300 to-teal-400 bg-clip-text text-transparent">
                  Events
                </span>
              </h1>
              
              <p className="text-2xl md:text-3xl text-gray-200 leading-relaxed font-sans">
                Where <span className="text-blue-300 font-bold">learning</span> meets{' '}
                <span className="text-cyan-300 font-bold">fun</span>, and{' '}
                <span className="text-teal-300 font-bold">memories</span> are created every day
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
                  className="group bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-blue-300/50 transition-all duration-500 hover-lift"
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
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100/50 rounded-full -translate-x-48 -translate-y-48 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-100/50 rounded-full translate-x-48 translate-y-48 blur-3xl"></div>
        
        <div className="relative container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-8 py-3 rounded-full text-lg font-bold mb-6 shadow-2xl">
              <FaCalendarAlt className="mr-2" />
              Upcoming School Events
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-8 font-serif leading-tight">
              Discover{' '}
              <span className="bg-gradient-to-r from-blue-500 to-cyan-600 bg-clip-text text-transparent">
                School Activities
              </span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto font-sans">
              Engaging events that enrich learning and build school community spirit
            </p>
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {events.map((event) => (
              <div 
                key={event.id}
                className="group bg-white rounded-4xl shadow-2xl hover-lift transition-all duration-500 overflow-hidden border border-gray-200/50 hover:border-blue-200/50"
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
                  {/* {event.featured && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-4 py-2 rounded-2xl text-sm font-bold shadow-lg">
                        Featured
                      </span>
                    </div>
                  )} */}

                  {/* Date Badge */}
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-white/20 backdrop-blur-lg text-white px-4 py-2 rounded-2xl text-center">
                      <div className="text-sm font-bold">{formatDate(event.date)}</div>
                      {/* <div className="text-xs opacity-90">{event.time}</div> */}
                    </div>
                  </div>
                </div>
                
                {/* Event Details */}
                <div className="p-6">
                  {/* <div className="flex items-center justify-between mb-4">
                    <span className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-4 py-2 rounded-2xl text-sm font-bold">
                      {event.type}
                    </span>
                    <span className="text-2xl font-bold text-gray-900">
                      {event.price}
                    </span>
                  </div> */}
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 font-serif group-hover:text-blue-600 transition-colors line-clamp-2">
                    {event.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3">
                    {event.description}
                  </p>

                  {/* Event Meta Information */}
                  {/* <div className="space-y-3 mb-6">
                    <div className="flex items-center text-gray-700">
                      <FaMapMarkerAlt className="text-blue-500 mr-3 flex-shrink-0" />
                      <span className="font-medium">{event.location}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <FaUsers className="text-blue-500 mr-3 flex-shrink-0" />
                      <span className="font-medium">{event.attendees} participants • {event.capacity} capacity</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <FaGraduationCap className="text-blue-500 mr-3 flex-shrink-0" />
                      <span className="font-medium">Organized by {event.organizer}</span>
                    </div>
                  </div> */}

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
                    <button className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-6 py-4 rounded-2xl font-bold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center mr-3">
                      <span>Learn More</span>
                      <FaArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;