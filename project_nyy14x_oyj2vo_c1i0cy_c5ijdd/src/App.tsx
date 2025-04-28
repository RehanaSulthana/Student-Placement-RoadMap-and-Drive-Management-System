// import React, { useEffect, useState } from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
//   useLocation,
// } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import AdminPage from "./pages/AdminPage";
// import TechnicalSkills from "./pages/skills/TechnicalSkills";
// import NonTechnicalSkills from "./pages/skills/NonTechnicalSkills";
// import Practice from "./pages/Practice";
// import PlacementDrives from "./pages/PlacementDrives";
// import Profile from "./pages/Profile";
// import MockInterviews from "./pages/MockInterviews";
// import CodeEditor from "./pages/CodeEditor";
// import Quiz from "./pages/Quiz";
// import DSA from "./pages/DSA";
// import Aptitude from "./pages/Aptitude";
// import CppDetails from "./pages/skills/cpp/CppDetails";
// import PythonDetails from "./pages/skills/python/PythonDetails";
// import JavaDetails from "./pages/skills/java/JavaDetails";
// import DataStructuresDetails from "./pages/skills/data-structures/DataStructuresDetails";
// import AlgorithmsDetails from "./pages/skills/algorithms/AlgorithmsDetails";
// import FrontendDetails from "./pages/skills/frontend/FrontendDetails";
// import BackendDetails from "./pages/skills/backend/BackendDetails";
// import QuantitativeAptitudeDetails from "./pages/skills/aptitude/QuantitativeAptitudeDetails";
// import LogicalReasoningDetails from "./pages/skills/aptitude/LogicalReasoningDetails";
// import VerbalCommunicationDetails from "./pages/skills/communication/VerbalCommunicationDetails";
// import NonVerbalCommunicationDetails from "./pages/skills/communication/NonVerbalCommunicationDetails";
// import CDetails from "./pages/skills/c/CDetails";

// const App: React.FC = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/login" element={<Login />} />
//         <Route path="/admin" element={<AdminPage />} />
//         <Route path="/placement-drives/:id" element={<PlacementDrives />} />
//         <Route
//           path="/*"
//           element={
//             <ProtectedRoute>
//               <AppLayout />
//             </ProtectedRoute>
//           }
//         />
//       </Routes>
//     </Router>
//   );
// };

// const AppLayout: React.FC = () => {
//   return (
//     <>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/skills/technical" element={<TechnicalSkills />} />
//         <Route path="/skills/non-technical" element={<NonTechnicalSkills />} />
//         <Route path="/practice" element={<Practice />} />
//         <Route path="/practice/dsa" element={<DSA />} />
//         <Route path="/practice/aptitude" element={<Aptitude />} />
//         <Route path="/placement-drives" element={<PlacementDrives />} />
//         <Route path="/profile" element={<Profile />} />
//         <Route path="/skills/technical/cpp" element={<CppDetails />} />
//         <Route path="/skills/technical/python" element={<PythonDetails />} />
//         <Route path="/skills/technical/java" element={<JavaDetails />} />
//         <Route path="/skills/technical/c" element={<CDetails />} />
//         <Route path="/skills/technical/data-structures" element={<DataStructuresDetails />} />
//         <Route path="/skills/technical/algorithms" element={<AlgorithmsDetails />} />
//         <Route path="/skills/technical/frontend" element={<FrontendDetails />} />
//         <Route path="/skills/technical/backend" element={<BackendDetails />} />
//         <Route path="/skills/non-technical/quantitative-aptitude" element={<QuantitativeAptitudeDetails />} />
//         <Route path="/skills/non-technical/logical-reasoning" element={<LogicalReasoningDetails />} />
//         <Route path="/skills/non-technical/verbal-communication" element={<VerbalCommunicationDetails />} />
//         <Route path="/skills/non-technical/non-verbal-communication" element={<NonVerbalCommunicationDetails />} />
//         <Route path="/mock-interviews" element={<MockInterviews />} />
//         <Route path="/code-editor/:problemId" element={<CodeEditor />} />
//         <Route path="/quiz" element={<Quiz />} />
//       </Routes>
//     </>
//   );
// };

// const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
//   const location = useLocation();

//   useEffect(() => {
//     const token =
//       localStorage.getItem("supabase.auth.token") ||
//       localStorage.getItem("token");
//     setIsAuthenticated(!!token);
//   }, []);

//   if (isAuthenticated === null) return <div>Loading...</div>;
//   if (!isAuthenticated && location.pathname !== "/login") {
//     return <Navigate to="/login" replace state={{ from: location }} />;
//   }
//   if (isAuthenticated && location.pathname === "/login") {
//     return <Navigate to="/" replace />;
//   }

//   return <>{children}</>;
// };

// export default App;


// import React, { useEffect, useState } from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
//   useLocation,
// } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import AdminPage from "./pages/AdminPage";
// import TechnicalSkills from "./pages/skills/TechnicalSkills";
// import NonTechnicalSkills from "./pages/skills/NonTechnicalSkills";
// import Practice from "./pages/Practice";
// import PlacementDrives from "./pages/PlacementDrives";
// import Profile from "./pages/Profile";
// import MockInterviews from "./pages/MockInterviews";
// import CodeEditor from "./pages/CodeEditor";
// import Quiz from "./pages/Quiz";
// import DSA from "./pages/DSA";
// import Aptitude from "./pages/Aptitude";
// import CppDetails from "./pages/skills/cpp/CppDetails";
// import PythonDetails from "./pages/skills/python/PythonDetails";
// import JavaDetails from "./pages/skills/java/JavaDetails";
// import DataStructuresDetails from "./pages/skills/data-structures/DataStructuresDetails";
// import AlgorithmsDetails from "./pages/skills/algorithms/AlgorithmsDetails";
// import FrontendDetails from "./pages/skills/frontend/FrontendDetails";
// import BackendDetails from "./pages/skills/backend/BackendDetails";
// import QuantitativeAptitudeDetails from "./pages/skills/aptitude/QuantitativeAptitudeDetails";
// import LogicalReasoningDetails from "./pages/skills/aptitude/LogicalReasoningDetails";
// import VerbalCommunicationDetails from "./pages/skills/communication/VerbalCommunicationDetails";
// import NonVerbalCommunicationDetails from "./pages/skills/communication/NonVerbalCommunicationDetails";
// import CDetails from "./pages/skills/c/CDetails";

// const App: React.FC = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/login" element={<Login />} />
//         <Route path="/admin" element={<AdminPage />} />
//         <Route path="/placement-drives/:id" element={<PlacementDrives />} />
//         <Route
//           path="/*"
//           element={
//             <ProtectedRoute>
//               <AppLayout />
//             </ProtectedRoute>
//           }
//         />
//       </Routes>
//     </Router>
//   );
// };

// const AppLayout: React.FC = () => {
//   return (
//     <>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/skills/technical" element={<TechnicalSkills />} />
//         <Route path="/skills/non-technical" element={<NonTechnicalSkills />} />
//         <Route path="/practice" element={<Practice />} />
//         <Route path="/practice/dsa" element={<DSA />} />
//         <Route path="/practice/aptitude" element={<Aptitude />} />
//         <Route path="/placement-drives" element={<PlacementDrives />} />
//         <Route path="/profile" element={<Profile />} />
//         <Route path="/skills/technical/cpp" element={<CppDetails />} />
//         <Route path="/skills/technical/python" element={<PythonDetails />} />
//         <Route path="/skills/technical/java" element={<JavaDetails />} />
//         <Route path="/skills/technical/c" element={<CDetails />} />
//         <Route path="/skills/technical/data-structures" element={<DataStructuresDetails />} />
//         <Route path="/skills/technical/algorithms" element={<AlgorithmsDetails />} />
//         <Route path="/skills/technical/frontend" element={<FrontendDetails />} />
//         <Route path="/skills/technical/backend" element={<BackendDetails />} />
//         <Route path="/skills/non-technical/quantitative-aptitude" element={<QuantitativeAptitudeDetails />} />
//         <Route path="/skills/non-technical/logical-reasoning" element={<LogicalReasoningDetails />} />
//         <Route path="/skills/non-technical/verbal-communication" element={<VerbalCommunicationDetails />} />
//         <Route path="/skills/non-technical/non-verbal-communication" element={<NonVerbalCommunicationDetails />} />
//         <Route path="/mock-interviews" element={<MockInterviews />} />
//         <Route path="/code-editor/:problemId" element={<CodeEditor />} />
//         <Route path="/quiz" element={<Quiz />} />
//       </Routes>
//     </>
//   );
// };

// const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
//   const location = useLocation();

//   useEffect(() => {
//     const token =
//       localStorage.getItem("supabase.auth.token") ||
//       localStorage.getItem("token");
//     setIsAuthenticated(!!token);
//   }, []);

//   if (isAuthenticated === null) return <div>Loading...</div>;
//   if (!isAuthenticated && location.pathname !== "/login") {
//     return <Navigate to="/login" replace state={{ from: location }} />;
//   }
//   if (isAuthenticated && location.pathname === "/login") {
//     return <Navigate to="/" replace />;
//   }

//   return <>{children}</>;
// };

// export default App;


import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import AdminPage from './pages/AdminPage';
import TechnicalSkills from './pages/skills/TechnicalSkills';
import NonTechnicalSkills from './pages/skills/NonTechnicalSkills';
import Practice from './pages/Practice';
import PlacementDrives from './pages/PlacementDrives';
import Profile from './pages/Profile';
import MockInterviews from './pages/MockInterviews';
import CodeEditor from './pages/CodeEditor';
import Quiz from './pages/Quiz';
import DSA from './pages/DSA';
import Aptitude from './pages/Aptitude';
import CppDetails from './pages/skills/cpp/CppDetails';
import PythonDetails from './pages/skills/python/PythonDetails';
import JavaDetails from './pages/skills/java/JavaDetails';
import DataStructuresDetails from './pages/skills/data-structures/DataStructuresDetails';
import AlgorithmsDetails from './pages/skills/algorithms/AlgorithmsDetails';
import FrontendDetails from './pages/skills/frontend/FrontendDetails';
import BackendDetails from './pages/skills/backend/BackendDetails';
import QuantitativeAptitudeDetails from './pages/skills/aptitude/QuantitativeAptitudeDetails';
import LogicalReasoningDetails from './pages/skills/aptitude/LogicalReasoningDetails';
import VerbalCommunicationDetails from './pages/skills/communication/VerbalCommunicationDetails';
import NonVerbalCommunicationDetails from './pages/skills/communication/NonVerbalCommunicationDetails';
import CDetails from './pages/skills/c/CDetails';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/placement-drives/:id" element={<PlacementDrives />} />
        <Route
          path="/*"
          element={
            <ProtectedRoute>
              <AppLayout />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

const AppLayout: React.FC = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills/technical" element={<TechnicalSkills />} />
        <Route path="/skills/non-technical" element={<NonTechnicalSkills />} />
        <Route path="/practice" element={<Practice />} />
        <Route path="/practice/dsa" element={<DSA />} />
        <Route path="/practice/aptitude" element={<Aptitude />} />
        <Route path="/placement-drives" element={<PlacementDrives />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/skills/technical/cpp" element={<CppDetails />} />
        <Route path="/skills/technical/python" element={<PythonDetails />} />
        <Route path="/skills/technical/java" element={<JavaDetails />} />
        <Route path="/skills/technical/c" element={<CDetails />} />
        <Route path="/skills/technical/data-structures" element={<DataStructuresDetails />} />
        <Route path="/skills/technical/algorithms" element={<AlgorithmsDetails />} />
        <Route path="/skills/technical/frontend" element={<FrontendDetails />} />
        <Route path="/skills/technical/backend" element={<BackendDetails />} />
        <Route path="/skills/non-technical/quantitative-aptitude" element={<QuantitativeAptitudeDetails />} />
        <Route path="/skills/non-technical/logical-reasoning" element={<LogicalReasoningDetails />} />
        <Route path="/skills/non-technical/verbal-communication" element={<VerbalCommunicationDetails />} />
        <Route path="/skills/non-technical/non-verbal-communication" element={<NonVerbalCommunicationDetails />} />
        <Route path="/mock-interviews" element={<MockInterviews />} />
        <Route path="/code-editor/:problemId" element={<CodeEditor />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/practice/aptitude" element={<Aptitude />} />
      </Routes>
    </>
  );
};

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const location = useLocation();

  useEffect(() => {
    const token =
      localStorage.getItem("supabase.auth.token") ||
      localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []);

  if (isAuthenticated === null) return <div>Loading...</div>;
  if (!isAuthenticated && location.pathname !== "/login") {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }
  if (isAuthenticated && location.pathname === "/login") {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default App;