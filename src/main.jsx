import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout.jsx';
import Home from './App.jsx';
import ProjectOverview from './ProjectOverview.jsx';
import Introduction from './Introduction.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="project-overview" element={<ProjectOverview />} />
          <Route path="introduction" element={<Introduction />} />
          <Route path="*" element={<div>404 — Not Found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
