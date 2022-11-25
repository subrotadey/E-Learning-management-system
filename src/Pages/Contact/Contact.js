import React from 'react';
import { Breadcrumb, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
              <form id="contact" action="" method="post" className='form-style'>
                <h3>Edulogy Contact Form</h3>
                <h4>Contact us for custom quote</h4>
                <fieldset>
                  <input placeholder="Your name" type="text" tabindex="1" required autofocus/>
                </fieldset>
                <fieldset>
                  <input placeholder="Your Email Address" type="email" tabindex="2" required/>
                </fieldset>
                <fieldset>
                  <input placeholder="Your Phone Number (optional)" type="tel" tabindex="3" required/>
                </fieldset>
                <fieldset>
                  <input placeholder="Your Web Site (optional)" type="url" tabindex="4" required/>
                </fieldset>
                <fieldset>
                  <textarea placeholder="Type your message here...." tabindex="5" required></textarea>
                </fieldset>
                <fieldset>
                  <button name="submit" type="submit" className="contact-submit" data-submit="...Sending">Submit</button>
                </fieldset>
                <p className="copyright">Designed by <a href="https://edulogy.netlify.app" target="_blank" title="edulogy">Edulogy</a></p>
              </form>
            </div>
        </div>
    );
};

export default Contact;