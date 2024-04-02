import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

export default function Contacts({ contactTargetRef }) {
   const form = useRef();
   const sendEmail = (e) => {
      e.preventDefault();

      emailjs
         .sendForm('service_al5wxgo', 'template_jgg11eh', form.current, {
            publicKey: 'hmnxzyScZbhcSjx_y',
         })
         .then(
            () => {
               console.log('SUCCESS!');
            },
            (error) => {
               console.log('FAILED...', error.text);
            },
         );
   };
   return (

      <div className="container-fluid d-flex flex-column justify-content-evenly align-items-center skills gap-4" style={{ minHeight: '40vh' }}>
         <div ref={contactTargetRef} className='row col-xl-12 text-center'  >
            <motion.h1

               className="fs-2 mt-5 py-5"
               initial={{ rotateY: -180 }}
               whileInView={{ rotateY: 0, transition: { duration: 0.7 } }}
            >Contacts</motion.h1>
         </div>
         <p className=' fs-4 col-xl-6 justify-content-center'>
            Send me an emial to discuss cool projects or potential job opportunities! I will get back to you ASAP.
         </p>
         <form className='col-xl-6 col-lg-6 shadow p-4 mb-5 d-flex flex-column gap-2' ref={form} onSubmit={sendEmail}>
            <div className="mb-3">
               <label htmlFor="user_name" className="form-label">Name</label>
               <input type="text" className="form-control" id="user_name" name="user_name" required />
            </div>
            <div className="mb-3">
               <label htmlFor="user_email" className="form-label">Email</label>
               <input type="email" className="form-control" id="user_email" name="user_email" required />
            </div>
            <div className="mb-3">
               <label htmlFor="message" className="form-label">Message</label>
               <textarea className="form-control" id="message" name="message" rows="15" required></textarea>
            </div>
            <div className='row justify-content-center'>
               <button type="submit" className="btn btn-secondary col-lg-3">Send</button>
            </div>
         </form>
      </div>
   );
}
