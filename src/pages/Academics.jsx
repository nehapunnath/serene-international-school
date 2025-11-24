import React, { useState } from 'react';
import { 
  FaGraduationCap, 
  FaBook, 
  FaFlask, 
  FaPalette,
  FaMusic,
  FaRunning,
  FaLaptop,
  FaGlobe,
  FaUsers,
  FaChartLine,
  FaArrowRight,
  FaCheckCircle,
  FaCalendarAlt,
  FaAward,
  FaMicroscope,
  FaCode,
  FaTheaterMasks,
  FaFutbol,
  FaChess,
  FaRobot,
  FaSeedling,
  FaStar,
  FaRocket,
  FaShieldAlt
} from 'react-icons/fa';

const Academics = () => {
  const [activeLevel, setActiveLevel] = useState('primary');

  const academicLevels = [
    {
      id: 'primary',
      name: 'Primary School',
      age: 'Ages 6-11',
      description: 'Building strong foundations through interactive and engaging learning experiences',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      features: ['Literacy & Numeracy Focus', 'Creative Arts', 'Physical Education', 'Social Skills Development'],
      icon: <FaBook className="text-4xl" />
    },
    {
      id: 'middle',
      name: 'Middle School',
      age: 'Ages 11-14',
      description: 'Developing critical thinking and exploratory learning across diverse subjects',
      image: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      features: ['STEM Integration', 'Language Arts', 'Social Studies', 'Project-Based Learning'],
      icon: <FaFlask className="text-4xl" />
    },
    {
      id: 'high',
      name: 'High School',
      age: 'Ages 14-18',
      description: 'Preparing for higher education and career paths with specialized programs',
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      features: ['Advanced Placement', 'Career Counseling', 'Research Projects', 'College Preparation'],
      icon: <FaGraduationCap className="text-4xl" />
    }
  ];

  const stats = [
    { number: '98%', label: 'Graduation Rate', icon: <FaGraduationCap className="text-4xl" />, suffix: 'Success' },
    { number: '25+', label: 'AP Courses', icon: <FaBook className="text-4xl" />, suffix: 'Courses' },
    { number: '50+', label: 'Extracurriculars', icon: <FaUsers className="text-4xl" />, suffix: 'Activities' },
    { number: '1:12', label: 'Student-Teacher Ratio', icon: <FaChartLine className="text-4xl" />, suffix: 'Ratio' }
  ];

  const features = [
    {
      icon: <FaMicroscope className="text-4xl" />,
      title: "Advanced Labs",
      description: "State-of-the-art science and technology laboratories"
    },
    {
      icon: <FaGlobe className="text-4xl" />,
      title: "Global Curriculum",
      description: "Internationally recognized academic programs"
    },
    {
      icon: <FaUsers className="text-4xl" />,
      title: "Expert Faculty",
      description: "Highly qualified and experienced teaching staff"
    },
    {
      icon: <FaRocket className="text-4xl" />,
      title: "Innovation Focus",
      description: "Cutting-edge technology integration"
    }
  ];

  const curriculum = [
    {
      category: 'STEM',
      icon: <FaMicroscope className="text-4xl" />,
      color: 'from-blue-500 to-cyan-600',
      subjects: [
        { name: 'Advanced Mathematics', description: 'Algebra, Calculus, Statistics' },
        { name: 'Laboratory Sciences', description: 'Physics, Chemistry, Biology' },
        { name: 'Computer Science', description: 'Programming, AI, Data Science' },
        { name: 'Engineering', description: 'Robotics, Design Thinking' }
      ]
    },
    {
      category: 'Humanities',
      icon: <FaGlobe className="text-4xl" />,
      color: 'from-green-500 to-emerald-600',
      subjects: [
        { name: 'World Languages', description: 'Spanish, French, Mandarin' },
        { name: 'Social Studies', description: 'History, Geography, Economics' },
        { name: 'Literature', description: 'Classic & Contemporary Works' },
        { name: 'Philosophy', description: 'Critical Thinking & Ethics' }
      ]
    },
    {
      category: 'Arts',
      icon: <FaPalette className="text-4xl" />,
      color: 'from-purple-500 to-pink-600',
      subjects: [
        { name: 'Visual Arts', description: 'Drawing, Painting, Sculpture' },
        { name: 'Performing Arts', description: 'Music, Theater, Dance' },
        { name: 'Digital Media', description: 'Graphic Design, Film Production' },
        { name: 'Art History', description: 'Global Artistic Traditions' }
      ]
    },
    {
      category: 'Physical Education',
      icon: <FaRunning className="text-4xl" />,
      color: 'from-orange-500 to-red-600',
      subjects: [
        { name: 'Team Sports', description: 'Basketball, Soccer, Volleyball' },
        { name: 'Individual Sports', description: 'Swimming, Tennis, Athletics' },
        { name: 'Health Education', description: 'Nutrition, Wellness, First Aid' },
        { name: 'Yoga & Mindfulness', description: 'Mental & Physical Wellbeing' }
      ]
    }
  ];

  const specialPrograms = [
    {
      icon: <FaRobot className="text-4xl" />,
      title: 'Robotics & AI Lab',
      description: 'Hands-on experience with robotics, artificial intelligence, and automation technologies',
      image: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      icon: <FaSeedling className="text-4xl" />,
      title: 'Environmental Science',
      description: 'Sustainable practices, conservation projects, and ecological research initiatives',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      icon: <FaTheaterMasks className="text-4xl" />,
      title: 'Performing Arts',
      description: 'Theater productions, musical performances, and creative expression workshops',
      image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      icon: <FaCode className="text-4xl" />,
      title: 'Tech Innovation',
      description: 'Coding bootcamps, app development, and digital creation spaces',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    }
  ];

  const extracurriculars = [
    {
      category: 'Sports',
      icon: <FaFutbol className="text-3xl" />,
      activities: ['Basketball Team', 'Soccer Club', 'Swimming Squad', 'Athletics', 'Tennis Academy']
    },
    {
      category: 'Arts & Culture',
      icon: <FaMusic className="text-3xl" />,
      activities: ['School Band', 'Drama Club', 'Art Society', 'Dance Troupe', 'Debate Team']
    },
    {
      category: 'Academic Clubs',
      icon: <FaChess className="text-3xl" />,
      activities: ['Math Olympiad', 'Science Club', 'Robotics Team', 'Literary Magazine', 'Model UN']
    },
    {
      category: 'Community Service',
      icon: <FaUsers className="text-3xl" />,
      activities: ['Environmental Club', 'Social Outreach', 'Peer Tutoring', 'Charity Events', 'Leadership Programs']
    }
  ];

  const achievements = [
    { year: '2024', achievement: 'National Science Olympiad Gold Medal', students: '3 Students' },
    { year: '2023', achievement: 'International Math Competition Finalists', students: 'Team of 5' },
    { year: '2023', achievement: 'State Basketball Champions', students: 'Senior Team' },
    { year: '2022', achievement: 'National Art Exhibition Winners', students: '2 Students' },
    { year: '2022', achievement: 'Robotics Competition Excellence Award', students: 'Innovation Team' }
  ];

  const currentLevel = academicLevels.find(level => level.id === activeLevel);

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
                <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mr-3 animate-pulse"></div>
                <span className="text-white text-lg font-semibold">Academic Excellence Since 1999</span>
              </div>
              
              <h1 className="text-6xl md:text-8xl font-black font-serif leading-tight">
                World-Class{' '}
                <span className="bg-gradient-to-r from-blue-300 via-cyan-300 to-teal-400 bg-clip-text text-transparent">
                  Education
                </span>
              </h1>
              
              <p className="text-2xl md:text-3xl text-gray-200 leading-relaxed font-sans">
                Where <span className="text-blue-300 font-bold">curiosity</span> meets{' '}
                <span className="text-cyan-300 font-bold">innovation</span> in pursuit of{' '}
                <span className="text-teal-300 font-bold">academic excellence</span>
              </p>

              <div className="grid grid-cols-2 gap-6 pt-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-3 text-blue-300">
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
                    <div className="flex justify-center text-blue-300 mb-4 group-hover:scale-110 transition-transform duration-500">
                      {stat.icon}
                    </div>
                    <div className="text-4xl md:text-5xl font-black text-white mb-2 font-serif group-hover:scale-105 transition-transform duration-500">
                      {stat.number}
                    </div>
                    <div className="text-cyan-200 font-bold text-lg mb-1">{stat.suffix}</div>
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

      {/* Academic Levels Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full -translate-x-36 -translate-y-36 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-full translate-x-36 translate-y-36 blur-3xl"></div>
        
        <div className="relative container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-8 py-3 rounded-full text-lg font-bold mb-6 shadow-2xl">
              <FaGraduationCap className="mr-2" />
              Academic Pathways
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-8 font-serif leading-tight">
              Learning for{' '}
              <span className="bg-gradient-to-r from-blue-500 to-cyan-600 bg-clip-text text-transparent">
                Every Stage
              </span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto font-sans">
              Tailored educational experiences designed to meet the unique needs of each developmental stage
            </p>
          </div>

          {/* Level Selector */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {academicLevels.map((level) => (
              <button
                key={level.id}
                onClick={() => setActiveLevel(level.id)}
                className={`px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
                  activeLevel === level.id
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white shadow-2xl'
                    : 'bg-white text-gray-600 hover:bg-gray-100 shadow-lg border border-gray-200'
                }`}
              >
                {level.name}
              </button>
            ))}
          </div>

          {/* Level Details */}
          <div className="bg-white rounded-4xl shadow-2xl border border-gray-200/50 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image Section */}
              <div className="relative h-96 lg:h-full">
                <img 
                  src={currentLevel.image} 
                  alt={currentLevel.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent lg:bg-gradient-to-r lg:from-black/40 lg:to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="text-4xl font-black mb-2 font-serif">{currentLevel.age}</div>
                  <div className="text-2xl font-bold">{currentLevel.name}</div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-12">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white p-4 rounded-3xl shadow-lg">
                    {currentLevel.icon}
                  </div>
                  <div className="ml-6">
                    <h3 className="text-3xl font-bold text-gray-900 font-serif">{currentLevel.name}</h3>
                    <p className="text-blue-600 font-semibold">{currentLevel.age}</p>
                  </div>
                </div>

                <p className="text-xl text-gray-600 leading-relaxed mb-8 font-sans">
                  {currentLevel.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {currentLevel.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-gray-700">
                      <FaCheckCircle className="text-blue-500 mr-3 flex-shrink-0" />
                      <span className="font-sans">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="mt-8 group text-blue-600 hover:text-blue-700 font-bold text-lg flex items-center transform hover:translate-x-3 transition-all duration-300">
                  <span>Learn More About {currentLevel.name}</span>
                  <FaArrowRight className="w-5 h-5 ml-3 group-hover:scale-110 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Overview */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-cyan-100/50 rounded-full blur-3xl"></div>
        
        <div className="relative container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-8 py-3 rounded-full text-lg font-bold mb-6 shadow-2xl">
              <FaBook className="mr-2" />
              Comprehensive Curriculum
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-8 font-serif leading-tight">
              Diverse{' '}
              <span className="bg-gradient-to-r from-blue-500 to-cyan-600 bg-clip-text text-transparent">
                Learning Areas
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {curriculum.map((department, index) => (
              <div 
                key={index}
                className="group bg-white rounded-4xl shadow-2xl hover-lift transition-all duration-500 overflow-hidden border border-gray-200/50 hover:border-blue-200/50"
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
                    {department.subjects.map((subject, subIndex) => (
                      <div key={subIndex} className="border-b border-gray-100 pb-4 last:border-b-0 last:pb-0">
                        <h4 className="text-xl font-bold text-gray-900 mb-2 font-serif">{subject.name}</h4>
                        <p className="text-gray-600 font-sans">{subject.description}</p>
                      </div>
                    ))}
                  </div>
                  
                  <button className="mt-6 group text-blue-600 hover:text-blue-700 font-semibold flex items-center transform hover:translate-x-2 transition-all duration-300">
                    <span>View {department.category} Details</span>
                    <FaArrowRight className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Programs */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-full -translate-y-48 translate-x-48 blur-3xl"></div>
        
        <div className="relative container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-8 py-3 rounded-full text-lg font-bold mb-6 shadow-2xl">
              <FaAward className="mr-2" />
              Special Programs
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-8 font-serif leading-tight">
              Beyond the{' '}
              <span className="bg-gradient-to-r from-blue-500 to-cyan-600 bg-clip-text text-transparent">
                Classroom
              </span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto font-sans">
              Innovative programs that extend learning and foster unique talents
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {specialPrograms.map((program, index) => (
              <div 
                key={index}
                className="group bg-white rounded-4xl shadow-2xl hover-lift transition-all duration-500 overflow-hidden border border-gray-200/50 hover:border-blue-200/50"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={program.image} 
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                <div className="p-6">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white p-4 rounded-3xl inline-flex items-center justify-center mb-4 -mt-12 relative z-10 shadow-lg">
                    {program.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 font-serif group-hover:text-blue-600 transition-colors">
                    {program.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed text-sm font-sans">
                    {program.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Extracurricular Activities */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-cyan-400"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl"></div>
        
        <div className="relative container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-8 py-3 rounded-full text-lg font-bold mb-6 shadow-2xl">
              <FaUsers className="mr-2" />
              Student Life
            </div>
            <h2 className="text-5xl md:text-7xl font-black mb-8 font-serif leading-tight">
              Extracurricular{' '}
              <span className="bg-gradient-to-r from-blue-300 to-cyan-400 bg-clip-text text-transparent">
                Activities
              </span>
            </h2>
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto font-sans">
              Developing well-rounded individuals through diverse interests and passions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {extracurriculars.map((category, index) => (
              <div 
                key={index}
                className="group bg-white/10 backdrop-blur-lg rounded-4xl p-8 shadow-2xl hover-lift transition-all duration-500 border border-white/10 hover:border-blue-200/30"
              >
                <div className="text-center mb-6">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white p-4 rounded-3xl inline-flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-500">
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white font-serif">{category.category}</h3>
                </div>
                
                <ul className="space-y-3">
                  {category.activities.map((activity, actIndex) => (
                    <li key={actIndex} className="flex items-center text-gray-200 text-sm">
                      <FaCheckCircle className="text-blue-300 mr-3 flex-shrink-0" />
                      {activity}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Achievements */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full -translate-x-36 -translate-y-36 blur-3xl"></div>
        
        <div className="relative container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-8 py-3 rounded-full text-lg font-bold mb-6 shadow-2xl">
              <FaChartLine className="mr-2" />
              Student Achievements
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-8 font-serif leading-tight">
              Celebrating{' '}
              <span className="bg-gradient-to-r from-blue-500 to-cyan-600 bg-clip-text text-transparent">
                Excellence
              </span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 gap-6">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className="group bg-gradient-to-br from-white to-gray-50 rounded-3xl p-6 shadow-xl hover-lift transition-all duration-500 border border-gray-200/50 hover:border-blue-200/50"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-6">
                      <div className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-4 py-2 rounded-2xl font-bold text-lg shadow-lg">
                        {achievement.year}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 font-serif group-hover:text-blue-600 transition-colors">
                          {achievement.achievement}
                        </h3>
                        <p className="text-blue-600 font-semibold text-sm mt-1">{achievement.students}</p>
                      </div>
                    </div>
                    <FaAward className="text-yellow-500 text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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

export default Academics;