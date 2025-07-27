import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaClock, FaCalendarAlt, FaUser, FaHeadset, FaLaptop, FaComments, FaShieldAlt } from 'react-icons/fa';
import { MdLocationOn, MdChat, MdVideoCall, MdSecurity } from 'react-icons/md';
import { BiSupport } from 'react-icons/bi';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Counsellors = () => {
  const [selectedCounsellor, setSelectedCounsellor] = useState(null);

  // Sample counsellor data - replace with your actual data
  const counsellors = [
    {
      id: 1,
      name: "Dr. Priya Sharma",
      photo: "/api/placeholder/300/300",
      mobile: "+91 98765 43210",
      email: "priya.sharma@iitg.ac.in",
      specialization: "Academic Stress & Anxiety",
      experience: "8 years",
      schedule: {
        monday: "9:00 AM - 5:00 PM",
        tuesday: "9:00 AM - 5:00 PM",
        wednesday: "9:00 AM - 1:00 PM",
        thursday: "9:00 AM - 5:00 PM",
        friday: "9:00 AM - 4:00 PM",
        saturday: "10:00 AM - 2:00 PM",
        sunday: "Closed"
      },
      location: "Student Counselling Center, Room 101"
    },
    {
      id: 2,
      name: "Dr. Rajesh Kumar",
      photo: "/api/placeholder/300/300",
      mobile: "+91 87654 32109",
      email: "rajesh.kumar@iitg.ac.in",
      specialization: "Career Guidance & Life Skills",
      experience: "12 years",
      schedule: {
        monday: "10:00 AM - 6:00 PM",
        tuesday: "10:00 AM - 6:00 PM",
        wednesday: "10:00 AM - 6:00 PM",
        thursday: "10:00 AM - 2:00 PM",
        friday: "10:00 AM - 6:00 PM",
        saturday: "Closed",
        sunday: "Closed"
      },
      location: "Student Counselling Center, Room 102"
    },
    {
      id: 3,
      name: "Dr. Anita Mehta",
      photo: "/api/placeholder/300/300",
      mobile: "+91 76543 21098",
      email: "anita.mehta@iitg.ac.in",
      specialization: "Mental Health & Wellness",
      experience: "10 years",
      schedule: {
        monday: "9:00 AM - 4:00 PM",
        tuesday: "9:00 AM - 4:00 PM",
        wednesday: "9:00 AM - 4:00 PM",
        thursday: "9:00 AM - 4:00 PM",
        friday: "9:00 AM - 4:00 PM",
        saturday: "9:00 AM - 1:00 PM",
        sunday: "Closed"
      },
      location: "Student Counselling Center, Room 103"
    }
  ];

  const openModal = (counsellor) => {
    setSelectedCounsellor(counsellor);
  };

  const closeModal = () => {
    setSelectedCounsellor(null);
  };

  return (
    <div>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 font-poppins">
        {/* Header Section */}
        <div className="bg-white/80 backdrop-blur-md shadow-lg border-b border-gray-200/50 pt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                Counselling Services
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                Professional support for your academic, personal, and career development needs. 
                Our experienced counsellors are here to help you navigate through challenges and achieve your goals.
              </p>
            </div>
          </div>
        </div>

        {/* Services Overview - MOVED TO TOP */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Academic Counselling",
                  description: "Support for academic stress, study strategies, and performance improvement",
                  icon: "📚"
                },
                {
                  title: "Career Guidance",
                  description: "Professional guidance for career planning and skill development",
                  icon: "🎯"
                },
                {
                  title: "Mental Health Support",
                  description: "Confidential support for mental health and wellness concerns",
                  icon: "🧠"
                }
              ].map((service, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

                {/* Counsellors Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Meet Our Counsellors</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {counsellors.map((counsellor) => (
                <div 
                  key={counsellor.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="relative">
                    <img 
                      src={counsellor.photo} 
                      alt={counsellor.name}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-xl font-semibold">{counsellor.name}</h3>
                      <p className="text-sm opacity-90">{counsellor.specialization}</p>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-3 text-gray-600">
                        <FaPhone className="text-[#7BB9C4]" />
                        <span className="text-sm">{counsellor.mobile}</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-600">
                        <FaEnvelope className="text-[#7BB9C4]" />
                        <span className="text-sm">{counsellor.email}</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-600">
                        <FaUser className="text-[#7BB9C4]" />
                        <span className="text-sm">{counsellor.experience} experience</span>
                      </div>
                    </div>
                    
                    <button
                      onClick={() => openModal(counsellor)}
                      className="w-full bg-[#7BB9C4] hover:bg-[#6ba8b3] text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
                    >
                      <FaCalendarAlt />
                      View Schedule & Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal for Counsellor Details */}
        {selectedCounsellor && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-4">
                    <img 
                      src={selectedCounsellor.photo} 
                      alt={selectedCounsellor.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800">{selectedCounsellor.name}</h3>
                      <p className="text-[#7BB9C4] font-medium">{selectedCounsellor.specialization}</p>
                    </div>
                  </div>
                  <button
                    onClick={closeModal}
                    className="text-gray-500 hover:text-gray-700 text-2xl"
                  >
                    ×
                  </button>
                </div>

                <div className="space-y-6">
                  {/* Contact Information */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Contact Information</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <FaPhone className="text-[#7BB9C4]" />
                        <span>{selectedCounsellor.mobile}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <FaEnvelope className="text-[#7BB9C4]" />
                        <span>{selectedCounsellor.email}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <MdLocationOn className="text-[#7BB9C4]" />
                        <span>{selectedCounsellor.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Schedule */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                      <FaClock className="text-[#7BB9C4]" />
                      Weekly Schedule
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {Object.entries(selectedCounsellor.schedule).map(([day, time]) => (
                        <div key={day} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                          <span className="font-medium capitalize">{day}</span>
                          <span className={`text-sm ${time === 'Closed' ? 'text-red-500' : 'text-green-600'}`}>
                            {time}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-4">
                    <a
                      href={`tel:${selectedCounsellor.mobile}`}
                      className="flex-1 bg-[#7BB9C4] hover:bg-[#6ba8b3] text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
                    >
                      <FaPhone />
                      Call Now
                    </a>
                    <a
                      href={`mailto:${selectedCounsellor.email}`}
                      className="flex-1 bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
                    >
                      <FaEnvelope />
                      Send Email
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 24x7 Online Counselling Banner */}
        <div className="bg-gradient-to-r from-[#7BB9C4] to-[#5a9aa5] py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              {/* Left Content */}
              <div className="flex-1 text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  24x7 Online Counselling Services
                </h2>
                <p className="text-lg md:text-xl mb-4 opacity-90">
                  Need someone to talk to?
                </p>
                <p className="text-base md:text-lg mb-6 opacity-80">
                  You can connect with a licensed therapist 24x7 anytime, day or night.
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                    <FaComments className="text-white" />
                    <span className="text-white font-medium">Reach out</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                    <BiSupport className="text-white" />
                    <span className="text-white font-medium">Seek help</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                    <FaHeadset className="text-white" />
                    <span className="text-white font-medium">Feel better</span>
                  </div>
                </div>
                <button className="bg-white text-[#7BB9C4] font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-200 flex items-center gap-2">
                  <FaLaptop />
                  KNOW MORE
                </button>
              </div>

              {/* Right Illustration */}
              <div className="flex-1 max-w-md">
                <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8">
                  <div className="bg-white rounded-2xl p-6 shadow-xl">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-[#7BB9C4] rounded-full flex items-center justify-center">
                        <FaUser className="text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="bg-gray-100 rounded-lg p-3 mb-2">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-[#7BB9C4] rounded-full"></div>
                            <div className="w-2 h-2 bg-[#7BB9C4] rounded-full"></div>
                            <div className="w-2 h-2 bg-[#7BB9C4] rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-[#7BB9C4] text-white p-3 rounded-lg rounded-bl-none max-w-[80%]">
                        <p className="text-sm">How are you feeling today?</p>
                      </div>
                      <div className="bg-gray-100 p-3 rounded-lg rounded-br-none max-w-[80%] ml-auto">
                        <p className="text-sm">I'm feeling a bit overwhelmed with studies...</p>
                      </div>
                    </div>
                    <div className="mt-6 flex items-center gap-3">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <span className="text-sm text-gray-600">Counsellor is online</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* YourDOST Section */}
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              {/* Left Content */}
              <div className="flex-1">
                <div className="mb-8">
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                    YourDOST
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    YourDOST is an online counseling and emotional support platform that fosters mental wellness. It is completely free for IIT Guwahati students.<br/>Reach out. Seek help. Feel better.
                  </p>
                </div>

                {/* Features */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#7BB9C4]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MdChat className="text-[#7BB9C4] text-xl" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">Anonymous Chat</h3>
                      <p className="text-sm text-gray-600">Connect with counselors anonymously through secure chat</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#7BB9C4]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MdVideoCall className="text-[#7BB9C4] text-xl" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">Video Sessions</h3>
                      <p className="text-sm text-gray-600">Face-to-face counseling sessions with licensed professionals</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#7BB9C4]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FaClock className="text-[#7BB9C4] text-xl" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">24/7 Availability</h3>
                      <p className="text-sm text-gray-600">Round-the-clock support whenever you need it</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#7BB9C4]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MdSecurity className="text-[#7BB9C4] text-xl" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">Confidential</h3>
                      <p className="text-sm text-gray-600">Complete privacy and confidentiality guaranteed</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <a href="https://yourdost.com" target="_blank" rel="noopener noreferrer">
                    <button className="bg-[#7BB9C4] hover:bg-[#6ba8b3] text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 flex items-center gap-2">
                      <FaLaptop />
                      Access YourDOST
                    </button>
                  </a>
                </div>
              </div>

              {/* Right Illustration */}
              <div className="flex-1 max-w-md">
                <div className="relative">
                  <div className="bg-black rounded-2xl p-8 shadow-2xl">
                    <div className="flex items-center justify-center mb-6">
                      <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
                        <div className="w-16 h-20 bg-yellow-600 rounded-full relative">
                          <img src='https://tse4.mm.bing.net/th/id/OIP.2tmsoMJQLKzo_7GRb6puAwAAAA?pid=Api&P=0&h=180' alt="YourDOST Logo" className="w-full h-full object-cover rounded-full" />
                        </div>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="bg-yellow-400 text-black font-bold py-2 px-4 rounded-lg inline-block mb-4">
                        YourDOST
                      </div>
                      <div className="text-white text-lg font-medium">
                        Mental Health Companion
                      </div>
                    </div>
                    <div className="mt-6 space-y-3">
                      <div className="bg-gray-800 rounded-lg p-3">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                          <span className="text-white text-sm">Expert Counselors Available</span>
                        </div>
                      </div>
                      <div className="bg-gray-800 rounded-lg p-3">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                          <span className="text-white text-sm">Anonymous & Secure</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
      <Footer />
    </div>
  );
};

export default Counsellors;
