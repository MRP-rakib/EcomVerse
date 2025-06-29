import React from 'react';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

function Contact() {
  return (
    <div className="container min-h-screen bg-white pt-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-[15px] text-gray-400 mb-8">
        <span>Home</span>
        <span className="mx-1">/</span>
        <span className="text-gray-900 font-medium">Contact</span>
      </div>
      <div className="flex flex-wrap gap-8 justify-center">
        {/* Contact Info */}
        <div className="bg-white border border-gray-200 rounded-xl p-8 w-full max-w-xs flex flex-col gap-8 min-w-[270px]">
          <div className="flex gap-4 items-start">
            <div className="bg-[#DB4444] text-white rounded-full p-3 mt-1"><FaPhoneAlt size={22} /></div>
            <div>
              <div className="font-semibold mb-1">Call To Us</div>
              <div className="text-gray-600 text-sm mb-1">We are available 24/7, 7 days a week.</div>
              <div className="text-gray-800 text-sm">Phone: +8801611122222</div>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="bg-[#DB4444] text-white rounded-full p-3 mt-1"><FaEnvelope size={22} /></div>
            <div>
              <div className="font-semibold mb-1">Write To US</div>
              <div className="text-gray-600 text-sm mb-1">Fill out our form and we will contact you within 24 hours.</div>
              <div className="text-gray-800 text-sm">Emails: customer@exclusive.com</div>
              <div className="text-gray-800 text-sm">Emails: support@exclusive.com</div>
            </div>
          </div>
        </div>
        {/* Contact Form */}
        <form className="bg-white border border-gray-200 rounded-xl p-8 flex-1 min-w-[320px] max-w-2xl">
          <div className="flex flex-wrap gap-4 mb-4">
            <input type="text" required placeholder="Your Name *" className="flex-1 min-w-[150px] bg-gray-100 rounded-md px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#DB4444]" />
            <input type="email" required placeholder="Your Email *" className="flex-1 min-w-[150px] bg-gray-100 rounded-md px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#DB4444]" />
            <input type="text" required placeholder="Your Phone *" className="flex-1 min-w-[150px] bg-gray-100 rounded-md px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#DB4444]" />
          </div>
          <textarea required placeholder="Your Massage" className="w-full bg-gray-100 rounded-md px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#DB4444] min-h-[120px] mb-6 resize-none" />
          <div className="flex justify-end">
            <button type="submit" className="bg-[#DB4444] text-white px-8 py-3 rounded-md font-medium hover:bg-[#b83232] transition">Send Massage</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;