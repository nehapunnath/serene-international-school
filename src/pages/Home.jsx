import React, { useState, useEffect } from 'react';
import { 
  FaGraduationCap, 
  FaGlobeAmericas, 
  FaRunning, 
  FaChalkboardTeacher,
  FaAward,
  FaUserGraduate,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaDownload,
  FaArrowRight,
  FaCheckCircle,
  FaChevronRight,
  FaTrophy,
  FaUsers,
  FaClock
} from 'react-icons/fa';
import { 
  HiAcademicCap, 
  HiUsers as HiUsersIcon,
  HiClock as HiClockIcon
} from 'react-icons/hi';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const features = [
    {
      icon: <HiAcademicCap className="text-4xl" />,
      title: 'Academic Excellence',
      description: 'Rigorous curriculum designed to nurture critical thinking and intellectual curiosity',
      image: 'https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: <FaGlobeAmericas className="text-4xl" />,
      title: 'Global Perspective',
      description: 'International programs and cultural exchange opportunities for worldwide exposure',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: <FaRunning className="text-4xl" />,
      title: 'Sports & Arts',
      description: 'State-of-the-art facilities for comprehensive physical and creative development',
      image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: <FaChalkboardTeacher className="text-4xl" />,
      title: 'Expert Faculty',
      description: 'Dedicated educators with international experience and advanced qualifications',
      image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  const stats = [
    { number: '98%', label: 'Graduation Rate', icon: <FaUserGraduate className="text-3xl mb-4" /> },
    { number: '50+', label: 'National Awards', icon: <FaTrophy className="text-3xl mb-4" /> },
    { number: '900+', label: 'Successful Alumni', icon: <HiUsersIcon className="text-3xl mb-4" /> },
    { number: '25+', label: 'Years of Excellence', icon: <HiClockIcon className="text-3xl mb-4" /> }
  ];

  const news = [
    {
      title: 'Science Fair 2024 Winners',
      date: 'Dec 15, 2024',
      excerpt: 'Our students secured top positions in the National Science Fair competition.',
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      icon: <FaAward className="text-2xl" />
    },
    {
      title: 'New Sports Complex Inauguration',
      date: 'Dec 10, 2024',
      excerpt: 'State-of-the-art sports facility now open for students and staff.',
      image: 'https://images.unsplash.com/photo-1549060279-7e168fce7090?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      icon: <FaRunning className="text-2xl" />
    },
    {
      title: 'International Exchange Program',
      date: 'Nov 28, 2024',
      excerpt: 'Partnership with schools in 5 countries for student exchange programs.',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      icon: <FaGlobeAmericas className="text-2xl" />
    }
  ];

  const gallery = [
    'https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1541336032412-2048a678540d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  ];

  const heroSlides = [
    {
      image: 'https://images.unsplash.com/photo-1541336032412-2048a678540d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      title: 'Where Excellence Meets Innovation',
      subtitle: 'Nurturing global leaders since 1999',
    //   icon: <HiAcademicCap className="text-5xl mb-6" />
    },
    {
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      title: 'Global Education Standards',
      subtitle: 'Preparing students for international success',
    //   icon: <FaGlobeAmericas className="text-5xl mb-6" />
    },
    {
      image: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      title: 'State-of-the-Art Facilities',
      subtitle: 'World-class infrastructure for holistic development',
    //   icon: <FaRunning className="text-5xl mb-6" />
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Enhanced Hero Carousel */}
      <section className="relative h-screen overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-teal-900/70 to-cyan-900/60"></div>
            </div>
          </div>
        ))}
        
        <div className="relative z-20 container mx-auto px-6 h-full flex items-center">
          <div className={`max-w-2xl transition-all duration-1000 transform ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>
            <div className="inline-flex items-center bg-white/20 backdrop-blur-lg rounded-full px-6 py-3 mb-8 border border-white/30 shadow-lg">
              <div className="w-3 h-3 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full mr-3 animate-pulse shadow-glow"></div>
              <span className="text-white text-lg font-semibold tracking-wide flex items-center">
                <FaClock className="mr-2" />
                Since 1999 - Shaping Future Leaders
              </span>
            </div>
            
            <div className="text-white mb-6 opacity-90">
              {heroSlides[currentSlide].icon}
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl text-white font-White mb-8 font-serif leading-none tracking-tight">
              Serene
              <span className="block bg-gradient-to-r from-teal-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent mt-4">
                International School
              </span>
            </h1>
            
            <div className="bg-white/15 backdrop-blur-xl p-8 rounded-3xl border border-white/25 shadow-2xl mb-12">
              <p className="text-2xl md:text-3xl text-white font-light leading-relaxed">
                {heroSlides[currentSlide].title}
              </p>
              <p className="text-xl text-teal-100 mt-4 font-medium flex items-center">
                <FaCheckCircle className="mr-2 text-teal-300" />
                {heroSlides[currentSlide].subtitle}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <button className="group relative bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white px-12 py-5 rounded-2xl font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <span className="relative">Explore Campus</span>
                <FaArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform" />
              </button>
              
              {/* <button className="group relative border-3 border-white text-white hover:bg-white hover:text-gray-900 px-12 py-5 rounded-2xl font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl backdrop-blur-lg flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-white transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <span className="relative">Apply Now</span>
                <FaChevronRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform" />
              </button> */}
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20 flex space-x-4">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-white scale-125 shadow-glow' 
                  : 'bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="animate-bounce">
            <div className="w-1 h-8 bg-white/80 rounded-full mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Animated Stats Section */}
      <section className="py-24 bg-gradient-to-br from-white via-blue-50 to-cyan-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-teal-200/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-cyan-200/30 rounded-full blur-3xl"></div>
        
        <div className="relative container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center group bg-white/80 backdrop-blur-lg p-10 rounded-3xl shadow-2xl hover-lift transition-all duration-500 border border-white/50 hover:border-teal-200/50"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
              >
                <div className="flex justify-center text-teal-600 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
                  {stat.icon}
                </div>
                <div className="text-6xl md:text-7xl font-black bg-gradient-to-r from-teal-600 to-cyan-700 bg-clip-text text-transparent mb-6 font-serif group-hover:scale-110 transition-transform duration-500">
                  {stat.number}
                </div>
                <div className="text-gray-700 font-bold text-xl font-sans border-t border-gray-200/50 pt-6 group-hover:text-teal-700 transition-colors">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-full -translate-x-36 -translate-y-36 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full translate-x-36 translate-y-36 blur-3xl"></div>
        
        <div className="relative container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-8 py-3 rounded-full text-lg font-bold mb-6 shadow-2xl">
              <HiAcademicCap className="mr-2" />
              Why Choose Us
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-8 font-serif leading-tight">
              The{' '}
              <span className="bg-gradient-to-r from-teal-500 to-cyan-600 bg-clip-text text-transparent">
                Serene Edge
              </span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto font-sans leading-relaxed bg-white/60 backdrop-blur-sm p-8 rounded-3xl border border-gray-200/50">
              We provide a transformative educational experience that empowers students to excel in a dynamic global landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group relative bg-white rounded-4xl shadow-2xl hover-lift transition-all duration-700 overflow-hidden border border-gray-200/50 hover:border-teal-200/50"
                style={{
                  animationDelay: `${index * 0.2}s`,
                  animation: 'fadeInUp 0.8s ease-out forwards'
                }}
              >
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute top-6 left-6 text-white bg-teal-600/90 backdrop-blur-lg rounded-2xl p-4 shadow-2xl">
                    {feature.icon}
                  </div>
                  <div className="absolute bottom-6 left-6">
                    <h3 className="text-3xl font-bold text-white font-serif mb-2 group-hover:text-teal-300 transition-colors">
                      {feature.title}
                    </h3>
                  </div>
                </div>
                <div className="p-10">
                  <p className="text-gray-600 leading-relaxed text-xl font-sans mb-8">
                    {feature.description}
                  </p>
                  <button className="group text-teal-600 hover:text-teal-700 font-bold text-lg flex items-center transform hover:translate-x-3 transition-all duration-300">
                    <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                      Discover More
                    </span>
                    <FaArrowRight className="w-5 h-5 ml-3 group-hover:scale-110 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Gallery Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-teal-900 to-cyan-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-400 to-cyan-400"></div>
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-teal-400/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl"></div>
        
        <div className="relative container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black mb-8 font-serif leading-tight">
              Our{' '}
              <span className="bg-gradient-to-r from-teal-300 to-cyan-400 bg-clip-text text-transparent">
                Inspiring Campus
              </span>
            </h2>
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto font-sans bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10">
              Experience our world-class facilities designed to inspire creativity and innovation.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {gallery.map((image, index) => (
              <div 
                key={index}
                className="group relative h-80 rounded-3xl overflow-hidden hover-lift transition-all duration-500 shadow-2xl"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
              >
                <img 
                  src={image} 
                  alt={`Campus ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <div className="text-white text-lg font-bold font-sans flex items-center">
                    <FaMapMarkerAlt className="mr-2 text-teal-300" />
                    Campus View {index + 1}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced News Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-full -translate-y-48 translate-x-48 blur-3xl"></div>
        
        <div className="relative container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-8 py-3 rounded-full text-lg font-bold mb-6 shadow-2xl">
              <FaCalendarAlt className="mr-2" />
              Latest Updates
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-8 font-serif leading-tight">
              Campus{' '}
              <span className="bg-gradient-to-r from-teal-500 to-cyan-600 bg-clip-text text-transparent">
                Chronicles
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {news.map((item, index) => (
              <div 
                key={index}
                className="group bg-white rounded-4xl shadow-2xl hover-lift transition-all duration-500 overflow-hidden border border-gray-200/50 hover:border-teal-200/50"
                style={{
                  animationDelay: `${index * 0.15}s`,
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm text-teal-600 text-lg font-bold px-4 py-2 rounded-2xl font-sans shadow-lg flex items-center">
                    {item.icon}
                    <span className="ml-2">{item.date}</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 font-serif group-hover:text-teal-600 transition-colors leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg font-sans mb-6">
                    {item.excerpt}
                  </p>
                  <button className="group text-teal-600 hover:text-teal-700 font-bold text-lg flex items-center transform hover:translate-x-3 transition-all duration-300">
                    <span>Read Full Story</span>
                    <FaArrowRight className="w-5 h-5 ml-3 group-hover:scale-110 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Enhanced CTA */}
      <section className="relative py-32 bg-gradient-to-br from-teal-600 via-cyan-600 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-400 to-cyan-400"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-8xl font-black mb-12 font-serif leading-tight">
            Begin Your{' '}
            <span className="bg-gradient-to-r from-teal-200 to-cyan-300 bg-clip-text text-transparent">
              Legacy
            </span>
          </h2>
          <p className="text-2xl md:text-3xl mb-16 max-w-4xl mx-auto font-sans opacity-95 leading-relaxed bg-white/10 backdrop-blur-lg p-12 rounded-4xl border border-white/20">
            Join our vibrant community of innovators and leaders. Your journey to excellence starts here at Serene International.
          </p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <button className="group relative bg-white text-teal-600 hover:text-teal-700 px-16 py-6 rounded-2xl font-bold text-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl flex items-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-cyan-500/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <FaMapMarkerAlt className="w-8 h-8 mr-4 relative" />
              <span className="relative">Schedule Campus Tour</span>
            </button>
            
            {/* <button className="group relative border-3 border-white text-white hover:bg-white hover:text-teal-600 px-16 py-6 rounded-2xl font-bold text-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl backdrop-blur-lg flex items-center overflow-hidden">
              <div className="absolute inset-0 bg-white transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <FaDownload className="w-8 h-8 mr-4 relative" />
              <span className="relative">Download Brochure</span>
            </button> */}
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .hover-lift:hover {
          transform: translateY(-10px);
        }
        
        .shadow-glow {
          box-shadow: 0 0 20px rgba(45, 212, 191, 0.5);
        }
        
        .shadow-3xl {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }
        
        .rounded-4xl {
          border-radius: 2.5rem;
        }
      `}</style>
    </div>
  );
};

export default Home;