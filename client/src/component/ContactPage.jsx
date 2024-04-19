// ContactPage.jsx

import React, { useState } from 'react';
import '../component/Contact.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import GoogleMapsEmbed from './GoogleMapsEmbed';
import { Link } from 'react-router-dom';
import { useAuth } from '../store/auth';
import { toast } from 'react-toastify';

function ContactPage() {
  const ContactFormData = {
    username: '',
    email: '',
    subject: '',  // Added 'subject' property
    message: '',
  };
  const [cuser, setCUser] = useState(ContactFormData);
  const [userData, setUserData] = useState(true);
  const { user } = useAuth();

  if (userData && user) {
    setCUser({
      username: user.username,
      email: user.email,
      subject: '',  // Set to default or provide appropriate value
      message: '',
    });
    setUserData(false);
  }

  const handleinput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setCUser({ ...cuser, [name]: value });
  };

  const handlesubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/form/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cuser),
      });

      if (response.ok) {
        setCUser(ContactFormData);
        const data = await response.json();
        console.log(data);
        toast('Message sent successfully');
      } else {
        console.error('API Error:', response.status, response.statusText);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handlebutton = () => {
    console.log(cuser);
    toast.success('Contact form submitted successfully');
  };

  return (
    <div className="App">
      <div className="back cen">
        <h1 className="down">Contact</h1>
        <div className="down top7">
          <Link to="/">Home/</Link>
          <Link to="/about">page/</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div>
        <div className="cen3">
          <h1 className="cen3">Contact Us</h1>
          <h1 className="cen3">Contact For Any Query</h1>
        </div>
        <div className="alexy">
          <div className="alext margin-left border border-lime-500 p-5">
            <h3>Get In Touch</h3>
            
            <div className='p-3'>
              <h2>
                <i className="fa-solid fa-location-dot"></i>Office
              </h2>
              <p>
                1st floor, Stack Building,<br /> Near Smart Bazar,<br /> New
                Bus Stand, Kasaragod
              </p>
            </div>
            <div className="p-2">
              <h2>
                <i className="fa-solid fa-phone"></i>Mobile
              </h2>
              <p>+91 9946886681</p>
            </div>
            <div className='p-3'>
              <h2>
                <i className="fa-solid fa-envelope"></i>Email
              </h2>
              <p>info@stackcentre.in</p>
            </div>
          </div>
          <div className="ml-10">
            <GoogleMapsEmbed />
          </div>
          <div className="alex8">
            <form action="" className="border" onSubmit={handlesubmit}>
              <div className="gets">
                <input
                  type="text"
                  name="username"
                  placeholder="your name"
                  value={cuser.username}
                  onChange={handleinput}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="your email"
                  value={cuser.email}
                  onChange={handleinput}
                />
                <input
                  type="text"
                  placeholder="subject"
                  name="subject"
                  value={cuser.subject}
                  onChange={handleinput}
                />
                <textarea
                  className="ink  border"
                  style={{borderColor:" #33ff55 "}}
                  name="message"
                  id="message"
                  cols="50"
                  rows="10"
                  placeholder="message"
                  value={cuser.message}
                  onChange={handleinput}
                ></textarea>
                <button className="button" onClick={handlebutton}>
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;

