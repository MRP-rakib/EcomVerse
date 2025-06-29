import React, { useState } from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import sideimage from '../assets/images/SideImage.png'
const teamMembers = [
  {
    name: 'Tom Cruise',
    title: 'Founder & Chairman',
    img: 'https://randomuser.me/api/portraits/men/32.jpg',
    socials: [
      { icon: <FaTwitter />, url: '#' },
      { icon: <FaInstagram />, url: '#' },
      { icon: <FaLinkedin />, url: '#' },
    ],
  },
  {
    name: 'Emma Watson',
    title: 'Managing Director',
    img: 'https://randomuser.me/api/portraits/women/44.jpg',
    socials: [
      { icon: <FaTwitter />, url: '#' },
      { icon: <FaInstagram />, url: '#' },
      { icon: <FaLinkedin />, url: '#' },
    ],
  },
  {
    name: 'Will Smith',
    title: 'Product Designer',
    img: 'https://randomuser.me/api/portraits/men/45.jpg',
    socials: [
      { icon: <FaTwitter />, url: '#' },
      { icon: <FaInstagram />, url: '#' },
      { icon: <FaLinkedin />, url: '#' },
    ],
  },
  {
    name: 'Jane Doe',
    title: 'Marketing Lead',
    img: 'https://randomuser.me/api/portraits/women/65.jpg',
    socials: [
      { icon: <FaTwitter />, url: '#' },
      { icon: <FaInstagram />, url: '#' },
      { icon: <FaLinkedin />, url: '#' },
    ],
  },
  {
    name: 'John Lee',
    title: 'UI/UX Designer',
    img: 'https://randomuser.me/api/portraits/men/66.jpg',
    socials: [
      { icon: <FaTwitter />, url: '#' },
      { icon: <FaInstagram />, url: '#' },
      { icon: <FaLinkedin />, url: '#' },
    ],
  },
];

function About() {
  const [current, setCurrent] = useState(0);
  const visibleCount = 3;
  const maxIndex = teamMembers.length - visibleCount;
  const handleDotClick = (idx) => setCurrent(idx);
  const handlePrev = () => setCurrent((prev) => Math.max(prev - 1, 0));
  const handleNext = () => setCurrent((prev) => Math.min(prev + 1, maxIndex));

  return (
    <div className="container bg-white pt-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-[15px] text-gray-400 mb-8">
        <span>Home</span>
        <FaChevronRight size={12} />
        <span className="text-gray-900 font-medium">About</span>
      </div>
      {/* Main Section */}
      <div className="flex flex-wrap items-center gap-12 md:gap-16">
        {/* Left: Text */}
        <div className="flex-1 min-w-[320px]">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-wide">Our Story</h2>
          <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-4">
            Launced in 2015, Exclusive is South Asia's premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region.
          </p>
          <p className="text-base md:text-lg text-gray-800 leading-relaxed">
            Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assortment in categories ranging from consumer.
          </p>
        </div>
        {/* Right: Image */}
        <div className="flex-1 min-w-[320px] flex justify-center">
          <div className="w-full max-w-[500px] aspect-[4/3] bg-gray-200 rounded-xl flex items-center justify-center">
            {/* Empty image placeholder */}
           <img src={sideimage} alt="sideImage" />
          </div>
        </div>
      </div>
      {/* Stats Section */}
      <div className="flex flex-wrap lg:justify-between justify-center gap-6 md:gap-8 mt-16 mb-4">
        {/* Card 1 */}
        <div className="flex flex-col items-center border border-gray-300 rounded-lg bg-white px-8 py-7 min-w-[200px] max-w-[240px] shadow-sm transition-all">
          <div className="w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center mb-3">
            <span className="text-3xl"><svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24"><path d="M3 21v-2a4 4 0 014-4h10a4 4 0 014 4v2" stroke="#222" strokeWidth="1.5" fill="#222"/><rect x="6" y="7" width="12" height="7" rx="2" fill="#fff" stroke="#222" strokeWidth="1.5"/><path d="M9 7V5a3 3 0 016 0v2" stroke="#222" strokeWidth="1.5"/></svg></span>
          </div>
          <div className="text-2xl font-bold mb-1">10.5k</div>
          <div className="text-gray-700 text-sm text-center">Sallers active our site</div>
        </div>
        {/* Card 2 */}
        <div className="flex flex-col items-center border border-transparent rounded-lg bg-[#DB4444] px-8 py-7 min-w-[200px] max-w-[240px] shadow-md transition-all">
          <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center mb-3">
            <span className="text-3xl text-[#DB4444]"><svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#fff" stroke="#DB4444" strokeWidth="1.5"/><path d="M8 12h8M12 8v8" stroke="#DB4444" strokeWidth="1.5"/><circle cx="12" cy="12" r="3.5" fill="#fff" stroke="#DB4444" strokeWidth="1.5"/></svg></span>
          </div>
          <div className="text-2xl font-bold mb-1 text-white">33k</div>
          <div className="text-white text-sm text-center">Mopnthly Produuct Sale</div>
        </div>
        {/* Card 3 */}
        <div className="flex flex-col items-center border border-gray-300 rounded-lg bg-white px-8 py-7 min-w-[200px] max-w-[240px] shadow-sm transition-all">
          <div className="w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center mb-3">
            <span className="text-3xl"><svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24"><rect x="6" y="7" width="12" height="12" rx="3" fill="#222"/><rect x="9" y="10" width="6" height="6" rx="1" fill="#fff"/></svg></span>
          </div>
          <div className="text-2xl font-bold mb-1">45.5k</div>
          <div className="text-gray-700 text-sm text-center">Customer active in our site</div>
        </div>
        {/* Card 4 */}
        <div className="flex flex-col items-center border border-gray-300 rounded-lg bg-white px-8 py-7 min-w-[200px] max-w-[240px] shadow-sm transition-all">
          <div className="w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center mb-3">
            <span className="text-3xl"><svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#222"/><path d="M12 7v5l3 3" stroke="#fff" strokeWidth="1.5"/></svg></span>
          </div>
          <div className="text-2xl font-bold mb-1">25k</div>
          <div className="text-gray-700 text-sm text-center">Anual gross sale in our site</div>
        </div>
      </div>
      {/* Team Section */}
      <div className="mt-16">
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-2xl md:text-3xl font-bold">Our Team</h3>
          <div className="flex gap-2">
            <button onClick={handlePrev} disabled={current === 0} className={`w-8 h-8 rounded-full flex items-center justify-center border ${current === 0 ? 'border-gray-300 text-gray-300' : 'border-gray-500 text-gray-700 hover:bg-gray-100'}`}>
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <button onClick={handleNext} disabled={current === maxIndex} className={`w-8 h-8 rounded-full flex items-center justify-center border ${current === maxIndex ? 'border-gray-300 text-gray-300' : 'border-gray-500 text-gray-700 hover:bg-gray-100'}`}>
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>
        </div>
        <div className="flex flex-wrap justify-between gap-8">
          {teamMembers.slice(current, current + visibleCount).map((member, idx) => (
            <div key={idx} className="bg-[#fafafa] rounded-xl flex flex-col items-center p-6 w-[320px] max-w-full shadow-sm transition-all">
              <div className="w-full h-[320px] flex items-center justify-center bg-white rounded-lg mb-6 overflow-hidden">
                <img src={member.img} alt={member.name} className="object-contain h-full" />
              </div>
              <div className="text-xl font-semibold mb-1">{member.name}</div>
              <div className="text-gray-600 text-sm mb-4">{member.title}</div>
              <div className="flex gap-4 mb-2">
                {member.socials.map((s, i) => (
                  <a key={i} href={s.url} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-[#DB4444] text-lg">
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
        {/* Slider Dots */}
        <div className="flex justify-center mt-6 gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleDotClick(idx)}
              className={`w-3 h-3 rounded-full border border-gray-300 ${current === idx ? 'bg-[#DB4444]' : 'bg-gray-200'}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
