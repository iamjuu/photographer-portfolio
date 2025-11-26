import React from 'react';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <section className="contact section" id="contact">
      <span className="section__subtitle">Get in touch</span>
      <h3 className="section__title">Contact Me</h3>

      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title contact__title-info">Talk to me</h3>

          <div className="contact__info">
            <div className="contact__card">
              <i className='bx bx-mail-send contact__card-icon'></i>
              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">abdhulRazikmunner@gmail.com</span>

              <a href="mailto:example@domain.com" target="_blank" rel="noreferrer" className="contact__button">
                Write Me <i className='bx bx-right-arrow contact__button-icon'></i>
              </a>
            </div>

            <div className="contact__card">
              <i className='bx bxl-whatsapp contact__card-icon'></i>
              <h3 className="contact__card-title">Whatsapp</h3>
              <span className="contact__card-data">8590957849</span>

              <a href="https://api.whatsapp.com/send?phone=+916969696969&text=Hey there!" target="_blank" rel="noreferrer" className="contact__button">
                Write Me <i className='bx bx-right-arrow contact__button-icon'></i>
              </a>
            </div>

            <div className="contact__card">
              <i className='bx bxl-twitter contact__card-icon'></i>
              <h3 className="contact__card-title">Twitter</h3>
              <span className="contact__card-data">usertw</span>

              <a href="https://twitter.com/usertw" target="_blank" rel="noreferrer" className="contact__button">
                Write Me <i className='bx bx-right-arrow contact__button-icon'></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact__content">
          <h3 className="contact__title contact__title-form">Write Me your Message</h3>

          <form onSubmit={handleSubmit} className="contact__form">
            <div className="contact__form-div">
              <label htmlFor="name" className="contact__form-tag">Name</label>
              <input type="text" id="name" placeholder="Enter name" className="contact__form-input" />
            </div>

            <div className="contact__form-div">
              <label htmlFor="email" className="contact__form-tag">Mail</label>
              <input type="email" id="email" placeholder="Enter email" className="contact__form-input" />
            </div>

            <div className="contact__form-div contact__form-area">
              <label htmlFor="message" className="contact__form-tag">Message</label>
              <textarea 
                name="message" 
                id="message" 
                cols="30" 
                rows="10" 
                placeholder="Write your Message"
                className="contact__form-input"
              ></textarea>
            </div>

            <button type="submit" className="button">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

