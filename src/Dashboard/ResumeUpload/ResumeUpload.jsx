import React, { useRef, useState } from "react";
import { Upload, FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";
import GovernmentLayout from "../../Components/Layout/GovernmentLayout";

export default function ResumeUpload() {
  const fileInputRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Trigger file picker
  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  // Handle file selection
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setLoading(true);

      // Simulate analyzing resume for 10 seconds
      setTimeout(() => {
        setLoading(false);
        navigate("/profile-form"); // ✅ go to ProfileForm after analyzing
      }, 10000);
    }
  };

  return (
    <GovernmentLayout>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
        <div className="max-w-4xl w-full text-center">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-center space-x-4 mb-3">
              <div className="w-3 h-3 rounded-full bg-orange-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-600"></div>
            </div>
            <h2 className="text-gray-700 font-medium">
              Choose how you’d like to set up your profile
            </h2>
          </div>

          {/* Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Upload Resume */}
            <div className="bg-white p-8 rounded-xl shadow-lg border hover:shadow-xl transition">
              <div className="flex flex-col items-center text-center">
                <div className="bg-orange-500 text-white rounded-full p-4 mb-4">
                  <Upload size={28} />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Upload Resume
                </h3>
                <p className="text-sm text-gray-600 mb-6">
                  Upload your resume and let our AI extract your information
                  automatically. Quick and efficient setup in minutes.
                </p>
                <p className="text-xs text-gray-500 mb-4">
                  📄 PDF, DOC, DOCX supported
                </p>

                {/* Hidden file input */}
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx"
                  className="hidden"
                />

                {/* Upload button */}
                {!loading && (
                  <button
                    onClick={handleUploadClick}
                    className="w-full py-2 rounded-lg bg-orange-500 text-white font-medium hover:bg-orange-600 transition"
                  >
                    Choose File
                  </button>
                )}

                {/* Loader */}
                {loading && (
                  <p className="mt-3 text-sm text-orange-600 font-medium animate-pulse">
                    ⏳ Analyzing your resume...
                  </p>
                )}
              </div>
            </div>

            {/* Fill Details Manually */}
            <div className="bg-white p-8 rounded-xl shadow-lg border hover:shadow-xl transition">
              <div className="flex flex-col items-center text-center">
                <div className="bg-green-600 text-white rounded-full p-4 mb-4">
                  <FileText size={28} />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Fill Details Manually
                </h3>
                <p className="text-sm text-gray-600 mb-6">
                  Enter your information manually using our guided form.
                  Complete control over your profile details.
                </p>
                <p className="text-xs text-green-600 mb-4">
                  ✅ Step by step guided form
                </p>
                <button
                  onClick={() => navigate("/profile-form")}
                  className="w-full py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
                >
                  Fill Manually
                </button>
              </div>
            </div>
          </div>

          {/* Footer note */}
          <div className="mt-10 text-sm text-gray-500">
            Powered by <span className="font-medium">Digital India Initiative</span>
          </div>
        </div>
      </div>
    </GovernmentLayout>
  );
}
