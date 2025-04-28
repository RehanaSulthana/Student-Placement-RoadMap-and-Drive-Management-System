// import React, { useState, useEffect } from 'react';
// import { User, Book, Trophy, Clock, Briefcase, ChevronRight, BookOpen, Code, Brain } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';
// import { createClient } from '@supabase/supabase-js';

// const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
// const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
// const supabase = createClient(supabaseUrl, supabaseKey);

// // ProfileSetupModal Component
// const ProfileSetupModal = ({ onComplete, initialData, onCancel }) => {
//   const [formData, setFormData] = useState({
//     name: initialData?.name || '',
//     year: initialData?.year || '',
//     branch: initialData?.branch || '',
//     gpa: initialData?.gpa || '',
//     skills: initialData?.skills || '',
//     resume: initialData?.resume || '',
//     avatar: initialData?.avatar || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fit=facearea&facepad=2&w=256&h=256&q=80',
//     // Keep progress in the state but don't show edit fields
//     progress: initialData?.progress || {
//       technicalSkills: 0,
//       nonTechnicalSkills: 0,
//       practiceProblems: 0,
//       quizScore: 0,
//     },
//     recentActivity: initialData?.recentActivity || [],
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Here we call the onComplete function with the updated profile data
//     onComplete(formData);
//   };

//   return (
//     <div className="bg-white rounded-lg shadow-xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
//       <h2 className="text-2xl font-bold text-gray-900 mb-6">Edit Profile</h2>
      
//       <form onSubmit={handleSubmit}>
//         <div className="space-y-6">
//           <div>
//             <label htmlFor="name" className="block text-sm font-medium text-gray-700">
//               Full Name
//             </label>
//             <input
//               type="text"
//               name="name"
//               id="name"
//               value={formData.name}
//               onChange={handleChange}
//               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//             />
//           </div>

//           <div>
//             <label htmlFor="year" className="block text-sm font-medium text-gray-700">
//               Year
//             </label>
//             <select
//               name="year"
//               id="year"
//               value={formData.year}
//               onChange={handleChange}
//               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//             >
//               <option value="">Select Year</option>
//               <option value="1st Year">1st Year</option>
//               <option value="2nd Year">2nd Year</option>
//               <option value="3rd Year">3rd Year</option>
//               <option value="4th Year">4th Year</option>
//             </select>
//           </div>

//           <div>
//             <label htmlFor="branch" className="block text-sm font-medium text-gray-700">
//               Branch
//             </label>
//             <input
//               type="text"
//               name="branch"
//               id="branch"
//               value={formData.branch}
//               onChange={handleChange}
//               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//               placeholder="e.g., Computer Science, Electronics"
//             />
//           </div>

//           <div>
//             <label htmlFor="gpa" className="block text-sm font-medium text-gray-700">
//               CGPA
//             </label>
//             <input
//               type="text"
//               name="gpa"
//               id="gpa"
//               value={formData.gpa}
//               onChange={handleChange}
//               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//               placeholder="e.g., 3.8"
//             />
//           </div>

//           <div>
//             <label htmlFor="skills" className="block text-sm font-medium text-gray-700">
//               Skills
//             </label>
//             <input
//               type="text"
//               name="skills"
//               id="skills"
//               value={formData.skills}
//               onChange={handleChange}
//               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//               placeholder="e.g., JavaScript, Python, UI/UX Design"
//             />
//           </div>

//           <div>
//             <label htmlFor="resume" className="block text-sm font-medium text-gray-700">
//               Resume URL
//             </label>
//             <input
//               type="text"
//               name="resume"
//               id="resume"
//               value={formData.resume}
//               onChange={handleChange}
//               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//               placeholder="https://example.com/your-resume.pdf"
//             />
//           </div>

//           <div>
//             <label htmlFor="avatar" className="block text-sm font-medium text-gray-700">
//               Profile Picture URL
//             </label>
//             <input
//               type="text"
//               name="avatar"
//               id="avatar"
//               value={formData.avatar}
//               onChange={handleChange}
//               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//             />
//           </div>
          
//           {/* Learning Progress section removed from the edit form */}
//         </div>

//         <div className="mt-8 flex justify-end space-x-4">
//           <button
//             type="button"
//             onClick={() => onCancel ? onCancel() : onComplete(initialData)}
//             className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//           >
//             Cancel
//           </button>
//           <button
//             type="submit"
//             className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//           >
//             Save Profile
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// // Main Profile Component
// const Profile = () => {
//   const navigate = useNavigate();
//   const [profileData, setProfileData] = useState({
//     name: '',
//     year: '',
//     branch: '',
//     gpa: '',
//     skills: '',
//     resume: '',
//     avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fit=facearea&facepad=2&w=256&h=256&q=80',
//     progress: {
//       technicalSkills: 0,
//       nonTechnicalSkills: 0,
//       practiceProblems: 0,
//       quizScore: 0,
//     },
//     recentActivity: [],
//   });
//   const [userEmail, setUserEmail] = useState('');
//   const [showEditModal, setShowEditModal] = useState(false);

//   useEffect(() => {
//     const storedProfile = localStorage.getItem('profileData');
//     if (storedProfile) {
//       setProfileData(JSON.parse(storedProfile));
//     }
//     const fetchUserEmail = async () => {
//       const { data: { user } } = await supabase.auth.getUser();
//       if (user) {
//         setUserEmail(user.email || '');
//       }
//     };
//     fetchUserEmail();
//   }, []);

//   const handleLogout = async () => {
//     await supabase.auth.signOut();
//     localStorage.removeItem('supabase.auth.token');
//     localStorage.removeItem('profileData');
//     navigate('/login');
//   };

//   const handleEditProfile = () => {
//     setShowEditModal(true);
//   };

//   const handleProfileUpdate = (updatedProfile) => {
//     // Preserve existing progress data since it's not being edited
//     const newProfileData = {
//       ...updatedProfile,
//       progress: profileData.progress
//     };
    
//     setProfileData(newProfileData);
//     localStorage.setItem('profileData', JSON.stringify(newProfileData));
//     setShowEditModal(false);
//   };

//   const renderProgressBar = (percentage) => (
//     <div className="w-full bg-gray-200 rounded-full h-2">
//       <div
//         className="bg-indigo-600 h-2 rounded-full"
//         style={{ width: `${percentage}%` }} 
//       />
//     </div>
//   );
  
//   return (
//     <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           <div className="lg:col-span-1">
//             <div className="bg-white rounded-lg shadow-lg p-6">
//               <div className="flex flex-col items-center">
//                 <img
//                   src={profileData.avatar}
//                   alt={profileData.name}
//                   className="h-32 w-32 rounded-full object-cover"
//                 />
//                 <h2 className="mt-4 text-2xl font-bold text-gray-900">{profileData.name || 'User Name'}</h2>
//                 <p className="text-gray-500">{userEmail}</p>
//               </div>
              
//               <div className="mt-6 space-y-4">
//                 {profileData.branch && (
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center space-x-2">
//                       <Book className="h-5 w-5 text-gray-400" />
//                       <span className="text-gray-600">Branch</span>
//                     </div>
//                     <span className="text-gray-900">{profileData.branch}</span>
//                   </div>
//                 )}
                
//                 {profileData.year && (
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center space-x-2">
//                       <Clock className="h-5 w-5 text-gray-400" />
//                       <span className="text-gray-600">Year</span>
//                     </div>
//                     <span className="text-gray-900">{profileData.year}</span>
//                   </div>
//                 )}
                
//                 {profileData.gpa && (
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center space-x-2">
//                       <Trophy className="h-5 w-5 text-gray-400" />
//                       <span className="text-gray-600">CGPA</span>
//                     </div>
//                     <span className="text-gray-900">{profileData.gpa}</span>
//                   </div>
//                 )}
//                 {profileData.skills && (
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center space-x-2">
//                       <Briefcase className="h-5 w-5 text-gray-400" />
//                       <span className="text-gray-600">Skills</span>
//                     </div>
//                     <span className="text-gray-900">{profileData.skills}</span>
//                   </div>
//                 )}
//                 {profileData.resume && (
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center space-x-2">
//                       <Briefcase className="h-5 w-5 text-gray-400" />
//                       <span className="text-gray-600">Resume</span>
//                     </div>
//                     <a href={profileData.resume} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">View Resume</a>
//                   </div>
//                 )}
//               </div>

//               <div className="mt-8 flex flex-col space-y-2">
//                 <button onClick={handleEditProfile} className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
//                   Edit Profile
//                 </button>
//                 <button
//                   onClick={handleLogout}
//                   className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
//                 >
//                   Logout
//                 </button>
//               </div>
//             </div>
//           </div>

//           <div className="lg:col-span-2">
//             <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
//               <h3 className="text-xl font-semibold text-gray-900 mb-6">Learning Progress</h3>
              
//               <div className="space-y-6">
//                 <div>
//                   <div className="flex justify-between mb-2">
//                     <span className="text-gray-600">Technical Skills</span>
//                     <span className="text-gray-900">{profileData.progress?.technicalSkills || 0}%</span>
//                   </div>
//                   {renderProgressBar(profileData.progress?.technicalSkills || 0)}
//                 </div>

//                 <div>
//                   <div className="flex justify-between mb-2">
//                     <span className="text-gray-600">Non-Technical Skills</span>
//                     <span className="text-gray-900">{profileData.progress?.nonTechnicalSkills || 0}%</span>
//                   </div>
//                   {renderProgressBar(profileData.progress?.nonTechnicalSkills || 0)}
//                 </div>

//                 <div>
//                   <div className="flex justify-between mb-2">
//                     <span className="text-gray-600">Practice Problems</span>
//                     <span className="text-gray-900">{profileData.progress?.practiceProblems || 0}%</span>
//                   </div>
//                   {renderProgressBar(profileData.progress?.practiceProblems || 0)}
//                 </div>
//                 <div>
//                   <div className="flex justify-between mb-2">
//                     <span className="text-gray-600">Quiz Score</span>
//                     <span className="text-gray-900">{profileData.progress?.quizScore || 0}%</span>
//                   </div>
//                   {renderProgressBar(profileData.progress?.quizScore || 0)}
//                 </div>
//               </div>
//             </div>

//             <div className="bg-white rounded-lg shadow-lg p-6">
//               <h3 className="text-xl font-semibold text-gray-900 mb-6">Recent Activity</h3>
              
//               <div className="space-y-4">
//                 {(profileData.recentActivity && profileData.recentActivity.length > 0) ? (
//                   profileData.recentActivity.map((activity, index) => (
//                     <div
//                       key={index}
//                       className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg cursor-pointer"
//                     >
//                       <div className="flex items-center space-x-4">
//                         <div className="flex-shrink-0 h-10 w-10 bg-indigo-100 rounded-full flex items-center justify-center">
//                           {activity.icon === 'BookOpen' && <BookOpen className="h-5 w-5 text-indigo-600" />}
//                           {activity.icon === 'Code' && <Code className="h-5 w-5 text-indigo-600" />}
//                           {activity.icon === 'Brain' && <Brain className="h-5 w-5 text-indigo-600" />}
//                         </div>
//                         <div>
//                           <p className="text-sm font-medium text-gray-900">{activity.title}</p>
//                           <p className="text-sm text-gray-500">{activity.time}</p>
//                         </div>
//                       </div>
//                       <ChevronRight className="h-5 w-5 text-gray-400" />
//                     </div>
//                   ))
//                 ) : (
//                   <p className="text-gray-500">No recent activity.</p>
//                 )}
//               </div>

//               <button className="mt-6 w-full text-indigo-600 hover:text-indigo-500 font-medium">
//                 View All Activity
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//       {showEditModal && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
//           <ProfileSetupModal 
//             onComplete={handleProfileUpdate} 
//             initialData={profileData} 
//             onCancel={() => setShowEditModal(false)} 
//           />
//         </div>
//       )}
//     </div>
//   );
// };

// export default Profile;


import React, { useState, useEffect } from 'react';
import {
  User,
  Book,
  Trophy,
  Clock,
  Briefcase,
  ChevronRight,
  BookOpen,
  Code,
  Brain,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// ProfileSetupModal Component
const ProfileSetupModal = ({ onComplete, initialData, onCancel }) => {
  const [formData, setFormData] = useState({
    name: initialData?.name || '',
    year: initialData?.year || '',
    branch: initialData?.branch || '',
    gpa: initialData?.gpa || '',
    skills: initialData?.skills || '',
    resume: initialData?.resume || '',
    avatar:
      initialData?.avatar ||
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fit=facearea&facepad=2&w=256&h=256&q=80',
    progress: initialData?.progress || {
      technicalSkills: 0,
      nonTechnicalSkills: 0,
      practiceProblems: 0,
      quizScore: 0,
    },
    recentActivity: initialData?.recentActivity || [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onComplete(formData);
  };

  return (
    <div className="bg-white rounded-lg shadow-xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Edit Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label htmlFor="year" className="block text-sm font-medium text-gray-700">
              Year
            </label>
            <select
              name="year"
              id="year"
              value={formData.year}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              <option value="">Select Year</option>
              <option value="1st Year">1st Year</option>
              <option value="2nd Year">2nd Year</option>
              <option value="3rd Year">3rd Year</option>
              <option value="4th Year">4th Year</option>
            </select>
          </div>

          <div>
            <label htmlFor="branch" className="block text-sm font-medium text-gray-700">
              Branch
            </label>
            <input
              type="text"
              name="branch"
              id="branch"
              value={formData.branch}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="e.g., Computer Science, Electronics"
            />
          </div>

          <div>
            <label htmlFor="gpa" className="block text-sm font-medium text-gray-700">
              CGPA
            </label>
            <input
              type="text"
              name="gpa"
              id="gpa"
              value={formData.gpa}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="e.g., 3.8"
            />
          </div>

          <div>
            <label htmlFor="skills" className="block text-sm font-medium text-gray-700">
              Skills
            </label>
            <input
              type="text"
              name="skills"
              id="skills"
              value={formData.skills}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="e.g., JavaScript, Python, UI/UX Design"
            />
          </div>

          <div>
            <label htmlFor="resume" className="block text-sm font-medium text-gray-700">
              Resume URL
            </label>
            <input
              type="text"
              name="resume"
              id="resume"
              value={formData.resume}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="https://example.com/your-resume.pdf"
            />
          </div>

          <div>
            <label htmlFor="avatar" className="block text-sm font-medium text-gray-700">
              Profile Picture URL
            </label>
            <input
              type="text"
              name="avatar"
              id="avatar"
              value={formData.avatar}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
        </div>

        <div className="mt-8 flex justify-end space-x-4">
          <button
            type="button"
            onClick={() => (onCancel ? onCancel() : onComplete(initialData))}
            className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:ring-indigo-500"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 border border-transparent rounded-md text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500"
          >
            Save Profile
          </button>
        </div>
      </form>
    </div>
  );
};

// Main Profile Component
const Profile = () => {
  const navigate = useNavigate();
  const [profileData, setProfileData] = useState({
    name: '',
    year: '',
    branch: '',
    gpa: '',
    skills: '',
    resume: '',
    avatar:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fit=facearea&facepad=2&w=256&h=256&q=80',
    progress: {
      technicalSkills: 0,
      nonTechnicalSkills: 0,
      practiceProblems: 0,
      quizScore: 0,
    },
    recentActivity: [],
  });
  const [userEmail, setUserEmail] = useState('');
  const [showEditModal, setShowEditModal] = useState(false);

  useEffect(() => {
    const storedProfile = localStorage.getItem('profileData');
    if (storedProfile) {
      setProfileData(JSON.parse(storedProfile));
    }

    const fetchUserEmail = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        setUserEmail(user.email || '');
      }
    };

    fetchUserEmail();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    localStorage.removeItem('supabase.auth.token');
    localStorage.removeItem('profileData');
    navigate('/login');
  };

  const handleEditProfile = () => setShowEditModal(true);

  const handleProfileUpdate = (updatedProfile) => {
    const newProfileData = {
      ...updatedProfile,
      progress: profileData.progress,
    };
    setProfileData(newProfileData);
    localStorage.setItem('profileData', JSON.stringify(newProfileData));
    setShowEditModal(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex flex-col items-center">
                <img
                  src={profileData.avatar}
                  alt={profileData.name}
                  className="h-32 w-32 rounded-full object-cover"
                />
                <h2 className="mt-4 text-2xl font-bold text-gray-900">
                  {profileData.name || 'User Name'}
                </h2>
                <p className="text-gray-500">{userEmail}</p>
              </div>

              <div className="mt-6 space-y-4">
                {profileData.branch && (
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Book className="h-5 w-5 text-gray-400" />
                      <span className="text-gray-600">Branch</span>
                    </div>
                    <span className="text-gray-900">{profileData.branch}</span>
                  </div>
                )}
                {profileData.year && (
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-5 w-5 text-gray-400" />
                      <span className="text-gray-600">Year</span>
                    </div>
                    <span className="text-gray-900">{profileData.year}</span>
                  </div>
                )}
                {profileData.gpa && (
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Trophy className="h-5 w-5 text-gray-400" />
                      <span className="text-gray-600">CGPA</span>
                    </div>
                    <span className="text-gray-900">{profileData.gpa}</span>
                  </div>
                )}
                {profileData.skills && (
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Briefcase className="h-5 w-5 text-gray-400" />
                      <span className="text-gray-600">Skills</span>
                    </div>
                    <span className="text-gray-900">{profileData.skills}</span>
                  </div>
                )}
                {profileData.resume && (
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Briefcase className="h-5 w-5 text-gray-400" />
                      <span className="text-gray-600">Resume</span>
                    </div>
                    <a
                      href={profileData.resume}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 hover:text-indigo-500"
                    >
                      View Resume
                    </a>
                  </div>
                )}
              </div>

              <div className="mt-8 flex flex-col space-y-2">
                <button
                  onClick={handleEditProfile}
                  className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
                >
                  Edit Profile
                </button>
                <button
                  onClick={handleLogout}
                  className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Recent Activity */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Recent Activity</h3>
              <div className="space-y-4">
                {profileData.recentActivity && profileData.recentActivity.length > 0 ? (
                  profileData.recentActivity.map((activity, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg cursor-pointer"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0 h-10 w-10 bg-indigo-100 rounded-full flex items-center justify-center">
                          {activity.icon === 'BookOpen' && (
                            <BookOpen className="h-5 w-5 text-indigo-600" />
                          )}
                          {activity.icon === 'Code' && (
                            <Code className="h-5 w-5 text-indigo-600" />
                          )}
                          {activity.icon === 'Brain' && (
                            <Brain className="h-5 w-5 text-indigo-600" />
                          )}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                          <p className="text-sm text-gray-500">{activity.time}</p>
                        </div>
                      </div>
                      <ChevronRight className="h-5 w-5 text-gray-400" />
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500">No recent activity.</p>
                )}
              </div>
              <button className="mt-6 w-full text-indigo-600 hover:text-indigo-500 font-medium">
                View All Activity
              </button>
            </div>
          </div>
        </div>
      </div>
      {showEditModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <ProfileSetupModal
            onComplete={handleProfileUpdate}
            initialData={profileData}
            onCancel={() => setShowEditModal(false)}
          />
        </div>
      )}
    </div>
  );
};

export default Profile;
