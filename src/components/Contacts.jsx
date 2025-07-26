import React from 'react';
import "../css/contacts.css";

function Contacts() {
  return (
    <div className="center-content">
      <div className="contact-item">
        <div className="contacts">
        <img src="/img/logo/phone.png" className="contact-icon" alt="Phone"/>
        </div>
        <div className="contact">+91-8210728491</div>
      </div>
      
      <div className="contact-item">
        <hr style={{ border: "1px solid ", margin: "20px 0px" }} />
        <div className="contacts mail">
       <img src="/img/logo/mail.png" className="contact-icon" alt="Mail" />
        </div>
        <div className="contact">anishkumar3967@gmail.com</div>
      </div>
    </div>
  );
}

export default Contacts;
