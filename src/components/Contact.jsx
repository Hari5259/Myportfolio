import React, { useState, useEffect } from 'react';
import GlassCard from './GlassCard';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [cooldown, setCooldown] = useState(0);

  // Check for existing cooldown on mount
  useEffect(() => {
    const lastSubmitTime = localStorage.getItem('lastContactSubmitTime');
    if (lastSubmitTime) {
      const timeDiff = Date.now() - parseInt(lastSubmitTime, 10);
      const secondsLeft = Math.ceil((120000 - timeDiff) / 1000); // 2 minutes cooldown
      if (secondsLeft > 0) {
        setCooldown(secondsLeft);
      }
    }
  }, []);

  // Cooldown countdown effect
  useEffect(() => {
    if (cooldown > 0) {
      const timer = setTimeout(() => {
        setCooldown(prev => prev - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [cooldown]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prevent submitting if cooldown is active
    const lastSubmitTime = localStorage.getItem('lastContactSubmitTime');
    if (lastSubmitTime) {
      const timeDiff = Date.now() - parseInt(lastSubmitTime, 10);
      if (timeDiff < 120000) {
        setCooldown(Math.ceil((120000 - timeDiff) / 1000));
        return;
      }
    }

    setLoading(true);
    
    // Simulate sending email
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
      
      // Save submission time to localStorage
      localStorage.setItem('lastContactSubmitTime', Date.now().toString());
      setCooldown(120); // 2 minute cooldown
      
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="contact-section container">
      <h2 className="section-title">Get In Touch</h2>
      
      <div className="contact-grid">
        <div className="contact-info-side">
          <GlassCard className="info-card">
            <h3 className="info-title">Let's Connect</h3>
            <p className="info-desc">
              Have an exciting project idea, internship opportunity, or just want to say hi? 
              Feel free to reach out via the form or through my contact channels.
            </p>

            <div className="contact-methods">
              <a href="mailto:shariharasudhan@gmail.com" className="method-item">
                <div className="method-icon"><Mail size={20} /></div>
                <div className="method-details">
                  <span className="method-label">Email</span>
                  <span className="method-val">shariharasudhan@gmail.com</span>
                </div>
              </a>

              <a href="tel:+919003421746" className="method-item">
                <div className="method-icon"><Phone size={20} /></div>
                <div className="method-details">
                  <span className="method-label">Phone</span>
                  <span className="method-val">+91 9003 421746</span>
                </div>
              </a>

              <div className="method-item">
                <div className="method-icon"><MapPin size={20} /></div>
                <div className="method-details">
                  <span className="method-label">Location</span>
                  <span className="method-val">Coimbatore, Tamil Nadu, India</span>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>

        <div className="contact-form-side">
          <GlassCard className="form-card">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-header">
                <MessageSquare size={20} className="form-header-icon" />
                <h3>Send a Message</h3>
              </div>

              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  disabled={cooldown > 0}
                  placeholder={cooldown > 0 ? "Form locked" : "Your Name"}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  disabled={cooldown > 0}
                  placeholder={cooldown > 0 ? "Form locked" : "name@example.com"}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  disabled={cooldown > 0}
                  placeholder={cooldown > 0 ? "Form locked" : "Tell me about your project..."}
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="submit-btn" 
                disabled={loading || cooldown > 0}
              >
                {loading ? 'Sending...' : cooldown > 0 ? 'Locked' : 'Send Message'}
                <Send size={16} className="btn-icon" />
              </button>

              {submitted && (
                <div className="success-toast">
                  Message sent successfully! I will get back to you shortly.
                </div>
              )}

              {cooldown > 0 && (
                <div className="cooldown-toast">
                  To avoid spam, please wait {cooldown}s before sending another message.
                </div>
              )}
            </form>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};

export default Contact;
