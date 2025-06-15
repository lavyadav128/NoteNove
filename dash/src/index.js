// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import './index.css';
// import Home from "./components/Home";
// import Dsa from './components/Dsa';
// import Web from './components/Web';

// import Authentication from './components/authentication';
// import { AuthProvider } from './contexts/AuthContext';
// import LandingPage from './components/landing';

// import Classpage from './components/Classpage';
// import Subjectpage from './components/Subjectpage';
// import ChapterDetail from './components/Chapterd'; // ✅ fixed import

// import Explore from './components/Explore';
// import ChatBot from './components/chatbot'

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <AuthProvider>
//       <>
//           <Routes>
//             <Route path="/" element={<LandingPage />} />
//             <Route path="/auth" element={<Authentication />} />
//             <Route path="/dsa" element={<Dsa />} />
//             <Route path="/web" element={<Web />} />
//             <Route path="/class/:classId/:subject/:slug" element={<ChapterDetail />} />
//             <Route path="/explore/:classId/:subject/:slug" element={<ChapterDetail />} />
//             <Route path="/class/:classId/:subject" element={<Subjectpage />} />
//             <Route path="/class/:classId" element={<Classpage />} />
//             <Route path="/class/:classId/explore" element={<Explore />} />
//             <Route path="*" element={<Home />} />
//           </Routes>

//           {/* 👇 Add the chatbot so it shows on all pages */}
//           <ChatBot />
//         </>
        
//       </AuthProvider>
//     </BrowserRouter>
//   </React.StrictMode>
// );




import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css';

import Home from "./components/Home";
import Dsa from './components/Dsa';
import Web from './components/Web';
import Authentication from './components/authentication';
import { AuthProvider } from './contexts/AuthContext';
import LandingPage from './components/landing';
import MentorshipPage from './components/mentorship'; // adjust the path as needed




import Classpage from './components/Classpage';
// import PremiumClassPage from './components/PremiumClassPage';
import Subjectpage from './components/Subjectpage';
import ChapterDetail from './components/Chapterd'; // Chapter Detail Page
import Explore from './components/Explore';
import ChatBot from './components/chatbot';

// ➕ New Components for Test Series and PYQ
import TestSeries from './components/TestSeries';
import PYQSeries from './components/PYQSeries';
import TestAttemptPage from "./components/testattempt";





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/auth" element={<Authentication />} />
            <Route path="/dsa" element={<Dsa />} />
            <Route path="/web" element={<Web />} />


            {/* Chapter Details */}
            <Route path="/class/:classId/:subject/:slug" element={<ChapterDetail />} />
            <Route path="/explore/:classId/:subject/:slug" element={<ChapterDetail />} />
            <Route path="/premium/class/:classId/:subject/:slug" element={<ChapterDetail />} />


            {/* Subject Page */}
            <Route path="/class/:classId/:subject" element={<Subjectpage />} />
            <Route path="/premium/class/:classId/:subject" element={<Subjectpage />} />


            {/* Class Page */}
            <Route path="/class/:classId" element={<Classpage />} />
            <Route path="/premium/class/:classId" element={<Classpage />} />


            {/* Explore Page */}
            <Route path="/class/:classId/explore" element={<Explore />} />
            <Route path="/premium/class/:classId/explore" element={<Explore />} />


            {/* Test Series Pages */}
            <Route path="/premium/class/:classId/test" element={<TestSeries />} />
            <Route path="/attempt-test" element={<TestAttemptPage />} />




            {/* PYQ Series Pages */}
            <Route path="/premium/class/:classId/pyq" element={<PYQSeries />} />


            <Route path="premium/class/:classId/mentorship" element={<MentorshipPage />} />


            {/* Fallback route */}
            <Route path="*" element={<Home />} />
          </Routes>

          {/* ChatBot on all pages */}
          <ChatBot />
        </>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
