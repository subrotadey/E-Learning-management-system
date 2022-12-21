import React from 'react';
import { Breadcrumb, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Review from '../Courses/Review';
import './Contact.css'

const Contact = () => {
    return (
        <div className='form-bg'>
            <div className='breadcrumb-style2'>
                <Container className='py-2'>
                <h1 className='px-0'>Contacts</h1>
                <Breadcrumb>
                  <Breadcrumb.Item><Link className='text-white' to="/">Home</Link></Breadcrumb.Item>
                  <Breadcrumb.Item active>contact</Breadcrumb.Item>
                </Breadcrumb>
                </Container>
            </div>
            <div class="contact-style">  
              <form id="contact" action="https://formsubmit.co/el/cehexa" method="POST" className='form-style'>
                <h3>Edulogy Contact Form</h3>
                <h4>Contact us for custom quote</h4>
                <fieldset>
                  <input name='name' placeholder="Your name" type="text" tabindex="1" required autofocus/>
                </fieldset>
                <fieldset>
                  <input name='email' placeholder="Your Email Address" type="email" tabindex="2" required/>
                </fieldset>
                <fieldset>
                  <input name='phone' placeholder="Your Phone Number" type="tel" tabindex="3" required/>
                </fieldset>
                
                <fieldset>
                  <textarea name='message' placeholder="Type your message here...." tabindex="5" required></textarea>
                </fieldset>
                <fieldset>
                  <button name="submit" type="submit" className="contact-submit" data-submit="...Sending">Submit</button>
                </fieldset>
                <p className="copyright">Designed by <a href="https://edulogy.netlify.app" title="edulogy">Edulogy</a></p>
              </form>
            </div>
            <Review></Review>
        </div>
    );
};

export default Contact;