import React from "react";
import GovernmentLayout from "../Layout/GovernmentLayout";

const Education = () => {
  return (
    <GovernmentLayout>
      {/* Page Header */}
      <div className="bg-gradient-to-r from-[#4472C4] to-[#5B9BD5] text-white py-10 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Education</h1>
        <p className="text-lg opacity-90">
          Transforming India through Quality Education and Skill Development
        </p>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        {/* Hero Section */}
        <div className="text-center mb-12 bg-gradient-to-tr from-[#f8f9ff] to-[#e8f1ff] p-10 rounded-lg shadow">
          <h2 className="text-3xl font-bold text-[#2c5aa0] mb-4">
            Building Tomorrow&apos;s India
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
            The Ministry of Education is committed to developing a comprehensive
            education ecosystem that promotes holistic development, critical
            thinking, creativity, and innovation while preserving India&apos;s
            rich cultural heritage and values.
          </p>
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 my-12">
          {[
            {
              icon: "SE",
              title: "School Education",
              items: [
                "Foundational Literacy and Numeracy Mission",
                "NIPUN Bharat Initiative",
                "Mid-Day Meal Programme",
                "Samagra Shiksha Scheme",
                "PM POSHAN",
                "Digital Infrastructure for Schools",
                "Teacher Training and Development",
              ],
            },
            {
              icon: "HE",
              title: "Higher Education",
              items: [
                "Rashtriya Uchchatar Shiksha Abhiyan (RUSA)",
                "Institutions of Eminence (IoE) Scheme",
                "National Institutional Ranking Framework (NIRF)",
                "Academic Bank of Credits (ABC)",
                "SWAYAM",
                "National Assessment and Accreditation Council",
                "Research and Innovation Promotion",
              ],
            },
            {
              icon: "TE",
              title: "Technical Education",
              items: [
                "All India Council for Technical Education (AICTE)",
                "Quality Improvement Programme (QIP)",
                "Technical Education Quality Improvement",
                "Apprenticeship and Internship Programs",
                "Industry-Academia Collaboration",
                "Innovation and Entrepreneurship Development",
                "Skill Development Initiatives",
              ],
            },
            {
              icon: "DE",
              title: "Digital Education",
              items: [
                "PM eVIDYA",
                "DIKSHA - Digital Infrastructure for Teachers",
                "SWAYAM PRABHA Educational Channels",
                "National Digital Library of India",
                "Online Learning Platforms",
                "Virtual Labs for Practical Learning",
                "Digital Content Development",
              ],
            },
          ].map((section, idx) => (
            <div
              key={idx}
              className="bg-white border rounded-lg p-6 shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-[#2c5aa0] flex items-center gap-3 mb-4">
                <span className="w-10 h-10 flex items-center justify-center bg-gradient-to-r from-[#4472C4] to-[#5B9BD5] text-white font-bold rounded-full">
                  {section.icon}
                </span>
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.items.map((item, i) => (
                  <li
                    key={i}
                    className="pl-6 relative text-gray-700 border-b last:border-b-0 pb-2"
                  >
                    <span className="absolute left-0 text-[#4472C4] font-bold">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Policy Section */}
        <div className="bg-gray-50 p-8 rounded-lg my-12">
          <h2 className="text-2xl font-bold text-[#2c5aa0] text-center mb-6">
            National Education Policy 2020 - Key Highlights
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Transformative policy framework for 21st century education
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Foundational Stage (Ages 3-8)",
                desc: "Learning through play, discovery, and activity-based learning with focus on holistic development.",
              },
              {
                title: "Preparatory Stage (Ages 8-11)",
                desc: "Interactive classroom learning, literacy & numeracy skills, structured outcomes.",
              },
              {
                title: "Middle Stage (Ages 11-14)",
                desc: "Subject-specific pedagogy, abstract thinking, vocational education introduction.",
              },
              {
                title: "Secondary Stage (Ages 14-18)",
                desc: "Multidisciplinary learning, critical thinking, flexibility in subject choice.",
              },
              {
                title: "Higher Education Reforms",
                desc: "Multidisciplinary universities, research emphasis, multiple entry-exit points.",
              },
              {
                title: "Technology Integration",
                desc: "Digital infrastructure, online platforms, tech-enabled teaching-learning.",
              },
            ].map((policy, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-lg border-l-4 border-[#5B9BD5] shadow"
              >
                <h4 className="font-semibold text-[#2c5aa0] mb-2">
                  {policy.title}
                </h4>
                <p className="text-gray-600">{policy.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="bg-gradient-to-r from-[#2c5aa0] to-[#4472C4] text-white p-10 rounded-lg text-center my-12">
          <h2 className="text-2xl font-bold mb-8">Education Statistics - India</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "15.2L", label: "Schools in India" },
              { number: "26.4Cr", label: "Students Enrolled" },
              { number: "1000+", label: "Universities" },
              { number: "42K+", label: "Colleges" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <span className="block text-3xl font-bold">{stat.number}</span>
                <span className="text-sm opacity-90">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Initiatives */}
        <div className="my-12">
          <h2 className="text-2xl font-bold text-[#2c5aa0] text-center mb-8">
            Major Education Initiatives
          </h2>
          {[
            {
              title: "Skill India Mission",
              desc: "Comprehensive skill development program training 40 crore people by 2025.",
            },
            {
              title: "Digital India in Education",
              desc: "Leveraging technology for equitable access via online learning and virtual labs.",
            },
            {
              title: "Research and Innovation",
              desc: "Promotion of research culture, innovation hubs, and scientific temper.",
            },
            {
              title: "Internationalization of Education",
              desc: "Study in India program, foreign campuses, global collaborations.",
            },
          ].map((initiative, i) => (
            <div
              key={i}
              className="bg-gradient-to-r from-[#f8f9ff] to-white border rounded-lg p-6 mb-6 shadow"
            >
              <h3 className="text-lg font-semibold text-[#4472C4] mb-2">
                {initiative.title}
              </h3>
              <p className="text-gray-600">{initiative.desc}</p>
            </div>
          ))}
        </div>

        {/* Downloads */}
        <div className="bg-blue-50 text-center p-8 rounded-lg my-12">
          <h3 className="text-xl font-bold text-[#2c5aa0] mb-6">
            Important Documents & Resources
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "National Education Policy 2020",
              "Higher Education Statistics",
              "NIRF Rankings 2024",
              "Education Budget 2024-25",
              "SWAYAM Course Catalog",
              "Digital Education Guidelines",
            ].map((doc, i) => (
              <a
                key={i}
                href="#"
                className="bg-gradient-to-r from-[#4472C4] to-[#5B9BD5] text-white px-5 py-2 rounded-md font-medium shadow hover:scale-105 transition-transform"
              >
                {doc}
              </a>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="bg-blue-100 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-[#2c5aa0] mb-4">
            Ministry of Education
          </h3>
          <p>
            <strong>Address:</strong> Shastri Bhawan, Dr. Rajendra Prasad Road,
            New Delhi - 110001
          </p>
          <p>
            <strong>Education Helpline:</strong> 1800-11-3737
          </p>
          <p>
            <strong>Email:</strong> webmaster.moe@gov.in
          </p>
          <p>
            <strong>Website:</strong> www.education.gov.in
          </p>
          <br />
          <p>
            <strong>AICTE:</strong> Nelson Mandela Marg, Vasant Kunj, New Delhi
            - 110070
          </p>
          <p>
            <strong>UGC:</strong> Bahadur Shah Zafar Marg, New Delhi - 110002
          </p>
        </div>
      </div>
    </GovernmentLayout>
  );
};

export default Education;
