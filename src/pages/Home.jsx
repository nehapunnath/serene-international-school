import React, { useState, useEffect } from 'react';
import { 
  FaGraduationCap, 
  FaGlobeAmericas, 
  FaRunning, 
  FaChalkboardTeacher,
  FaAward,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaArrowRight,
  FaCheckCircle,
  FaChevronRight,
  FaLeaf,
  FaHeart,
  FaUsers,
  FaLightbulb
} from 'react-icons/fa';
import { HiAcademicCap } from 'react-icons/hi';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const values = [
    {
      icon: <FaLeaf className="text-5xl" />,
      title: 'Holistic Development',
      description: 'We nurture mind, body, and spirit through balanced academic, artistic, and physical education programs that develop well-rounded individuals.'
    },
    {
      icon: <FaHeart className="text-5xl" />,
      title: 'Student-Centered Approach',
      description: 'Every student receives personalized attention with tailored learning paths that celebrate individual strengths and support unique challenges.'
    },
    {
      icon: <FaLightbulb className="text-5xl" />,
      title: 'Innovative Learning',
      description: 'Our cutting-edge curriculum integrates technology, project-based learning, and real-world applications to prepare students for future challenges.'
    },
    {
      icon: <FaUsers className="text-5xl" />,
      title: 'Community Focus',
      description: 'We build strong partnerships between students, parents, and educators to create a supportive and collaborative learning environment.'
    }
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
    },
    {
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      title: 'Global Education Standards',
      subtitle: 'Preparing students for international success',
    },
    {
      image: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      title: 'State-of-the-Art Facilities',
      subtitle: 'World-class infrastructure for holistic development',
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
                <FaCalendarAlt className="mr-2" />
                Since 1999 - Shaping Future Leaders
              </span>
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

      {/* Redesigned Why Choose Us Section */}
      <section className="py-24 bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-teal-200/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-cyan-200/30 rounded-full blur-3xl"></div>
        
        <div className="relative container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-8 py-3 rounded-full text-lg font-bold mb-6 shadow-2xl">
              <HiAcademicCap className="mr-2" />
              Our Educational Philosophy
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-8 font-serif leading-tight">
              The{' '}
              <span className="bg-gradient-to-r from-teal-500 to-cyan-600 bg-clip-text text-transparent">
                Serene Difference
              </span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto font-sans leading-relaxed bg-white/60 backdrop-blur-sm p-8 rounded-3xl border border-gray-200/50">
              At Serene International, we believe education should inspire curiosity, foster creativity, 
              and build character. Our approach goes beyond academics to shape compassionate global citizens.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div 
                key={index}
                className="group relative bg-white rounded-4xl shadow-2xl hover-lift transition-all duration-500 p-12 border border-gray-200/50 hover:border-teal-200/50"
                style={{
                  animationDelay: `${index * 0.15}s`,
                  animation: 'fadeInUp 0.8s ease-out forwards'
                }}
              >
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 bg-gradient-to-br from-teal-500 to-cyan-600 text-white p-6 rounded-3xl shadow-2xl group-hover:scale-110 transition-transform duration-500">
                    {value.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-gray-900 mb-4 font-serif group-hover:text-teal-600 transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-lg font-sans">
                      {value.description}
                    </p>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-full -translate-y-8 translate-x-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-full translate-y-8 -translate-x-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200"></div>
              </div>
            ))}
          </div>

          {/* Additional Impact Statement */}
          <div className="mt-20 text-center">
            <div className="bg-white/80 backdrop-blur-lg rounded-4xl p-12 shadow-2xl border border-gray-200/50 max-w-4xl mx-auto">
              <h3 className="text-4xl font-black text-gray-900 mb-6 font-serif">
                Building Futures, Shaping Tomorrow
              </h3>
              <p className="text-xl text-gray-600 leading-relaxed font-sans">
                Every day at Serene International, we witness the transformation of young minds into 
                confident, capable individuals ready to make their mark on the world. Join us in this 
                incredible journey of growth and discovery.
              </p>
            </div>
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

      {/* Final Enhanced CTA - Join Our Community */}
      <section className="relative py-32 bg-gradient-to-br from-slate-900 via-teal-900 to-cyan-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-400 to-cyan-400"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-8xl font-black mb-12 font-serif leading-tight">
            Join Our{' '}
            <span className="bg-gradient-to-r from-teal-200 to-cyan-300 bg-clip-text text-transparent">
              Learning Family
            </span>
          </h2>
          <p className="text-2xl md:text-3xl mb-16 max-w-4xl mx-auto font-sans opacity-95 leading-relaxed bg-white/10 backdrop-blur-lg p-12 rounded-4xl border border-white/20">
            Become part of a community that values excellence, embraces diversity, and celebrates 
            every student's unique journey. Together, we'll unlock potential and create lasting impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <button className="group relative bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white px-16 py-6 rounded-2xl font-bold text-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl flex items-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <span className="relative">Contact</span>
            </button>
            
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;