import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactLayout() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateEmail = (email) => {
    // Regex for validating email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    // Example of validation
    if (!name || !email || !message) {
      toast.error('Please fill in all required fields');
      return;
    }

    // Check if email is valid
    if (!validateEmail(email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    // Simulate form submission (you can replace this with an API call)
    setTimeout(() => {
      toast.success('Your message has been sent successfully!');
      setTimeout(() => {
        window.location.reload(); // Refresh the page after success
      }, 1500); // Add a delay to let the toast show before refresh
    }, 1000);
  };

  return (
    <> 
      {/* Toast Container */}
      <ToastContainer />

      {/*?  Contact Area start  */}
      <section className="contact-section">
        <div className="container">
          <div className="d-none d-sm-block mb-5 pb-4"></div>
          <div className="row">
            <div className="col-12">
              <h2 className="contact-title">Get in Touch</h2>
            </div>
            <div className="col-lg-8">
              <form 
                className="form-contact contact_form" 
                onSubmit={handleSubmit} 
                noValidate="novalidate"
              >
                <div className="row">
                  <div className="col-12">
                    <div className="form-group">
                      <textarea 
                        className="form-control w-100" 
                        name="message" 
                        id="message" 
                        cols={30} 
                        rows={9} 
                        onChange={handleChange}
                        placeholder="Enter Message" 
                        value={formData.message}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <input 
                        className="form-control valid" 
                        name="name" 
                        id="name" 
                        type="text" 
                        onChange={handleChange}
                        placeholder="Enter your name" 
                        value={formData.name}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <input 
                        className="form-control valid" 
                        name="email" 
                        id="email" 
                        type="email" 
                        onChange={handleChange}
                        placeholder="Email" 
                        value={formData.email}
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <input 
                        className="form-control" 
                        name="subject" 
                        id="subject" 
                        type="text" 
                        onChange={handleChange}
                        placeholder="Enter Subject" 
                        value={formData.subject}
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group mt-3">
                  <button type="submit" className="button button-contactForm boxed-btn">Send</button>
                </div>
              </form>
            </div>
            <div className="col-lg-3 offset-lg-1">
              <div className="media contact-info">
                <span className="contact-info__icon"><i className="ti-home" /></span>
                <div className="media-body">
                  <h3>Buttonwood, California.</h3>
                  <p>Rosemead, CA 91770</p>
                </div>
              </div>
              <div className="media contact-info">
                <span className="contact-info__icon"><i className="ti-tablet" /></span>
                <div className="media-body">
                  <h3>+1 253 565 2365</h3>
                  <p>Mon to Fri 9am to 6pm</p>
                </div>
              </div>
              <div className="media contact-info">
                <span className="contact-info__icon"><i className="ti-email" /></span>
                <div className="media-body">
                  <h3>support@colorlib.com</h3>
                  <p>Send us your query anytime!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Area End */}
    </>
  );
}
