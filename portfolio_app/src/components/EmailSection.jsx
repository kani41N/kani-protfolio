import React, { useState} from 'react';
// import GithubIcon from "../public/icons/github-icon.svg";
// import LinkedinIcon from "../public/icons/linkedin-icon.svg";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value,
        }
        const JSONdata = JSON.stringify(data);
        const endpoint  = 'api/send';   
        
        const options = {
            method: 'POST',
            Headers: {
                'Contact-Type': 'appliction/json',
            },
            body: JSONdata,
        };

         const response = await fetch(endpoint, options); 
         const resData = await response.json();
         

         if (response.status === 200) {
          console.log('Message sent.');
          setEmailSubmitted(true);
         }
      }
  return (
    <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative'>
        <div>
        <h5 className='text-xl font-bold text-white my-2'>Let's connect</h5>
        <p className='text-gray-300 mb-4 max-w-md'>
            {""}
             I'm currectly looking for new opportunities, my inbox is always open.
             Whether you have a question or just want to say hi, I'll try my best
             to get back to you!
        </p>
        <div className='socials flex flex-row gap-2'>
            <a href='github.com'>
               < FaGithub size={40}/>
            </a>
            <a href="linkedin.com">
                <FaLinkedin size={40} />
            </a>
        </div>
      </div>

      <div>
        <form className='flex flex-col' onSubmit={handleSubmit}>
          <div className='mb-6'>
          <label htmlFor='email' className='text-white block text-sm font-medium mb-2'>
            Your email
          </label>
          <input 
           name='email'
           type='email' 
           id='email' 
           required 
           className='bg-[#18191e] border border-gray-800 placeholder:gray-500 text-gray-100 text-sm rounded-lg block w-full p-2.5'
           placeholder='abc123@gmail.com'
          />
        </div>

         <div className='mb-6'>
         <label htmlFor='subject' className='text-white block text-sm font-medium mb-2'>
            Subject
          </label>
          <input 
           name='subject'
           type='text' 
           id='subject' 
           required 
           className='bg-[#18191e] border border-gray-800 placeholder:gray-500 text-gray-100 text-sm rounded-lg block w-full p-2.5'
           placeholder='Just saying hi'
          />
         </div>

         <div className='mb-6'>
         <label htmlFor='message' className='text-white block text-sm font-medium mb-2'>
            Message
          </label>
          <textarea 
           name='message' 
           id='message' 
           required 
           className='bg-[#18191e] border border-gray-800 placeholder:gray-500 text-gray-100 text-sm rounded-lg block w-full p-2.5'
           placeholder="Let's talk about..."
          />
         </div>
         
         <button 
           type='submit'
           className='bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full'>
           Send Message     
         </button>
         {

          emailSubmitted && (
            <p className='text-green-500 text-sm mt-2'>
              Email send successfully!
            </p>
          )
         }

        </form>
      </div>
    </section>
  )
}

export default EmailSection;
