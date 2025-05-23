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

import Classpage from './components/Classpage';
import Subjectpage from './components/Subjectpage';
import ChapterDetail from './components/Chapterd'; // ✅ fixed import

import Explore from './components/Explore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/auth" element={<Authentication />} />
          <Route path="/dsa" element={<Dsa />} />
          <Route path="/web" element={<Web />} />
          <Route path="/class/:classId/:subject/:slug" element={<ChapterDetail />} />
          <Route path="/explore/:classId/:subject/:slug" element={<ChapterDetail />} />

          <Route path="/class/:classId/:subject" element={<Subjectpage />} />
          <Route path="/class/:classId" element={<Classpage />} />
          <Route path="/class/:classId/explore" element={<Explore />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
