import React from 'react';

const Footer = () => {
  return (
    <footer className='footer border border-t border-gray-500 border-l-transparent border-r-transparent text-white'>
    <div className='container p-12 flex justify-between'>
      <span>LOGO</span>
      <p className='text-gray-700'>All rights reserved.</p>
      <p className='text-gray-700'>&copy; {new Date().getFullYear()} Kani N</p>
      
    </div>
      {/* <p className='text-gray-700'>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p> */}
    </footer>
  )
}

export default Footer;
