import React from 'react';
import { 
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaArrowRight,
  FaStar,
  FaUsers,
  FaGraduationCap,
  FaHeart,
  FaCalendarAlt,
  FaTicketAlt
} from 'react-icons/fa';

const Contact = () => {
  const currentYear = new Date().getFullYear();

  const features = [
    {
      icon: <FaMapMarkerAlt className="text-4xl" />,
      title: "Easy to Find",
      description: "Conveniently located in Electronic City with excellent connectivity"
    },
    {
      icon: <FaPhone className="text-4xl" />,
      title: "Always Available",
      description: "Multiple contact numbers for different departments"
    },
    {
      icon: <FaEnvelope className="text-4xl" />,
      title: "Quick Responses",
      description: "Dedicated email IDs for prompt assistance"
    },
    {
      icon: <FaClock className="text-4xl" />,
      title: "Flexible Hours",
      description: "Extended office hours for your convenience"
    }
  ];

  const stats = [
    { number: '28+', label: 'Years of Excellence', icon: <FaStar className="text-4xl" />, suffix: 'Experience' },
    { number: '2.5K', label: 'Students Enrolled', icon: <FaUsers className="text-4xl" />, suffix: 'Learners' },
    { number: '150+', label: 'Qualified Staff', icon: <FaGraduationCap className="text-4xl" />, suffix: 'Educators' },
    { number: '98%', label: 'Satisfaction Rate', icon: <FaHeart className="text-4xl" />, suffix: 'Rating' }
  ];

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="text-3xl" />,
      title: "Our Campus",
      details: ["RJMV+9VC Sai Baba Temple Road", "4th Cross Road, Neeladri Nagar", "Sainik Nagar, Electronic City", "Bengaluru, Karnataka 560105"],
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: <FaPhone className="text-3xl" />,
      title: "Phone Numbers",
      details: [" +91 98765 43210"],
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: <FaEnvelope className="text-3xl" />,
      title: "Email Addresses",
      details: ["info@sereneinternational.edu"],
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: <FaClock className="text-3xl" />,
      title: "Office Hours",
      details: ["Monday - Friday: 8:00 AM - 5:00 PM", "Saturday: 9:00 AM - 1:00 PM", "Sunday: Closed"],
      color: "from-orange-500 to-red-600"
    }
  ];

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Academics', href: '/academics' },
    { name: 'Admissions', href: '/admissions' },
    { name: 'Facilities', href: '/facilities' },
    { name: 'Events', href: '/events' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      {/* Header Section - Same as Events Page */}
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
                <span className="text-white text-lg font-semibold">Since 1995</span>
              </div>
              
              <h1 className="text-6xl md:text-8xl font-black font-serif leading-tight">
                Contact{' '}
                <span className="bg-gradient-to-r from-blue-300 via-cyan-300 to-teal-400 bg-clip-text text-transparent">
                  Us
                </span>
              </h1>
              
              <p className="text-2xl md:text-3xl text-gray-200 leading-relaxed font-sans">
                Ready to <span className="text-blue-300 font-bold">connect</span> with us?{' '}
                <span className="text-cyan-300 font-bold">Reach out</span> and discover the{' '}
                <span className="text-teal-300 font-bold">Serene difference</span>
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

        {/* Scroll Indicator */}
        {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <div className="w-1 h-8 bg-white/80 rounded-full mx-auto"></div>
          </div>
        </div> */}
      </section>

      {/* Contact Details Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-100/50 rounded-full -translate-x-48 -translate-y-48 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-100/50 rounded-full translate-x-48 translate-y-48 blur-3xl"></div>
        
        <div className="relative container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-3 rounded-full text-lg font-bold mb-6 shadow-2xl">
              <FaMapMarkerAlt className="mr-2" />
              Contact Information
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-8 font-serif leading-tight">
              We're Here to{' '}
              <span className="bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent">
                Help You
              </span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto font-sans">
              Reach out to us through any of the following channels. Our team is always ready to assist you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((contact, index) => (
                <div 
                  key={index}
                  className="group bg-gradient-to-br from-white to-gray-50 rounded-4xl p-8 shadow-2xl hover-lift transition-all duration-500 border border-gray-200/50 hover:border-purple-200/50"
                >
                  <div className="flex items-start space-x-6">
                    <div className={`bg-gradient-to-r ${contact.color} text-white p-4 rounded-3xl shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                      {contact.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 font-serif">{contact.title}</h3>
                      <div className="space-y-2">
                        {contact.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-600 font-sans leading-relaxed">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Campus Information */}
            <div className="space-y-8">
              {/* Campus Location */}
              <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-4xl p-8 text-white shadow-2xl">
                <h3 className="text-2xl font-bold mb-4 font-serif">Visit Our Campus</h3>
                <p className="text-purple-100 mb-6 leading-relaxed text-lg">
                  Experience the serene learning environment that makes our school special. Schedule a campus tour to see our facilities firsthand and meet our dedicated faculty.
                </p>
                <div className="bg-white/20 backdrop-blur-lg rounded-3xl p-6">
                  <div className="text-center">
                    <FaMapMarkerAlt className="text-4xl mx-auto mb-4 text-white" />
                    <p className="text-lg text-purple-100 font-semibold">
                      Located in the heart of Electronic City
                    </p>
                    <p className="text-sm text-purple-200 mt-2">
                      Easily accessible from all parts of Bangalore with excellent transport connectivity
                    </p>
                  </div>
                </div>
                {/* <button className="mt-6 w-full bg-white text-purple-600 px-6 py-4 rounded-2xl font-bold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center">
                  <span>Schedule Campus Tour</span>
                  <FaArrowRight className="w-5 h-5 ml-3" />
                </button> */}
              </div>

              {/* Additional Info */}
              <div className="bg-white rounded-4xl p-8 shadow-2xl border border-gray-200/50">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 font-serif">Quick Support</h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                  For urgent inquiries during office hours, please call our main reception. For after-hours emergencies, use the dedicated emergency contact number.
                </p>
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl p-6 border border-blue-200">
                  <div className="text-center">
                    <FaPhone className="text-3xl text-blue-500 mx-auto mb-3" />
                    <p className="text-blue-800 font-bold text-lg">Emergency Contact</p>
                    <p className="text-blue-600 text-xl font-semibold">+91 98765 43212</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;