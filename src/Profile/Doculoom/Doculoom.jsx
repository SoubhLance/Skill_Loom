import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Download, 
  Eye, 
  Edit3, 
  Trash2, 
  Plus, 
  Shield,
  GraduationCap,
  CreditCard,
  Award,
  BookOpen,
  Building,
  Grid3X3,
  List,
  MoreHorizontal,
  ArrowLeft
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import GovernmentLayout from "../../Components/Layout/GovernmentLayout";

const Doculoom = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('uploadDate');

  const documentCategories = [
    { id: 'academic', name: 'Academic Records', icon: GraduationCap },
    { id: 'identity', name: 'Identity Documents', icon: CreditCard },
    { id: 'certificates', name: 'Certificates', icon: Award },
    { id: 'transcripts', name: 'Transcripts', icon: BookOpen },
    { id: 'government', name: 'Government IDs', icon: Shield },
    { id: 'institutional', name: 'Institutional', icon: Building }
  ];

  const documents = [
    { id: 1, name: "12th Grade Marksheet", category: "academic", type: "PDF", size: "2.4 MB", uploadDate: "2024-01-15", status: "verified", description: "CBSE Class XII Final Examination Results", issueDate: "2023-05-20", validUntil: "Lifetime", tags: ["CBSE", "Final Exam", "Marksheet"] },
    { id: 2, name: "10th Grade Marksheet", category: "academic", type: "PDF", size: "1.8 MB", uploadDate: "2024-01-15", status: "verified", description: "CBSE Class X Board Examination Results", issueDate: "2021-07-15", validUntil: "Lifetime", tags: ["CBSE", "Board Exam", "Marksheet"] },
    { id: 3, name: "Aadhar Card", category: "identity", type: "PDF", size: "0.8 MB", uploadDate: "2024-01-10", status: "verified", description: "Unique Identification Authority of India", issueDate: "2020-03-12", validUntil: "Lifetime", tags: ["UIDAI", "Government ID", "Address Proof"] },
    { id: 4, name: "ABC ID Card", category: "government", type: "PDF", size: "1.2 MB", uploadDate: "2024-01-12", status: "pending", description: "Academic Bank of Credits Identification", issueDate: "2023-08-10", validUntil: "2028-08-10", tags: ["ABC", "Academic Credit", "Digital Locker"] },
    { id: 5, name: "Bachelor's Degree Certificate", category: "certificates", type: "PDF", size: "3.2 MB", uploadDate: "2024-01-08", status: "verified", description: "Bachelor of Technology in Computer Science", issueDate: "2023-06-25", validUntil: "Lifetime", tags: ["B.Tech", "Degree", "University"] },
    { id: 6, name: "Semester 8 Marksheet", category: "transcripts", type: "PDF", size: "1.5 MB", uploadDate: "2024-01-05", status: "verified", description: "Final Semester Academic Transcript", issueDate: "2023-05-30", validUntil: "Lifetime", tags: ["Semester", "Transcript", "Final Year"] },
    { id: 7, name: "PAN Card", category: "identity", type: "PDF", size: "0.6 MB", uploadDate: "2024-01-03", status: "verified", description: "Permanent Account Number Card", issueDate: "2022-11-18", validUntil: "Lifetime", tags: ["Income Tax", "PAN", "Financial ID"] },
    { id: 8, name: "JEE Main Scorecard", category: "certificates", type: "PDF", size: "1.1 MB", uploadDate: "2023-12-28", status: "verified", description: "Joint Entrance Examination Main Results", issueDate: "2019-06-15", validUntil: "Lifetime", tags: ["JEE", "Entrance Exam", "NTA"] }
  ];

  const getCategoryClasses = (categoryId) => {
    switch (categoryId) {
      case 'academic': return { bg: 'bg-blue-100', text: 'text-blue-600', icon: GraduationCap };
      case 'identity': return { bg: 'bg-green-100', text: 'text-green-600', icon: CreditCard };
      case 'certificates': return { bg: 'bg-purple-100', text: 'text-purple-600', icon: Award };
      case 'transcripts': return { bg: 'bg-orange-100', text: 'text-orange-600', icon: BookOpen };
      case 'government': return { bg: 'bg-red-100', text: 'text-red-600', icon: Shield };
      case 'institutional': return { bg: 'bg-indigo-100', text: 'text-indigo-600', icon: Building };
      default: return { bg: 'bg-gray-100', text: 'text-gray-600', icon: BookOpen };
    }
  };

  const filteredDocuments = useMemo(() => {
    let filtered = documents.filter(doc => {
      const matchesSearch = doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doc.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doc.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = selectedCategory === 'all' || doc.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name': return a.name.localeCompare(b.name);
        case 'uploadDate': return new Date(b.uploadDate) - new Date(a.uploadDate);
        case 'size': return parseFloat(b.size) - parseFloat(a.size);
        default: return 0;
      }
    });

    return filtered;
  }, [searchTerm, selectedCategory, sortBy]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'verified': return 'bg-green-100 text-green-800 border-green-200';
      case 'pending': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'expired': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const DocumentActions = ({ document }) => (
    <div className="flex items-center space-x-1">
      <button className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" title="View Document">
        <Eye className="w-4 h-4" />
      </button>
      <button className="p-2 text-gray-500 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors" title="Download">
        <Download className="w-4 h-4" />
      </button>
      <button className="p-2 text-gray-500 hover:text-yellow-600 hover:bg-yellow-50 rounded-lg transition-colors" title="Edit">
        <Edit3 className="w-4 h-4" />
      </button>
      <button className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors" title="Delete">
        <Trash2 className="w-4 h-4" />
      </button>
      <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-50 rounded-lg transition-colors" title="More Options">
        <MoreHorizontal className="w-4 h-4" />
      </button>
    </div>
  );

  const DocumentGridView = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
      {filteredDocuments.map(document => {
        const categoryClasses = getCategoryClasses(document.category);
        const IconComponent = categoryClasses.icon;

        return (
          <div key={document.id} className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 ${categoryClasses.bg} rounded-xl flex items-center justify-center transition-transform group-hover:scale-110`}>
                  <IconComponent className={`w-6 h-6 ${categoryClasses.text}`} />
                </div>
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(document.status)}`}>
                  {document.status.charAt(0).toUpperCase() + document.status.slice(1)}
                </span>
              </div>
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-1 group-hover:text-blue-600 transition-colors">{document.name}</h3>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">{document.description}</p>
              </div>
              <div className="space-y-2 mb-4 text-sm">
                <div className="flex justify-between"><span className="text-gray-500">Type:</span><span className="font-medium text-gray-900">{document.type}</span></div>
                <div className="flex justify-between"><span className="text-gray-500">Size:</span><span className="font-medium text-gray-900">{document.size}</span></div>
                <div className="flex justify-between"><span className="text-gray-500">Uploaded:</span><span className="font-medium text-gray-900">{new Date(document.uploadDate).toLocaleDateString()}</span></div>
              </div>
              <div className="flex flex-wrap gap-1 mb-4">
                {document.tags.slice(0,2).map(tag => (
                  <span key={tag} className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors">{tag}</span>
                ))}
                {document.tags.length > 2 && <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-700">+{document.tags.length-2}</span>}
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <DocumentActions document={document} />
                <button className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors">Details</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );

  const DocumentListView = () => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Document</th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Size</th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Upload Date</th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredDocuments.map(document => {
              const categoryClasses = getCategoryClasses(document.category);
              const IconComponent = categoryClasses.icon;
              const category = documentCategories.find(cat => cat.id === document.category);
              
              return (
                <tr key={document.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-4">
                      <div className={`w-10 h-10 ${categoryClasses.bg} rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <IconComponent className={`w-5 h-5 ${categoryClasses.text}`} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium text-gray-900 truncate">{document.name}</p>
                        <p className="text-sm text-gray-500 truncate">{document.description}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-gray-900">{category?.name}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getStatusColor(document.status)}`}>
                      {document.status.charAt(0).toUpperCase() + document.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{document.size}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{new Date(document.uploadDate).toLocaleDateString()}</td>
                  <td className="px-6 py-4 whitespace-nowrap"><DocumentActions document={document} /></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <GovernmentLayout>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        {/* Hero Section */}
        <header className="bg-gradient-to-r from-blue-500 via-indigo-400 to-purple-500 text-white shadow-sm border-b sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
            
            {/* Left: Back to Dashboard */}
            <div 
              onClick={() => navigate("/dashboard")} 
              className="flex items-center gap-2 cursor-pointer hover:underline font-medium"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Dashboard</span>
            </div>

            {/* Center: Title */}
            <div className="text-center">
              <h1 className="text-2xl font-bold">Doculoom</h1>
              <p className="text-sm">Documents</p>
            </div>

            {/* Right: Upload */}
            <div>
              <button className="inline-flex items-center px-4 py-2 rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors">
                <Plus className="w-4 h-4 mr-2" /> Upload Document
              </button>
            </div>
          </div>
        </header>

        {/* Search and Filters */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2 flex-1 relative">
            <Search className="w-5 h-5 text-gray-400 absolute ml-3 pointer-events-none" />
            <input 
              type="text" 
              placeholder="Search documents..." 
              value={searchTerm} 
              onChange={e => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-lg text-gray-700 focus:ring-1 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div className="flex items-center space-x-2">
            <select 
              value={selectedCategory} 
              onChange={e => setSelectedCategory(e.target.value)}
              className="border rounded-lg px-3 py-2 text-gray-700 focus:ring-1 focus:ring-blue-500 focus:outline-none"
            >
              <option value="all">All Categories</option>
              {documentCategories.map(cat => (
                <option key={cat.id} value={cat.id}>{cat.name}</option>
              ))}
            </select>

            <select 
              value={sortBy} 
              onChange={e => setSortBy(e.target.value)}
              className="border rounded-lg px-3 py-2 text-gray-700 focus:ring-1 focus:ring-blue-500 focus:outline-none"
            >
              <option value="uploadDate">Sort by Upload Date</option>
              <option value="name">Sort by Name</option>
              <option value="size">Sort by Size</option>
            </select>

            <button onClick={() => setViewMode('grid')} className={`p-2 rounded-lg transition-all ${viewMode === 'grid' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-600 hover:text-gray-900'}`}>
              <Grid3X3 className="w-5 h-5" />
            </button>
            <button onClick={() => setViewMode('list')} className={`p-2 rounded-lg transition-all ${viewMode === 'list' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-600 hover:text-gray-900'}`}>
              <List className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Documents */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 pb-12">
          {viewMode === 'grid' ? <DocumentGridView /> : <DocumentListView />}
        </main>
      </div>
    </GovernmentLayout>
  );
};

export default Doculoom;
