import React, { useState } from 'react';
import { 
  FaBuilding,
  FaMicroscope,
  FaBook,
  FaLaptop,
  FaMusic,
  FaRunning,
  FaSwimmer,
  FaUtensils,
  FaTree,
  FaWifi,
  FaShieldAlt,
  FaCar,
  FaTheaterMasks,
  FaPalette,
  FaFlask,
  FaRobot,
  FaCode,
  FaBasketballBall,
  FaFootballBall,
  FaVolleyballBall,
  FaStar,
  FaArrowRight,
  FaCheckCircle,
  FaUsers,
  FaGraduationCap,
  FaChartLine
} from 'react-icons/fa';

const Facilities = () => {
  const [activeCategory, setActiveCategory] = useState('labs');

  const facilityCategories = [
    {
      id: 'labs',
      name: 'Science & Technology',
      description: 'State-of-the-art laboratories and tech spaces for innovative learning',
      image: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      features: ['Advanced Equipment', 'Digital Integration', 'Research Grade Tools', 'Safety First Design'],
      icon: <FaMicroscope className="text-4xl" />
    },
    {
      id: 'sports',
      name: 'Athletics & Recreation',
      description: 'World-class sports facilities promoting physical wellness and team spirit',
      image: 'https://images.unsplash.com/photo-1549060279-7e168fce7090?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      features: ['Olympic-size Pool', 'Indoor Stadium', 'Fitness Center', 'Outdoor Fields'],
      icon: <FaRunning className="text-4xl" />
    },
    {
      id: 'arts',
      name: 'Arts & Performance',
      description: 'Creative spaces that inspire artistic expression and cultural appreciation',
      image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      features: ['Theater Studio', 'Art Galleries', 'Music Rooms', 'Dance Studios'],
      icon: <FaPalette className="text-4xl" />
    }
  ];

  const stats = [
    { number: '50+', label: 'Specialized Labs', icon: <FaFlask className="text-4xl" />, suffix: 'Spaces' },
    { number: '25', label: 'Sports Facilities', icon: <FaBasketballBall className="text-4xl" />, suffix: 'Areas' },
    { number: '15K', label: 'Square Meters', icon: <FaBuilding className="text-4xl" />, suffix: 'Campus' },
    { number: '24/7', label: 'Security & Support', icon: <FaShieldAlt className="text-4xl" />, suffix: 'Safety' }
  ];

  const features = [
    {
      icon: <FaWifi className="text-4xl" />,
      title: "Smart Campus",
      description: "High-speed WiFi and digital learning infrastructure"
    },
    {
      icon: <FaTree className="text-4xl" />,
      title: "Green Spaces",
      description: "Eco-friendly campus with lush gardens and outdoor learning areas"
    },
    {
      icon: <FaUtensils className="text-4xl" />,
      title: "Dining Halls",
      description: "Healthy and diverse meal options for all students"
    },
    {
      icon: <FaCar className="text-4xl" />,
      title: "Transportation",
      description: "Safe and reliable campus transport services"
    }
  ];

  const labs = [
    {
      category: 'Science Labs',
      icon: <FaFlask className="text-4xl" />,
      color: 'from-blue-500 to-cyan-600',
      facilities: [
        { name: 'Physics Laboratory', description: 'Advanced equipment for mechanics, optics, and electronics' },
        { name: 'Chemistry Lab', description: 'Modern fume hoods and analytical instruments' },
        { name: 'Biology Research Center', description: 'Microscopy and biotechnology equipment' },
        { name: 'Environmental Science', description: 'Ecology and sustainability research tools' }
      ]
    },
    {
      category: 'Technology Centers',
      icon: <FaLaptop className="text-4xl" />,
      color: 'from-green-500 to-emerald-600',
      facilities: [
        { name: 'Computer Labs', description: 'High-performance workstations and software' },
        { name: 'Robotics Workshop', description: '3D printers and prototyping equipment' },
        { name: 'AI & Data Science', description: 'Machine learning and big data analytics' },
        { name: 'Digital Media Studio', description: 'Video production and graphic design tools' }
      ]
    },
    {
      category: 'Creative Spaces',
      icon: <FaTheaterMasks className="text-4xl" />,
      color: 'from-purple-500 to-pink-600',
      facilities: [
        { name: 'Performing Arts Theater', description: '500-seat auditorium with professional lighting' },
        { name: 'Music Practice Rooms', description: 'Soundproof studios with instruments' },
        { name: 'Art Studios', description: 'Natural light studios for various media' },
        { name: 'Photography Lab', description: 'Digital and traditional darkroom facilities' }
      ]
    },
    {
      category: 'Sports Complex',
      icon: <FaFootballBall className="text-4xl" />,
      color: 'from-orange-500 to-red-600',
      facilities: [
        { name: 'Olympic Swimming Pool', description: '8-lane competition pool with diving boards' },
        { name: 'Indoor Stadium', description: 'Basketball, volleyball, and badminton courts' },
        { name: 'Fitness Center', description: 'Cardio and strength training equipment' },
        { name: 'Outdoor Fields', description: 'Soccer, track, and field facilities' }
      ]
    }
  ];

  const specialFacilities = [
    {
      icon: <FaRobot className="text-4xl" />,
      title: 'Innovation Hub',
      description: 'Dedicated space for robotics, AI, and emerging technologies with maker spaces',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      icon: <FaBook className="text-4xl" />,
      title: 'Digital Library',
      description: 'Modern learning commons with extensive digital resources and collaborative spaces',
      image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      icon: <FaMusic className="text-4xl" />,
      title: 'Recording Studio',
      description: 'Professional audio recording and music production facilities',
      image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      icon: <FaSwimmer className="text-4xl" />,
      title: 'Aquatic Center',
      description: 'Olympic-standard swimming pool with training and competition facilities',
      image: 'https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    }
  ];

  const campusFeatures = [
    {
      category: 'Learning Spaces',
      icon: <FaGraduationCap className="text-3xl" />,
      features: ['Smart Classrooms', 'Lecture Halls', 'Study Lounges', 'Collaborative Zones', 'Quiet Study Areas']
    },
    {
      category: 'Recreation',
      icon: <FaUsers className="text-3xl" />,
      features: ['Student Lounge', 'Game Rooms', 'Outdoor Seating', 'Café Areas', 'Social Spaces']
    },
    {
      category: 'Wellness',
      icon: <FaStar className="text-3xl" />,
      features: ['Health Center', 'Counseling Services', 'Meditation Rooms', 'Yoga Studio', 'Wellness Programs']
    },
    {
      category: 'Support Services',
      icon: <FaShieldAlt className="text-3xl" />,
      features: ['Career Center', 'Library Services', 'IT Support', 'Academic Advising', 'Tutoring Centers']
    }
  ];

  const facilityHighlights = [
    { year: '2024', feature: 'New Innovation Wing Opening', capacity: '500+ Students' },
    { year: '2023', feature: 'Sports Complex Renovation', capacity: 'State-of-the-Art' },
    { year: '2023', feature: 'Green Campus Initiative', capacity: 'Solar Powered' },
    { year: '2022', feature: 'Digital Library Expansion', capacity: '10,000+ Resources' },
    { year: '2022', feature: 'Arts Center Modernization', capacity: 'Creative Hub' }
  ];

  const currentCategory = facilityCategories.find(category => category.id === activeCategory);

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Attractive Header Section */}
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
                <span className="text-white text-lg font-semibold">World-Class Facilities Since 1999</span>
              </div>
              
              <h1 className="text-6xl md:text-8xl font-black font-serif leading-tight">
                Exceptional{' '}
                <span className="bg-gradient-to-r from-blue-300 via-cyan-300 to-teal-400 bg-clip-text text-transparent">
                  Facilities
                </span>
              </h1>
              
              <p className="text-2xl md:text-3xl text-gray-200 leading-relaxed font-sans">
                Where <span className="text-blue-300 font-bold">innovation</span> meets{' '}
                <span className="text-cyan-300 font-bold">inspiration</span> in state-of-the-art{' '}
                <span className="text-teal-300 font-bold">learning environments</span>
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

      {/* Facility Categories Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full -translate-x-36 -translate-y-36 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full translate-x-36 translate-y-36 blur-3xl"></div>
        
        <div className="relative container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-3 rounded-full text-lg font-bold mb-6 shadow-2xl">
              <FaBuilding className="mr-2" />
              Facility Categories
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-8 font-serif leading-tight">
              Spaces for{' '}
              <span className="bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent">
                Every Purpose
              </span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto font-sans">
              Purpose-built environments designed to enhance learning, creativity, and wellness
            </p>
          </div>

          {/* Category Selector */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {facilityCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-2xl'
                    : 'bg-white text-gray-600 hover:bg-gray-100 shadow-lg border border-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Category Details */}
          <div className="bg-white rounded-4xl shadow-2xl border border-gray-200/50 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image Section */}
              <div className="relative h-96 lg:h-full">
                <img 
                  src={currentCategory.image} 
                  alt={currentCategory.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent lg:bg-gradient-to-r lg:from-black/40 lg:to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="text-4xl font-black mb-2 font-serif">{currentCategory.name}</div>
                  <div className="text-xl font-bold opacity-90">{currentCategory.description}</div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-12">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white p-4 rounded-3xl shadow-lg">
                    {currentCategory.icon}
                  </div>
                  <div className="ml-6">
                    <h3 className="text-3xl font-bold text-gray-900 font-serif">{currentCategory.name}</h3>
                    <p className="text-purple-600 font-semibold">Premium Facilities</p>
                  </div>
                </div>

                <p className="text-xl text-gray-600 leading-relaxed mb-8 font-sans">
                  {currentCategory.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {currentCategory.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-gray-700">
                      <FaCheckCircle className="text-purple-500 mr-3 flex-shrink-0" />
                      <span className="font-sans">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="mt-8 group text-purple-600 hover:text-purple-700 font-bold text-lg flex items-center transform hover:translate-x-3 transition-all duration-300">
                  <span>Explore {currentCategory.name}</span>
                  <FaArrowRight className="w-5 h-5 ml-3 group-hover:scale-110 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Facilities */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-100/50 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-pink-100/50 rounded-full blur-3xl"></div>
        
        <div className="relative container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-3 rounded-full text-lg font-bold mb-6 shadow-2xl">
              <FaFlask className="mr-2" />
              Detailed Facilities
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-8 font-serif leading-tight">
              Comprehensive{' '}
              <span className="bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent">
                Facilities
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {labs.map((department, index) => (
              <div 
                key={index}
                className="group bg-white rounded-4xl shadow-2xl hover-lift transition-all duration-500 overflow-hidden border border-gray-200/50 hover:border-purple-200/50"
              >
                <div className={`bg-gradient-to-r ${department.color} text-white p-8`}>
                  <div className="flex items-center">
                    <div className="bg-white/20 backdrop-blur-lg rounded-3xl p-4">
                      {department.icon}
                    </div>
                    <h3 className="text-3xl font-bold ml-6 font-serif">{department.category}</h3>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="space-y-4">
                    {department.facilities.map((facility, subIndex) => (
                      <div key={subIndex} className="border-b border-gray-100 pb-4 last:border-b-0 last:pb-0">
                        <h4 className="text-xl font-bold text-gray-900 mb-2 font-serif">{facility.name}</h4>
                        <p className="text-gray-600 font-sans">{facility.description}</p>
                      </div>
                    ))}
                  </div>
                  
                  <button className="mt-6 group text-purple-600 hover:text-purple-700 font-semibold flex items-center transform hover:translate-x-2 transition-all duration-300">
                    <span>View {department.category}</span>
                    <FaArrowRight className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Facilities */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-50 to-pink-50 rounded-full -translate-y-48 translate-x-48 blur-3xl"></div>
        
        <div className="relative container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-3 rounded-full text-lg font-bold mb-6 shadow-2xl">
              <FaStar className="mr-2" />
              Signature Facilities
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-8 font-serif leading-tight">
              Premier{' '}
              <span className="bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent">
                Spaces
              </span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto font-sans">
              Exceptional facilities that set new standards in educational environments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {specialFacilities.map((facility, index) => (
              <div 
                key={index}
                className="group bg-white rounded-4xl shadow-2xl hover-lift transition-all duration-500 overflow-hidden border border-gray-200/50 hover:border-purple-200/50"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={facility.image} 
                    alt={facility.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                <div className="p-6">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white p-4 rounded-3xl inline-flex items-center justify-center mb-4 -mt-12 relative z-10 shadow-lg">
                    {facility.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 font-serif group-hover:text-purple-600 transition-colors">
                    {facility.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed text-sm font-sans">
                    {facility.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Features */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-pink-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-pink-400"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-pink-400/10 rounded-full blur-3xl"></div>
        
        <div className="relative container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-3 rounded-full text-lg font-bold mb-6 shadow-2xl">
              <FaBuilding className="mr-2" />
              Campus Features
            </div>
            <h2 className="text-5xl md:text-7xl font-black mb-8 font-serif leading-tight">
              Complete{' '}
              <span className="bg-gradient-to-r from-purple-300 to-pink-400 bg-clip-text text-transparent">
                Campus Experience
              </span>
            </h2>
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto font-sans">
              Everything students need for success, comfort, and personal growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {campusFeatures.map((category, index) => (
              <div 
                key={index}
                className="group bg-white/10 backdrop-blur-lg rounded-4xl p-8 shadow-2xl hover-lift transition-all duration-500 border border-white/10 hover:border-purple-200/30"
              >
                <div className="text-center mb-6">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white p-4 rounded-3xl inline-flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-500">
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white font-serif">{category.category}</h3>
                </div>
                
                <ul className="space-y-3">
                  {category.features.map((feature, featIndex) => (
                    <li key={featIndex} className="flex items-center text-gray-200 text-sm">
                      <FaCheckCircle className="text-purple-300 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facility Highlights */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full -translate-x-36 -translate-y-36 blur-3xl"></div>
        
        <div className="relative container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-3 rounded-full text-lg font-bold mb-6 shadow-2xl">
              <FaChartLine className="mr-2" />
              Recent Developments
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-8 font-serif leading-tight">
              Facility{' '}
              <span className="bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent">
                Highlights
              </span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 gap-6">
              {facilityHighlights.map((highlight, index) => (
                <div 
                  key={index}
                  className="group bg-gradient-to-br from-white to-gray-50 rounded-3xl p-6 shadow-xl hover-lift transition-all duration-500 border border-gray-200/50 hover:border-purple-200/50"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-6">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-2 rounded-2xl font-bold text-lg shadow-lg">
                        {highlight.year}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 font-serif group-hover:text-purple-600 transition-colors">
                          {highlight.feature}
                        </h3>
                        <p className="text-purple-600 font-semibold text-sm mt-1">{highlight.capacity}</p>
                      </div>
                    </div>
                    <FaStar className="text-yellow-500 text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Facilities;