import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import QRCode from "react-qr-code";
import Lanyard from "../../Components/Images/DashboardImages/Lanyard.png";
import IDCard from "../../Components/Images/DashboardImages/IDCard.png";
import GovernmentLayout from "../../Components/Layout/GovernmentLayout";
import { ArrowLeft } from "lucide-react";

export default function ProfilePage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    abcId: "",
    skills: "",
    profilePhoto: null,
    skillloomId: "",
  });

  const [showQR, setShowQR] = useState(false);

  const today = new Date();
  const issuedDate = today.toLocaleDateString("en-GB");
  const validUntilDate = new Date();
  validUntilDate.setFullYear(validUntilDate.getFullYear() + 1);
  const validUntil = validUntilDate.toLocaleDateString("en-GB");

  useEffect(() => {
    const storedData = {
      fullName: localStorage.getItem("fullName") || "",
      email: localStorage.getItem("email") || "",
      phoneNumber: localStorage.getItem("phoneNumber") || "",
      abcId: localStorage.getItem("abcId") || "",
      skills: localStorage.getItem("skills") || "",
      profilePhoto: localStorage.getItem("profilePhoto") || null,
      skillloomId: localStorage.getItem("skillloomId") || "SL" + Date.now(),
    };
    setFormData(storedData);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const updated = { ...prev, [name]: value };
      localStorage.setItem(name, value);
      return updated;
    });
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => {
          localStorage.setItem("profilePhoto", reader.result);
          return { ...prev, profilePhoto: reader.result };
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const qrData = JSON.stringify({
    name: formData.fullName,
    skillloomId: formData.skillloomId,
    email: formData.email,
    phone: formData.phoneNumber,
    abcId: formData.abcId,
  });

  return (
    <GovernmentLayout>
        {/* Back Button */}
    <div className="mb-6">
      <button
        onClick={() => navigate("/dashboard")}
        className="flex items-center gap-2 text-gray-700 hover:text-gray-900 font-medium"
      >
        <ArrowLeft className="w-5 h-5" /> Back to Dashboard
      </button>
    </div>
      <div className="flex min-h-screen bg-gray-50 flex-col md:flex-row gap-6 p-6">
        

        {/* Left Side: Editable Form */}
        <div className="bg-orange-50 p-8 rounded-2xl shadow-lg w-full md:w-1/2 border border-orange-200">
          <h2 className="text-3xl font-bold mb-6 text-orange-600 text-center">
            Edit Profile
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-orange-500 mb-3 border-b-2 border-orange-200 pb-1">
                Personal Info
              </h3>
              <div className="space-y-4">
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-orange-500 focus:outline-none"
                  placeholder="Full Name"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-orange-500 focus:outline-none"
                  placeholder="Email"
                />
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-orange-500 focus:outline-none"
                  placeholder="Phone Number"
                />
                <input
                  type="text"
                  name="abcId"
                  value={formData.abcId}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-orange-500 focus:outline-none"
                  placeholder="ABC ID"
                />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-orange-500 mb-3 border-b-2 border-orange-200 pb-1">
                Skills & Photo
              </h3>
              <div className="space-y-4">
                <input
                  type="text"
                  name="skills"
                  value={formData.skills}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-orange-500 focus:outline-none"
                  placeholder="Skills (comma separated)"
                />
                <div>
                  <label className="block text-sm text-gray-600 mb-2">
                    Upload Profile Photo
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoChange}
                    className="w-full border border-gray-300 p-3 rounded-lg bg-white focus:ring-2 focus:ring-orange-400 focus:border-orange-500 focus:outline-none"
                  />
                  {formData.profilePhoto && (
                    <img
                      src={formData.profilePhoto}
                      alt="Preview"
                      className="mt-4 w-24 h-24 rounded-md object-cover border shadow"
                    />
                  )}
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button
                type="button"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg shadow-md transition"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>

        {/* Right Side: Digital ID Card */}
        <div className="relative flex flex-col items-center w-full md:w-1/2">
          <img src={Lanyard} alt="Lanyard" className="absolute top-0 w-40" />

          <div className="relative mt-40 w-80 rounded-lg overflow-hidden shadow-lg bg-white">
            <img src={IDCard} alt="ID Card" className="w-full h-full object-cover" />

            <div className="absolute inset-0 flex flex-col items-center px-4 text-black">
              {showQR ? (
                <div className="flex items-center justify-center w-full h-full">
                  <QRCode value={qrData} size={128} />
                </div>
              ) : (
                <>
                  {formData.profilePhoto ? (
                    <img
                      src={formData.profilePhoto}
                      alt="Profile"
                      className="mt-20 w-28 h-28 rounded-sm border-4 border-white shadow-md object-cover"
                    />
                  ) : (
                    <div className="mt-20 w-28 h-28 rounded-sm bg-gray-200 border-4 border-white shadow-md flex items-center justify-center text-gray-500 text-sm">
                      Photo
                    </div>
                  )}

                  <div className="mt-4 text-center">
                    <h3 className="font-bold text-xl text-orange-700">
                      {formData.fullName || "Your Name"}
                    </h3>
                    <p className="text-base mt-2">SkillLoom ID: {formData.skillloomId}</p>
                    <p className="text-base">ABC ID: {formData.abcId}</p>
                    <p className="text-base">E-mail: {formData.email}</p>
                    <p className="text-base">Phone: +91 {formData.phoneNumber}</p>

                    <div className="flex flex-wrap justify-center gap-2 mt-3">
                      {String(formData.skills)
                        .split(",")
                        .filter((s) => s.trim() !== "")
                        .map((skill, idx) => (
                          <span key={idx} className="bg-orange-100 text-orange-800 text-sm px-2 py-1 rounded">
                            {skill.trim()}
                          </span>
                        ))}
                    </div>

                    <p className="text-sm text-gray-800 mt-3">Valid Until: {validUntil}</p>
                    <p className="text-sm text-gray-800">Issued: {issuedDate}</p>
                  </div>
                </>
              )}
            </div>
          </div>

          <button
            onClick={() => setShowQR(!showQR)}
            className="mt-6 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition"
          >
            {showQR ? "Show ID Details" : "Generate QR Code"}
          </button>
        </div>
      </div>
    </GovernmentLayout>
  );
}
