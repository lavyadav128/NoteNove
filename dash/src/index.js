
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css';

import Home from "./components/Home";
import Dsa from './components/Algorithms/Dsa';
import DtopicPage from './components/Algorithms/dtopic'; // Practice Page Component
import DpractisePage from './components/Algorithms/dpractise';



import Revision from './components/Revision/concept'; // Revision Page Component
import College from './components/College/Top'; // College Page Component


import Web from './components/Developments/Web';
import WtopicPage from './components/Developments/wtopic'; // Practice Page Component
import WpractisePage from './components/Developments/wpractise';



import Authentication from './components/authentication';
import { AuthProvider } from './contexts/AuthContext';
import LandingPage from './components/landing';
import MentorshipPage from './components/Batches/mentorship'; // adjust the path as needed




import Classpage from './components/Batches/Classpage';
// import PremiumClassPage from './components/PremiumClassPage';
import Subjectpage from './components/Batches/Subjectpage';
import ChapterDetail from './components/Batches/Chapterd'; // Chapter Detail Page
import Explore from './components/Batches/Explore';
import ChatBot from './components/chatbot';

// ➕ New Components for Test Series and PYQ
import TestSeries from './components/Batches/TestSeries';
import PYQSeries from './components/Batches/PYQSeries';
import TestAttemptPage from "./components/Batches/testattempt";





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
            <Route path="/dtopic" element={<DtopicPage />} />
            <Route path="/dpractice/:topicId" element={<DpractisePage />} />


            
            {/* Deveopment Details */}
            <Route path="/web" element={<Web />} />
            <Route path="/wtopic" element={<WtopicPage />} />
            <Route path="/wpractice/:topicId" element={<WpractisePage />} />


            {/* Revision Details */}
            <Route path="/revision/:classId/:subject/:chapterSlug" element={<Revision />} />


            {/* College Page */}
            <Route path="/college/:classId/:subject/:chapterSlug" element={<College />} />



            {/* Chapter Details */}
            <Route path="/class/:classId/:subject/:slug" element={<ChapterDetail />} />
            <Route path="/explore/:classId/:subject/:slug" element={<ChapterDetail />} />
            <Route path="/premium/class/:classId/:subject/:slug" element={<ChapterDetail />} />
            


            {/* Subject Page */}
            <Route path="/class/:classId/:subject" element={<Subjectpage />} />
            <Route path="/premium/class/:classId/:subject" element={<Subjectpage />} />
            <Route path="/revision/class/:classId/:subject" element={<Subjectpage />} />
            <Route path="/college/class/:classId/:subject" element={<Subjectpage />} />  {/* ✅ New route */}



            {/* Class Page */}
            <Route path="/class/:classId" element={<Classpage />} />
            <Route path="/premium/class/:classId" element={<Classpage />} />
            <Route path="/revision/class/:classId" element={<Classpage />} />  {/* ✅ New route */}
            <Route path="/college/class/:classId" element={<Classpage />} />  {/* ✅ New route */}



            {/* Explore Page */}
            <Route path="/class/:classId/explore" element={<Explore />} />
            <Route path="/premium/class/:classId/explore" element={<Explore />} />
            <Route path="/revision/class/:classId/explore" element={<Explore />} />
            <Route path="/college/class/:classId/explore" element={<Explore />} />  {/* ✅ New route */}


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
