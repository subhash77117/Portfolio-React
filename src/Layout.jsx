import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackToTopButton from './components/BackToTopAndWhatsapp';
import ScrollToTop from './components/ScrollToTop';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden bg-black text-white">
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow px-4 sm:px-6 md:px-10">
        <Outlet />
      </main>

      <Footer />

      {/* Utility Components */}
      <BackToTopButton />
      <ScrollToTop />
    </div>
  );
};

export default Layout;
