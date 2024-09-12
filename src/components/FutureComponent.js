import '../css/Future.css';
import React from 'react';
// import emailjs from 'emailjs-com';
import mail from '../svg/mail.svg';
import phone from '../svg/phone.svg';

export default function Future() {
   
    // const [formData, setFormData] = useState({
    //     name: '',
    //     email: '',
    //     message: '',
    //   });
    
      // const [isSubmitted, setIsSubmitted] = useState(false);
      // const [errorMessage, setErrorMessage] = useState('');
    
      // const handleChange = (e) => {
      //   const { name, value } = e.target;
      //   setFormData({
      //     ...formData,
      //     [name]: value,
      //   });
      // };
    
      // const handleSubmit = (e) => {
      //   e.preventDefault();
    
      //   // Validate form inputs (add any extra validations if necessary)
      //   if (!formData.name || !formData.email || !formData.message) {
      //     setErrorMessage('Please fill out all fields.');
      //     return;
      //   }
    
      //   setErrorMessage('');
    
      //   // Send email using EmailJS
      //   emailjs
      //     .send(
      //       'service_2cf6tri', 
      //       'template_6zp8znw', 
      //       formData,
      //       'be.rightmuk@gmail.com' // Replace with your user ID from EmailJS
      //     )
      //     .then(
      //       (response) => {
      //         console.log('SUCCESS!', response.status, response.text);
      //         setIsSubmitted(true);
      //         setFormData({
      //           name: '',
      //           email: '',
      //           message: '',
      //         });
      //       },
      //       (err) => {
      //         console.error('FAILED...', err);
      //         setErrorMessage('Something went wrong. Please try again later.');
      //       }
      //     );
      // };
    
      return (
        <div className='future'>
            
           <div className='contact'>
           <div className='contact-details'>
                <h1>You never know what the future holds</h1>
            <div className='phone'><img alt="phone" src={phone}></img>+254791670106</div>
            <div className='mail'><img alt="mail" src={mail}></img>brightmukonesi@icloud.com</div>
           
            </div>
        {/* <div className="contact-form">
         
          {isSubmitted ? (
            <p>Thank you! Your message has been sent.</p>
          ) : (
            <form onSubmit={handleSubmit}>
              <div>
             
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                />
              </div>
              <div>
               
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                />
              </div>
              <div>
               
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                />
              </div>
              {errorMessage && <p className="error-message">{errorMessage}</p>}
              <button type="submit">Send Message</button>
            </form>
          )}
        </div> */}
           </div>

        </div>
      );
}