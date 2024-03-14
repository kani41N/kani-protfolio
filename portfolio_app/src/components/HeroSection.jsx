import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
// import html2canvas from 'html2canvas';
// import jsPDF from 'jspdf';

function HeroSection() {
 
  // const pdfRef = useRef(null); // Create a ref using useRef

  // const generatePDF = () => {
  //   if (!pdfRef.current) return; // Check if the ref is available

  //   html2canvas(pdfRef.current) // Use pdfRef.current to access the DOM element
  //     .then((canvas) => {
  //       const imgData = canvas.toDataURL('image/png');
  //       const pdf = new jsPDF();
  //       pdf.addImage(imgData, 'PNG', 0, 0);
  //       pdf.save('resume.pdf');
  //     })
  //     .catch((error) => {
  //       console.error('Error generating PDF:', error);
  //     });
  // };

  return (
    <section className='lg:py-16'>
      <div className='grid grid-cols-1 sm:grid-cols-12'>
        <motion.div
         initial={{ opacity: 0, scale: 0.5 }}
         animate={{ opacity: 1, scale: 1 }}
         transition={{ duration: 0.5 }}
          className='col-span-8 place-self-center text-center sm:text-left justify-self-start'
        >
          <h1 className='text-white mb-4 text-4xl lg:text-8xl lg:leading-normal font-extrabold'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-400 to-pink-500 '>Hello, I'm {""}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                'Kani',
                1000,
                'Web Developer',
                1000,
                'UI Designer',
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className='text-pink-500 mb-6 text-base sm:text-lg lg:text-xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, cum.</p>
          <div>
            <button className='px-6 py-3 rounded-full mr-4 w-full sm:w-fit bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-400 text-white'>Hire Me</button>
            {/* <div id="resume-content" pdf={pdfRef}>
        <h1>Hello, World!</h1>
        <p>This is a sample resume content.</p>
      </div> */}
            <button className='px-1 py-1 rounded-full mt-3 w-full sm:w-fit  bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 bg-transparent'>
              <span className='block bg-[#121212] hover:bg-slate-800 px-5 py-2 rounded-full'>Download CV</span>
            </button>
          </div>
        </motion.div>
        <motion.div 
         initial={{ opacity: 0, scale: 0.5 }}
         animate={{ opacity: 1, scale: 1 }}
         transition={{ duration: 0.5 }}
         className='col-span-4 place-self-center mt-4 lg:mt-0'
        >
          <div className='rounded-full overflow-hidden bg-[#181818] h-[250px] w-[250px] lg:h-[400px] lg:w-[400px] relative'>
            <img
              src="icons/2d.png"
              alt="Developer and Designer"
              className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-full max-h-full w-auto h-auto'
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
