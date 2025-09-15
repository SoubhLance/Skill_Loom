import React from "react";
import GovernmentLayout from "../Layout/GovernmentLayout";

const InternshipGuidelines = () => {
  return (
    <GovernmentLayout>
      {/* Page Header */}
      <div className="bg-[#2674D9] text-white py-10 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Internship Guidelines</h1>
        <p className="text-lg opacity-90">
          All India Council for Technical Education (AICTE) & Ministry of Education Guidelines
        </p>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-10 space-y-12">
        {/* Section 1 */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-700 border-b-2 border-blue-500 pb-2 mb-4">
            AICTE Internship Policy Framework
          </h2>
          <p className="text-gray-700">
            The All India Council for Technical Education (AICTE) has mandated internship programs for all undergraduate technical programs to bridge the gap between academic learning and industry requirements.
          </p>
          <h3 className="text-xl font-semibold text-blue-600 mt-6 mb-2">Mandatory Requirements</h3>
          <ul className="bg-gray-100 p-5 border-l-4 border-blue-500 space-y-2 list-disc list-inside">
            <li>Minimum 8 weeks internship for all Engineering & Technology programs</li>
            <li>4-6 weeks internship for Management & Applied Arts programs</li>
            <li>Industry mentorship with designated supervisors</li>
            <li>Academic credit allocation (4-6 credits minimum)</li>
            <li>Comprehensive evaluation and assessment framework</li>
            <li>Industry-Institution partnership agreements</li>
          </ul>

          <div className="bg-yellow-100 border border-yellow-400 p-4 rounded-md mt-6">
            <h4 className="font-bold text-yellow-700 mb-2">Important Notice</h4>
            <p className="text-yellow-800">
              As per AICTE guidelines, internships are now mandatory for the award of degrees in technical education.
              Students must complete their internship requirements to be eligible for graduation.
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-700 border-b-2 border-blue-500 pb-2 mb-4">
            Implementation Guidelines
          </h2>
          <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">For Educational Institutions</h3>
          <ul className="bg-gray-100 p-5 border-l-4 border-blue-500 space-y-2 list-disc list-inside">
            <li>Establish Industry Liaison Cells for internship coordination</li>
            <li>Develop MoUs with industry partners and organizations</li>
            <li>Create internship databases and tracking systems</li>
            <li>Appoint faculty coordinators for internship programs</li>
            <li>Conduct pre-internship orientation and training</li>
            <li>Implement continuous monitoring and evaluation</li>
            <li>Maintain internship records and documentation</li>
          </ul>

          <h3 className="text-xl font-semibold text-blue-600 mt-6 mb-2">For Industry Partners</h3>
          <ul className="bg-gray-100 p-5 border-l-4 border-blue-500 space-y-2 list-disc list-inside">
            <li>Provide structured learning experiences aligned with curriculum</li>
            <li>Assign experienced mentors for intern guidance</li>
            <li>Offer hands-on exposure to real-world projects</li>
            <li>Conduct regular assessment and feedback sessions</li>
            <li>Issue completion certificates with detailed evaluation</li>
            <li>Maintain safety and security standards for interns</li>
            <li>Participate in joint evaluation with academic institutions</li>
          </ul>
        </section>

        {/* Section 3 */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-700 border-b-2 border-blue-500 pb-2 mb-4">
            Quality Assurance Framework
          </h2>
          <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">Learning Outcomes</h3>
          <ul className="bg-gray-100 p-5 border-l-4 border-blue-500 space-y-2 list-disc list-inside">
            <li>Practical application of theoretical knowledge</li>
            <li>Development of professional and soft skills</li>
            <li>Understanding of industry practices and standards</li>
            <li>Problem-solving in real-world scenarios</li>
            <li>Communication and teamwork capabilities</li>
            <li>Ethical practices and professional conduct</li>
            <li>Innovation and entrepreneurial thinking</li>
          </ul>

          <h3 className="text-xl font-semibold text-blue-600 mt-6 mb-2">Assessment Criteria</h3>
          <ul className="bg-gray-100 p-5 border-l-4 border-blue-500 space-y-2 list-disc list-inside">
            <li>Industry supervisor evaluation (40%)</li>
            <li>Academic supervisor assessment (30%)</li>
            <li>Internship report and documentation (20%)</li>
            <li>Presentation and viva voce (10%)</li>
            <li>Attendance and participation records</li>
            <li>Project deliverables and outcomes</li>
          </ul>
        </section>

        {/* Section 4 */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-700 border-b-2 border-blue-500 pb-2 mb-4">
            Student Guidelines
          </h2>
          <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">Preparation Phase</h3>
          <ul className="bg-gray-100 p-5 border-l-4 border-blue-500 space-y-2 list-disc list-inside">
            <li>Complete prerequisite courses and maintain minimum CGPA</li>
            <li>Participate in pre-internship training programs</li>
            <li>Prepare professional resume and portfolio</li>
            <li>Research potential internship organizations</li>
            <li>Develop communication and technical skills</li>
            <li>Understand industry-specific requirements</li>
          </ul>

          <h3 className="text-xl font-semibold text-blue-600 mt-6 mb-2">During Internship</h3>
          <ul className="bg-gray-100 p-5 border-l-4 border-blue-500 space-y-2 list-disc list-inside">
            <li>Maintain regular attendance and punctuality</li>
            <li>Follow organizational policies and code of conduct</li>
            <li>Actively participate in assigned projects and tasks</li>
            <li>Maintain detailed logbook and documentation</li>
            <li>Seek guidance from mentors and supervisors</li>
            <li>Submit weekly/fortnightly progress reports</li>
            <li>Respect confidentiality and intellectual property</li>
          </ul>
        </section>

        {/* Downloads */}
        <section className="bg-blue-50 p-6 text-center rounded-lg">
          <h3 className="text-xl font-semibold text-blue-700 mb-4">Download Official Documents</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#" className="bg-gradient-to-r from-blue-700 to-blue-500 text-white px-6 py-3 rounded-md shadow hover:scale-105 transform transition">AICTE Internship Policy 2024</a>
            <a href="#" className="bg-gradient-to-r from-blue-700 to-blue-500 text-white px-6 py-3 rounded-md shadow hover:scale-105 transform transition">Implementation Guidelines</a>
            <a href="#" className="bg-gradient-to-r from-blue-700 to-blue-500 text-white px-6 py-3 rounded-md shadow hover:scale-105 transform transition">Assessment Framework</a>
            <a href="#" className="bg-gradient-to-r from-blue-700 to-blue-500 text-white px-6 py-3 rounded-md shadow hover:scale-105 transform transition">Student Handbook</a>
          </div>
        </section>
      </div>
    </GovernmentLayout>
  );
};

export default InternshipGuidelines;
