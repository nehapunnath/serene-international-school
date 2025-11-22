import React from 'react';
import { 
  FaHistory, 
  FaUsers, 
  FaTrophy, 
  FaHeart,
  FaGlobeAmericas,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaAward,
  FaQuoteLeft,
  FaQuoteRight,
  FaMapMarkerAlt,
  FaArrowRight,
  FaCheckCircle,
  FaLeaf,
  FaLightbulb,
  FaHandshake,
  FaStar,
  FaRocket,
  FaGraduationCap,
  FaShieldAlt
} from 'react-icons/fa';

const About = () => {
  const milestones = [
    { year: '1999', title: 'Foundation', description: 'Serene International School was established with a vision to provide world-class education.', icon: <FaRocket className="text-3xl" /> },
    { year: '2005', title: 'First Graduation', description: 'Our first batch of students graduated with outstanding academic results.', icon: <FaGraduationCap className="text-3xl" /> },
    { year: '2010', title: 'International Recognition', description: 'Received accreditation from international educational bodies.', icon: <FaGlobeAmericas className="text-3xl" /> },
    { year: '2015', title: 'Campus Expansion', description: 'Expanded campus facilities with state-of-the-art infrastructure.', icon: <FaAward className="text-3xl" /> },
    { year: '2020', title: 'Digital Transformation', description: 'Implemented comprehensive digital learning platforms.', icon: <FaLightbulb className="text-3xl" /> },
    { year: '2024', title: 'Global Partnerships', description: 'Established partnerships with 20+ international schools.', icon: <FaHandshake className="text-3xl" /> }
  ];

  const values = [
    {
      icon: <FaLeaf className="text-5xl" />,
      title: 'Sustainability',
      description: 'We instill environmental consciousness and sustainable practices in our students.',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: <FaLightbulb className="text-5xl" />,
      title: 'Innovation',
      description: 'Embracing cutting-edge technology and teaching methodologies for future-ready education.',
      color: 'from-yellow-500 to-orange-600'
    },
    {
      icon: <FaHeart className="text-5xl" />,
      title: 'Compassion',
      description: 'Building a caring community where every student feels valued and supported.',
      color: 'from-pink-500 to-rose-600'
    },
    {
      icon: <FaShieldAlt className="text-5xl" />,
      title: 'Integrity',
      description: 'Upholding the highest ethical standards in all our actions and decisions.',
      color: 'from-blue-500 to-cyan-600'
    }
  ];

  const stats = [
    { number: '25+', label: 'Years of Excellence', icon: <FaHistory className="text-4xl" />, suffix: 'Years' },
    { number: '200+', label: 'Dedicated Staff', icon: <FaChalkboardTeacher className="text-4xl" />, suffix: 'Experts' },
    { number: '5000+', label: 'Successful Alumni', icon: <FaUserGraduate className="text-4xl" />, suffix: 'Graduates' },
    { number: '50+', label: 'National Awards', icon: <FaTrophy className="text-4xl" />, suffix: 'Awards' }
  ];

  const testimonials = [
    {
      quote: "Serene International provided the perfect environment for my daughter to discover her passion for science and leadership. The teachers' dedication is truly remarkable.",
      author: "Mrs. Priya Sharma",
      role: "Parent of Grade 10 Student",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      rating: 5
    },
    {
      quote: "The innovative teaching methods and supportive community helped me secure admission to my dream university. I'm forever grateful for the foundation built here.",
      author: "Rahul Verma",
      role: "Alumni - Class of 2022",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      rating: 5
    },
    {
      quote: "Working at Serene has been incredibly rewarding. The collaborative environment fosters both student and teacher growth beyond expectations.",
      author: "Ms. Anjali Kapoor",
      role: "Senior Faculty - 8 Years",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      rating: 5
    }
  ];

  const features = [
    {
      icon: <FaGlobeAmericas className="text-4xl" />,
      title: "Global Curriculum",
      description: "Internationally recognized curriculum that prepares students for worldwide opportunities"
    },
    {
      icon: <FaUsers className="text-4xl" />,
      title: "Inclusive Community",
      description: "Diverse student body with inclusive policies that celebrate every individual"
    },
    {
      icon: <FaLightbulb className="text-4xl" />,
      title: "Innovative Labs",
      description: "State-of-the-art laboratories for hands-on learning and research"
    },
    {
      icon: <FaLeaf className="text-4xl" />,
      title: "Green Campus",
      description: "Eco-friendly campus designed for sustainable learning environment"
    }
  ];

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Attractive Header Section */}
      <section className="relative py-32 bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 text-white overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-400 via-purple-400 to-blue-400"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="relative container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center bg-white/20 backdrop-blur-lg rounded-full px-6 py-3 border border-white/30 shadow-lg">
                <div className="w-3 h-3 bg-gradient-to-r from-teal-400 to-purple-400 rounded-full mr-3 animate-pulse"></div>
                <span className="text-white text-lg font-semibold">Since 1999 - Excellence in Education</span>
              </div>
              
              <h1 className="text-6xl md:text-8xl font-black font-serif leading-tight">
                Shaping{' '}
                <span className="bg-gradient-to-r from-teal-300 via-purple-300 to-blue-400 bg-clip-text text-transparent">
                  Future
                </span>
                {' '}Leaders
              </h1>
              
              <p className="text-2xl md:text-3xl text-gray-200 leading-relaxed font-sans">
                Where <span className="text-teal-300 font-bold">tradition</span> meets{' '}
                <span className="text-purple-300 font-bold">innovation</span> in creating{' '}
                <span className="text-blue-300 font-bold">global citizens</span>
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
                  className="group bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-teal-300/50 transition-all duration-500 hover-lift"
                >
                  <div className="text-center">
                    <div className="flex justify-center text-teal-300 mb-4 group-hover:scale-110 transition-transform duration-500">
                      {stat.icon}
                    </div>
                    <div className="text-4xl md:text-5xl font-black text-white mb-2 font-serif group-hover:scale-105 transition-transform duration-500">
                      {stat.number}
                    </div>
                    <div className="text-teal-200 font-bold text-lg mb-1">{stat.suffix}</div>
                    <div className="text-gray-300 text-sm font-sans">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <div className="w-1 h-8 bg-white/80 rounded-full mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-teal-100 to-purple-100 rounded-full -translate-x-36 -translate-y-36 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full translate-x-36 translate-y-36 blur-3xl"></div>
        
        <div className="relative container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Mission */}
            <div className="group relative bg-gradient-to-br from-teal-50 to-cyan-50 rounded-4xl p-12 shadow-2xl hover-lift transition-all duration-500 border border-teal-100/50 overflow-hidden">
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-teal-200/30 rounded-full blur-2xl"></div>
              <div className="relative">
                <div className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white p-4 rounded-3xl inline-flex items-center mb-8 shadow-lg">
                  {/* <FaTarget className="text-2xl mr-3" /> */}
                  <h3 className="text-2xl font-bold font-serif">Our Mission</h3>
                </div>
                <p className="text-xl text-gray-700 leading-relaxed mb-6 font-sans">
                  To provide a transformative educational experience that empowers students to become critical thinkers, 
                  compassionate leaders, and global citizens who make positive contributions to society.
                </p>
                <ul className="space-y-4">
                  {['Innovative Learning Environment', 'Holistic Development', 'Global Perspective', 'Community Engagement'].map((item, index) => (
                    <li key={index} className="flex items-center text-lg text-gray-600">
                      <FaCheckCircle className="text-teal-500 mr-3 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Vision */}
            <div className="group relative bg-gradient-to-br from-purple-50 to-blue-50 rounded-4xl p-12 shadow-2xl hover-lift transition-all duration-500 border border-purple-100/50 overflow-hidden">
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-200/30 rounded-full blur-2xl"></div>
              <div className="relative">
                <div className="bg-gradient-to-r from-purple-500 to-blue-600 text-white p-4 rounded-3xl inline-flex items-center mb-8 shadow-lg">
                  {/* <FaGlobeAmericas className="text-2xl mr-3" /> */}
                  <h3 className="text-2xl font-bold font-serif">Our Vision</h3>
                </div>
                <p className="text-xl text-gray-700 leading-relaxed mb-6 font-sans">
                  To be a globally recognized institution that sets the standard for excellence in education, 
                  fostering innovation, diversity, and sustainable development for future generations.
                </p>
                <ul className="space-y-4">
                  {['Global Recognition', 'Educational Excellence', 'Sustainable Practices', 'Future Innovation'].map((item, index) => (
                    <li key={index} className="flex items-center text-lg text-gray-600">
                      <FaCheckCircle className="text-purple-500 mr-3 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500 via-purple-500 to-blue-500"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-teal-100/50 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-100/50 rounded-full blur-3xl"></div>
        
        <div className="relative container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-gradient-to-r from-teal-500 to-purple-600 text-white px-8 py-3 rounded-full text-lg font-bold mb-6 shadow-2xl">
              <FaHeart className="mr-2" />
              Our Values
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-8 font-serif leading-tight">
              The Pillars of{' '}
              <span className="bg-gradient-to-r from-teal-500 to-purple-600 bg-clip-text text-transparent">
                Excellence
              </span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto font-sans">
              Foundational principles that guide every aspect of our educational journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div 
                key={index}
                className="group text-center bg-white rounded-4xl p-8 shadow-2xl hover-lift transition-all duration-500 border border-gray-200/50 hover:border-teal-200/50 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className={`bg-gradient-to-r ${value.color} text-white p-6 rounded-3xl inline-flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500 relative z-10`}>
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-serif group-hover:text-gray-800 transition-colors relative z-10">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed font-sans relative z-10">
                  {value.description}
                </p>
                
                {/* Animated border */}
                <div className="absolute inset-0 rounded-4xl bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-10">
                  <div className="absolute inset-0 rounded-4xl bg-gradient-to-r from-teal-500 via-purple-500 to-blue-500 opacity-0 group-hover:opacity-5 animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-full -translate-y-48 translate-x-48 blur-3xl"></div>
        
        <div className="relative container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-8 py-3 rounded-full text-lg font-bold mb-6 shadow-2xl">
              <FaHistory className="mr-2" />
              Our Journey
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-8 font-serif leading-tight">
              Milestones &{' '}
              <span className="bg-gradient-to-r from-teal-500 to-cyan-600 bg-clip-text text-transparent">
                Achievements
              </span>
            </h2>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {milestones.map((milestone, index) => (
                <div 
                  key={index}
                  className="group relative bg-gradient-to-br from-white to-gray-50 rounded-4xl p-8 shadow-2xl hover-lift transition-all duration-500 border border-gray-200/50 hover:border-teal-200/50 overflow-hidden"
                >
                  {/* Background Icon */}
                  <div className="absolute -top-4 -right-4 text-teal-100 text-8xl opacity-50 group-hover:opacity-70 group-hover:scale-110 transition-all duration-500">
                    {milestone.icon}
                  </div>
                  
                  <div className="relative z-10">
                    <div className="text-4xl font-black text-teal-600 mb-4 font-serif group-hover:scale-105 transition-transform duration-500">
                      {milestone.year}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 font-serif group-hover:text-teal-600 transition-colors">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed font-sans">
                      {milestone.description}
                    </p>
                  </div>
                  
                  {/* Connecting Line (for visual flow) */}
                  {index < milestones.length - 1 && (
                    <div className="hidden lg:block absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-1 h-8 bg-gradient-to-b from-teal-200 to-cyan-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-400 via-purple-400 to-blue-400"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>
        
        <div className="relative container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-gradient-to-r from-teal-500 to-purple-600 text-white px-8 py-3 rounded-full text-lg font-bold mb-6 shadow-2xl">
              <FaQuoteLeft className="mr-2" />
              Community Voices
            </div>
            <h2 className="text-5xl md:text-7xl font-black mb-8 font-serif leading-tight">
              What They Say{' '}
              <span className="bg-gradient-to-r from-teal-300 to-purple-400 bg-clip-text text-transparent">
                About Us
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="group bg-white/10 backdrop-blur-lg rounded-4xl p-8 shadow-2xl hover-lift transition-all duration-500 border border-white/10 hover:border-teal-200/30 relative overflow-hidden"
              >
                {/* Rating Stars */}
                <div className="flex justify-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 mx-1 text-lg" />
                  ))}
                </div>
                
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author}
                    className="w-16 h-16 rounded-2xl object-cover mr-4 border-2 border-white/20 group-hover:border-teal-300/50 transition-colors duration-500"
                  />
                  <div>
                    <h4 className="text-xl font-bold text-white font-serif">{testimonial.author}</h4>
                    <p className="text-teal-200 text-sm font-sans">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="relative">
                  <FaQuoteLeft className="text-teal-300 text-xl mb-4 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                  <p className="text-gray-200 leading-relaxed text-lg font-sans italic mb-6">
                    {testimonial.quote}
                  </p>
                  <FaQuoteRight className="text-teal-300 text-xl mt-4 opacity-50 group-hover:opacity-100 transition-opacity duration-500 ml-auto" />
                </div>
                
                {/* Hover effect background */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-4xl"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-full -translate-x-36 -translate-y-36 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full translate-x-36 translate-y-36 blur-3xl"></div>
        
        <div className="relative container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-8 font-serif leading-tight">
              Begin Your{' '}
              <span className="bg-gradient-to-r from-teal-500 to-purple-600 bg-clip-text text-transparent">
                Journey
              </span>
              {' '}With Us
            </h2>
            <p className="text-2xl text-gray-600 mb-12 max-w-3xl mx-auto font-sans">
              Join our community of learners, innovators, and future leaders
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="group relative bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white px-12 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <span className="relative">Schedule a Campus Tour</span>
                <FaArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform" />
              </button>
              <button className="group relative border-2 border-teal-500 text-teal-600 hover:bg-teal-500 hover:text-white px-12 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center">
                <span className="relative">Download Prospectus</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;