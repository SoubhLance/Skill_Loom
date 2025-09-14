import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const ContactUs = () => {
  return (
    <div className="bg-gray-100 font-sans">
      {/* Navbar */}
      <Navbar />

      {/* Ticker */}
      
      

      {/* Page Container */}
      <div className="max-w-6xl mx-auto my-6 bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-blue-700 to-blue-500 text-white text-center py-8 px-4">
          <h1 className="text-3xl font-bold">Contact Us</h1>
          <p className="mt-2 text-lg opacity-90">
            Ministry of Education, Government of India
          </p>
        </div>

        <div className="p-6 md:p-10">
          {/* Contact Intro */}
          <div className="text-center bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg mb-10">
            <h2 className="text-2xl font-bold text-blue-700 mb-3">Get in Touch</h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              The Ministry of Education is committed to serving citizens and
              stakeholders. We welcome your queries, suggestions, and feedback
              to help us improve our services and educational initiatives across
              India.
            </p>
          </div>

          {/* Contact Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {[
              {
                icon: "🏛",
                title: "Ministry Headquarters",
                info: [
                  ["Address:", "Shastri Bhawan, Dr. Rajendra Prasad Road, New Delhi - 110001"],
                  ["Phone:", "+91-11-23382698, 23381355"],
                  ["Fax:", "+91-11-23381355"],
                ],
              },
              {
                icon: "📧",
                title: "Digital Communication",
                info: [
                  ["Email:", "webmaster.moe@gov.in"],
                  ["Website:", "www.education.gov.in"],
                  ["Grievance:", "pgportal.gov.in"],
                ],
              },
              {
                icon: "📞",
                title: "Helpline Services",
                info: [
                  ["Student:", "1800-11-2020 (Toll Free)"],
                  ["Teacher:", "1800-11-3344 (Toll Free)"],
                  ["RTI Cell:", "+91-11-23382370"],
                ],
              },
              {
                icon: "🕒",
                title: "Emergency Contact",
                info: [
                  ["Control Room:", "+91-11-23381104"],
                  ["Media:", "media.moe@gov.in"],
                  ["Security:", "+91-11-23381866"],
                ],
              },
            ].map((card, idx) => (
              <div
                key={idx}
                className="bg-white border rounded-lg shadow-md p-6 hover:shadow-lg transition"
              >
                <h3 className="flex items-center gap-3 text-lg font-semibold text-blue-700 mb-4">
                  <span className="bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-full h-10 w-10 flex items-center justify-center">
                    {card.icon}
                  </span>
                  {card.title}
                </h3>
                {card.info.map(([label, value], i) => (
                  <p key={i} className="mb-1">
                    <span className="font-bold text-blue-700">{label}</span>{" "}
                    <span className="text-gray-600">{value}</span>
                  </p>
                ))}
              </div>
            ))}
          </div>

          {/* Office Hours */}
          <div className="bg-gray-50 p-6 rounded-lg mb-10">
            <h3 className="text-xl font-bold text-blue-700 text-center mb-6">
              Office Hours & Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                ["Working Days", "Monday to Friday\n9:00 AM to 5:30 PM"],
                ["Public Dealing", "Monday to Friday\n10:00 AM to 5:00 PM"],
                ["RTI Office", "Monday to Friday\n9:30 AM to 5:30 PM"],
                ["Helpline Support", "Monday to Saturday\n8:00 AM to 8:00 PM"],
              ].map(([title, desc], idx) => (
                <div
                  key={idx}
                  className="bg-white border-l-4 border-blue-500 p-4 rounded-md shadow"
                >
                  <h4 className="font-semibold text-blue-700 mb-2">{title}</h4>
                  <p className="text-gray-600 whitespace-pre-line">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Development Team */}
          <div className="bg-gradient-to-r from-blue-800 to-blue-600 text-white rounded-lg p-8 mb-10">
            <h2 className="text-2xl font-bold text-center mb-2">
              Development Team
            </h2>
            <p className="text-center text-blue-100 mb-6">
              Team PseudoNerds - Portal Development & Technical Support
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                ["Piyush Saini", "Lead Developer", "ps4726@srmist.edu.in"],
                ["Soubhik Sadhu", "Full Stack Developer", "ss3247@srmist.edu.in"],
                ["Aadvik Mazumdar", "Backend Developer", "az5348@srmist.edu.in"],
                ["Khushi Kalwani", "Quality Assurance", "kk0287@srmist.edu.in"],
                ["Abhyuday Singh Panwar", "UI/UX Designer", "ap7983@srmist.edu.in"],
                ["Chandra Bhayal", "Frontend Developer", "cb2117@srmist.edu.in"],
              ].map(([name, role, email], idx) => (
                <div
                  key={idx}
                  className="bg-white/10 border border-white/20 rounded-lg p-4 backdrop-blur-md"
                >
                  <h4 className="text-lg font-semibold text-yellow-300">
                    {name}
                  </h4>
                  <p className="text-sm">{role}</p>
                  <p className="text-xs font-mono text-blue-100">{email}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-blue-700 text-center mb-6">
              Send Us a Message
            </h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="mb-4">
                    <label className="block text-blue-700 font-semibold mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      className="w-full border-2 border-gray-200 rounded-md p-3 focus:outline-none focus:border-blue-500"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-blue-700 font-semibold mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      className="w-full border-2 border-gray-200 rounded-md p-3 focus:outline-none focus:border-blue-500"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-blue-700 font-semibold mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="w-full border-2 border-gray-200 rounded-md p-3 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>
                <div>
                  <div className="mb-4">
                    <label className="block text-blue-700 font-semibold mb-2">
                      Subject *
                    </label>
                    <select
                      className="w-full border-2 border-gray-200 rounded-md p-3 focus:outline-none focus:border-blue-500"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="complaint">Complaint/Grievance</option>
                      <option value="suggestion">Suggestion</option>
                      <option value="technical">Technical Support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-blue-700 font-semibold mb-2">
                      Message *
                    </label>
                    <textarea
                      className="w-full border-2 border-gray-200 rounded-md p-3 h-32 resize-y focus:outline-none focus:border-blue-500"
                      required
                    ></textarea>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-600 to-blue-400 text-white px-6 py-3 rounded-md shadow-md hover:scale-105 transform transition mx-auto block"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ContactUs;
