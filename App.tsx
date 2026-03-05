import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Navbar, Footer } from './layout';
import { Home, CompanyApply } from './pages';

function App() {
  const location = useLocation();
  const isApplyPage = location.pathname.includes('/empresas/aplicar');

  return (
    <div className="min-h-screen bg-background">
      {!isApplyPage && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/empresas/aplicar" element={<CompanyApply />} />
      </Routes>
      {!isApplyPage && <Footer />}
    </div>
  );
}

export default App;
