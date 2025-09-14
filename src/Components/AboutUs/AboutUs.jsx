import React from "react";
import GovernmentLayout from "../Layout/GovernmentLayout";

const AboutUs = () => {
  return (
    <GovernmentLayout>
      {/* Page Header */}
      <div className="bg-[#2674D9] text-white py-10 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">About Us</h1>
        <p className="text-lg opacity-90">
          Ministry of Education, Government of India
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-10">
        {/* Mission Section */}
        <div className="text-center mb-12 bg-gradient-to-tr from-[#f8f9ff] to-[#e8f1ff] p-10 rounded-lg shadow">
          <h2 className="text-3xl font-bold text-[#2c5aa0] mb-6">
            Shaping India&apos;s Educational Future
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto mb-4">
            The Ministry of Education, Government of India, is the apex body
            responsible for formulation and implementation of the national
            policy on education. The Ministry is committed to promoting
            educational excellence and providing leadership in educational
            reforms to build a knowledge-based society.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
            We strive to ensure inclusive and equitable quality education for
            all, fostering lifelong learning opportunities, and developing human
            resources capable of meeting the challenges of the 21st century
            while preserving our rich cultural heritage.
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
          {[
            {
              icon: "👁",
              title: "Our Vision",
              desc: "To transform India into a knowledge superpower by making education holistic, flexible, multidisciplinary, and suited to 21st-century needs while fostering innovation, research, and entrepreneurship.",
            },
            {
              icon: "🎯",
              title: "Our Mission",
              desc: "To provide universal access to quality education at all levels, promote equity, foster research, develop skilled resources, and strengthen education-employment connections for national development.",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="bg-white border rounded-lg p-8 shadow text-center"
            >
              <h3 className="text-2xl font-bold text-[#2c5aa0] flex justify-center items-center gap-3 mb-4">
                <span className="w-12 h-12 bg-gradient-to-r from-[#4472C4] to-[#5B9BD5] text-white flex items-center justify-center rounded-full text-xl">
                  {card.icon}
                </span>
                {card.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>

        {/* Ministry Structure */}
        <div className="bg-gray-50 p-8 rounded-lg my-12">
          <h2 className="text-2xl font-bold text-[#2c5aa0] text-center mb-4">
            Ministry Structure and Departments
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Comprehensive framework for educational governance and administration
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Department of School Education & Literacy",
                desc: "Policies for elementary, secondary, adult education, literacy and Sanskrit education.",
              },
              {
                title: "Department of Higher Education",
                desc: "Oversees higher education, technical education, scholarships, and coordination with states.",
              },
              {
                title: "All India Council for Technical Education (AICTE)",
                desc: "Statutory body maintaining norms and standards for technical education.",
              },
              {
                title: "University Grants Commission (UGC)",
                desc: "Coordinates and maintains standards of university education, provides grants, promotes research.",
              },
              {
                title: "National Council of Educational Research & Training (NCERT)",
                desc: "Develops curriculum, textbooks, training material, and research for school education.",
              },
              {
                title: "Central Board of Secondary Education (CBSE)",
                desc: "Conducts board exams, prescribes curriculum, and ensures quality standards.",
              },
            ].map((dept, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-lg border-l-4 border-[#5B9BD5] shadow"
              >
                <h4 className="font-semibold text-[#2c5aa0] mb-2">
                  {dept.title}
                </h4>
                <p className="text-gray-600">{dept.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Objectives */}
        <div className="my-12">
          <h2 className="text-2xl font-bold text-[#2c5aa0] text-center mb-6">
            Key Objectives
          </h2>
          <div className="bg-gradient-to-r from-[#f0f8ff] to-[#e8f4f8] p-8 rounded-lg shadow">
            <ul className="space-y-4 text-gray-700">
              {[
                "Ensure universal access to quality education",
                "Implement the National Education Policy 2020",
                "Bridge digital divide with technology-enabled learning",
                "Promote research, innovation and entrepreneurship",
                "Develop skilled human resources for industry and nation",
                "Foster multidisciplinary and holistic education",
                "Strengthen teacher training and professional development",
                "Ensure inclusion for marginalized communities",
                "Promote Indian languages, arts, and culture",
                "Establish robust quality assurance mechanisms",
              ].map((obj, i) => (
                <li key={i} className="relative pl-8">
                  <span className="absolute left-0">🎯</span> {obj}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Leadership */}
        <div className="bg-gradient-to-r from-[#2c5aa0] to-[#4472C4] text-white p-10 rounded-lg text-center my-12">
          <h2 className="text-2xl font-bold mb-6">Ministerial Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Hon'ble Minister of Education",
                desc: "Provides strategic direction and policy leadership.",
              },
              {
                title: "Hon'ble Minister of State",
                desc: "Assists in policy implementation and oversees programs.",
              },
              {
                title: "Secretary, Ministry of Education",
                desc: "Responsible for administration and policy implementation.",
              },
              {
                title: "Additional Secretaries",
                desc: "Oversee departments and coordinate schemes.",
              },
            ].map((leader, i) => (
              <div
                key={i}
                className="bg-white/10 p-6 rounded-lg backdrop-blur shadow"
              >
                <h4 className="font-semibold text-lg mb-2">{leader.title}</h4>
                <p className="text-sm opacity-90">{leader.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="my-12">
          <h2 className="text-2xl font-bold text-[#2c5aa0] text-center mb-6">
            Major Achievements
          </h2>
          {[
            {
              title: "National Education Policy 2020",
              desc: "Introduced transformative reforms in curriculum, pedagogy, and governance.",
            },
            {
              title: "Digital Education Revolution",
              desc: "Initiatives like SWAYAM, DIKSHA, PM eVIDYA, and SWAYAM PRABHA.",
            },
            {
              title: "Foundational Literacy and Numeracy",
              desc: "NIPUN Bharat mission ensures literacy and numeracy by Grade 3.",
            },
            {
              title: "Higher Education Reforms",
              desc: "Introduced Academic Bank of Credits, multiple entry-exit options, and Institutions of Eminence.",
            },
            {
              title: "Quality Assurance Mechanisms",
              desc: "Strengthened accreditation (NAAC), NIRF, and assessment systems.",
            },
          ].map((ach, i) => (
            <div
              key={i}
              className="bg-gradient-to-r from-[#f8f9ff] to-white p-6 rounded-lg border-l-4 border-[#4472C4] mb-6 shadow"
            >
              <h3 className="font-semibold text-[#4472C4] text-lg mb-2">
                {ach.title}
              </h3>
              <p className="text-gray-600">{ach.desc}</p>
            </div>
          ))}
        </div>

        {/* Team Credits */}
        <div className="bg-gradient-to-r from-[#1a365d] to-[#2c5aa0] text-white p-10 rounded-lg text-center my-12">
          <h3 className="text-xl mb-4">Portal Development Team</h3>
          <div className="text-2xl font-bold text-yellow-400 mb-4">
            Team PseudoNerds
          </div>
          <p className="max-w-2xl mx-auto text-sm opacity-90 mb-8">
            This portal was developed by a dedicated team committed to creating
            accessible and user-friendly government digital services.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: "Piyush Saini", role: "Lead Developer" },
              { name: "Soubhik Sadhu", role: "Full Stack Developer" },
              { name: "Chandra Bhayal", role: "Frontend Developer" },
              { name: "Aadvik Mazumdar", role: "Backend Developer" },
              { name: "Abhyuday Singh Panwar", role: "UI/UX Designer" },
              { name: "Khushi Kalwani", role: "Quality Assurance" },
            ].map((member, i) => (
              <div
                key={i}
                className="bg-white/10 p-4 rounded-lg backdrop-blur shadow"
              >
                <h4 className="font-semibold">{member.name}</h4>
                <p className="text-sm opacity-80">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="bg-blue-50 p-8 rounded-lg">
          <h3 className="text-xl font-semibold text-[#2c5aa0] mb-4">
            Ministry of Education
          </h3>
          <p>
            <strong>Address:</strong> Shastri Bhawan, Dr. Rajendra Prasad Road,
            New Delhi - 110001
          </p>
          <p>
            <strong>Phone:</strong> +91-11-23382698, 23381355
          </p>
          <p>
            <strong>Email:</strong> webmaster.moe@gov.in
          </p>
          <p>
            <strong>Website:</strong> www.education.gov.in
          </p>
          <br />
          <p>
            <strong>Office Hours:</strong> Mon–Fri, 9:00 AM to 5:30 PM
          </p>
          <p>
            <strong>Public Grievance:</strong> pgportal.gov.in
          </p>
        </div>
      </div>
    </GovernmentLayout>
  );
};

export default AboutUs;
