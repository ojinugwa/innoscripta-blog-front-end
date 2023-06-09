import React from 'react';
import TopNav from '../Components/Layout/TopNav';
import Footer from '../Components/Layout/Footer';

function AppLayout({ children }) {
  return (
    <>
      <TopNav />
      <div className='container'>
        {children}
        </div>
      <Footer />
    </>
  );
}

export default AppLayout;