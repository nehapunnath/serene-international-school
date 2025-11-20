import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Academics', href: '/academics' },
    { name: 'Admissions', href: '/admissions' },
    { name: 'Facilities', href: '/facilities' },
    { name: 'Contact', href: '/contact' }
  ];

  const contactInfo = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      text: ' RJMV+9VC Sai Baba Temple Road, 4th Cross Road, Neeladri Nagar, sainik nagar, Electronic City, Bengaluru, Karnataka 560105'
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      text: '987654321'
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      text: 'info@sereneinternational.edu'
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-teal-900 to-cyan-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* School Info - Now takes full width on mobile, 2 columns on desktop */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
            
              <div>
                <h3 className="text-xl font-bold font-serif">Serene International School</h3>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Empowering students with excellence in education, character building, and global citizenship since 1995.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-sans border-l-4 border-teal-400 pl-3">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-teal-300 transition-all duration-200 hover:translate-x-2 flex items-center group no-underline"
                  >
                    <span className="w-2 h-2 bg-teal-500 rounded-full mr-3 group-hover:bg-cyan-400 transition-colors"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-sans border-l-4 border-emerald-400 pl-3">Contact Us</h4>
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-start space-x-3 group">
                  <div className="text-teal-400 group-hover:text-cyan-300 transition-colors duration-200 mt-0.5">
                    {contact.icon}
                  </div>
                  <p className="text-gray-300 group-hover:text-white transition-colors duration-200">
                    {contact.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      
    </footer>
  );
};

export default Footer;