import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import EarthCanvas from '../assets/canvas/Earth';

export default function ContactUs() {

  return (
    <div className='contact-me'>
      <div className="title">
        <h1><span className="green">Contact Us!!</span></h1>
      </div>
      <div className="contact-body">
        <div className="left">
          <EarthCanvas />
        </div>
        <div className="contact-form">
          <form className='contact-me-form' >
            <div className="part">
              <label htmlFor="subject">Name </label>
              <input type="text" id='subject' placeholder="What' s your name?" name='subject' className='contact-input' />
            </div>
            <div className="part">
              <label htmlFor="subject">Email id </label>
              <input type="text" id='subject' placeholder="What' s your email?" name='subject' className='contact-input' />
            </div>

            <div className="part">
              <label htmlFor="subject">Subject</label>
              <input
                type="text" id='subject' placeholder='What is the Subject?' name='subject' className='contact-input'
              />
            </div>
            <div className="part">
              <label htmlFor="description">Message </label>
              <textarea id='description' placeholder='What do you wanna say?' name='description' className='contact-input'
              />
            </div>
            <button type="submit">
              <FontAwesomeIcon icon={faPaperPlane} />
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
