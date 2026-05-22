import { RellaxWrapper } from 'react-rellax-wrapper'
import { gitHubLink, linkedInLink, instaLink, emailAddress, emailAddress2 } from '../../Content/variable'
import { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';

import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import shape2 from '../../Images/shape2.png'
import './contact.scss'



const ContactSection = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')
  const [mssg, setMssg] = useState('')

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      form.current,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    )
      .then(() => {
        toast.success('Email Sent Successfully!', { theme: 'dark' });

        setName('');
        setEmail('');
        setNumber('');
        setMssg('');
      })
      .catch((error) => {
        console.error("EmailJS Error:", error); // Logs the exact error to console
        toast.error('Uh Oh! Some error occurred', { theme: 'dark' });
      });
  };

  return (
    <section id='contact' className='contact_section'>
      <RellaxWrapper speed={0.5} zIndex={-1}><img className='img_shape img_shape_4' src={shape2} alt='shape 3' /></RellaxWrapper>
      <div className='content_col'>
        <RellaxWrapper speed={0} zIndex={0}>
          <div>
            <h1 className='heading'>GET IN TOUCH</h1>
            <p className='para'>Feel free to connect with me :)</p>

            <div className='contact_info_item'>
              <FontAwesomeIcon icon={faMapMarkerAlt} size="lg" color="#333" />
              <span>Ashuganj-3402, Brahmanbaria, Chattagram</span>
            </div>
            <div className='contact_info_item'>
              <FontAwesomeIcon icon={faPhoneAlt} size="lg" color="#333" />
              <span>+8801873917876</span>
            </div>
            <div className='contact_info_item'>
              <FontAwesomeIcon icon={faEnvelope} size="lg" color="#333" />
              <span>{emailAddress} <br />{emailAddress2}</span>
            </div>
          </div>
          <div className='social_icons'>
            <a href={gitHubLink} target="_blank" rel="noreferrer"><i className="fab fa-github-square"></i></a>
            <a href={linkedInLink} target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
            <a href={instaLink} target="_blank" rel="noreferrer"><i className="fab fa-facebook-square"></i></a>
            <a href="https://wa.me/8801873917876" target="_blank" rel="noreferrer"><i className="fab fa-whatsapp-square"></i></a>
          </div>
        </RellaxWrapper>
      </div>
      <div className='form_col'>
        <form onSubmit={sendEmail} ref={form}>
          <input name="user_name" value={name} onChange={e => setName(e.target.value)} type="text" placeholder="Enter your name" />
          <input name="user_email" value={email} onChange={e => setEmail(e.target.value)} type="text" placeholder="Enter your email" />
          <input name="user_number" value={number} onChange={e => setNumber(e.target.value)} type="text" placeholder="Enter your phone number" />
          <textarea name="user_message" value={mssg} onChange={e => setMssg(e.target.value)} rows="4" placeholder="Enter message"></textarea>
          <button type="submit" disabled={name === '' || email === '' || number === '' || mssg === ''}>Submit</button>
        </form>
      </div>
      <ToastContainer position="bottom-right" autoClose={5000} hideProgressBar />
    </section>
  )
}

export default ContactSection