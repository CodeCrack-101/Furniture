import React from "react";
import "./Dial.css"; // Make sure to include the CSS below

const whatsappNumber = "+91 9321282475"; // International format, e.g., 919999999999
const callNumber = "+91 9321282475"; // Same format, e.g., 919999999999

const App = () => (
  <div>
    {/* WhatsApp Floating Button */}
    <a
      href={`https://wa.me/${whatsappNumber}`}
      className="whatsapp_float"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="fa fa-whatsapp whatsapp-icon"></i>
    </a>
    
    {/* Direct Call Button */}
    <a
      href={`tel:${callNumber}`}
      className="call_float"
    >
      <i className="fa fa-phone call-icon"></i>
    </a>
  </div>
);

export default App;
