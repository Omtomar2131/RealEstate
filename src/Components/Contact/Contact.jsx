import './Contact.css';

const Contact = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        
        {/* Left Section */}
        <div className="c-left">
          <span className="primarytext">Our Contact Us</span> {/* Adjusted heading */}
          <span className="bluetext">Easy to contact us</span>
          <span className="secondaryText">
            We are always ready to help by providing the best services for you.
            We believe a good place to live can make your life better.
          </span>
          
          {/* Contact Options Section */}
          <div className="contact-options">
            
            {/* Call Option */}
            <div className="contact-option">
              <div className="contact1">
                <span className="icon">📞</span>
                <div className='head2'>
                  <span className='head'>Call</span>
                  <span className="contact-number">021 123 145 14</span>
                </div>
              </div>
              <button className="contact-button">Call now</button>
            </div>

            {/* Chat Option */}
            <div className="contact-option">
              <div className="contact1">
                <span className="icon">💬</span>
                <div className='head2'>
                  <span className='head'>Chat</span>
                  <span className="contact-number">021 123 145 14</span>
                </div>
              </div>
              <button className="contact-button">Chat now</button>
            </div>

            {/* Video Call Option */}
            <div className="contact-option">
              <div className="contact1">
                <span className="icon">📹</span>
                <div className='head2'>
                  <span className='head'>Video Call</span>
                  <span className="contact-number">021 123 145 14</span>
                </div>
              </div>
              <button className="contact-button">Video Call now</button>
            </div>

            {/* Message Option */}
            <div className="contact-option">
              <div className="contact1">
                <span className="icon">✉️</span>
                <div className='head2'>
                  <span className='head'>Message</span>
                  <span className="contact-number">021 123 145 14</span>
                </div>
              </div>
              <button className="contact-button">Message now</button>
            </div>

          </div>
        </div>

        {/* Right Section */}
        <div className="c-right">
          <div className="image-container">
            <img src="/contact.jpg" alt="contact" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
