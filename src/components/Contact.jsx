import React from 'react';
import Title from './Title';
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';

function Contact() {

   const [isEmailSent, setIsEmailSent] = useState(false)
   const successCardClasses = `absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
     bg-[#5cb85c] text-[#fffd] shadow-md p-4 rounded-md ${isEmailSent ? 'block' : 'hidden'}`;

   const form = useRef()
   const sendEmail = (e) => {
      e.preventDefault();

      emailjs.sendForm('service_32exiop', 'template_bg2ihjb', form.current, 'WQ7dx-cNA7-X1yHDG')
         .then((result) => {
            console.log(result.text);
            setIsEmailSent(true)
            setTimeout(() => {
               setIsEmailSent(false)
            }, 3000)
         }, (error) => {
            console.log(error.text);
         });
      e.target.reset()
   };


   return (
      <div className="flex flex-col mb-10 mx-auto">
         <div className="flex justify-center items-center relative">
            <form
               ref={form}
               onSubmit={sendEmail}
               className="flex flex-col w-full md:w-7/12"
            >
               <Title>Contact</Title>
               <input
                  type="text"
                  name="user_name"
                  placeholder="Name"
                  required
                  className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
               />
               <input
                  type="email"
                  name="user_email"
                  placeholder="Email"
                  required
                  className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none"
               />
               <textarea
                  name="message"
                  placeholder="Message"

                  rows="5"
                  className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none"
               />
               <button
                  type="submit"
                  className="text-center  inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-blue-700 to-blue-900 drop-shadow-md hover:stroke-white"
               >
                  Work With Me
               </button>
            </form>
            {
               isEmailSent &&
               <div className={successCardClasses}>
                  <p>Email sent successfully!</p>
                  {/* You can add any additional content you want to display upon success */}
               </div>
            }
         </div>
      </div>
   )
}

export default Contact;