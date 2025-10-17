import React from "react";
import "./Dial.css"; // Make sure to include the CSS below
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const whatsappNumber = "+91 9594718112"; // International format, e.g., 919999999999
const callNumber = "+91 7021384306"; // Same format, e.g., 919999999999

const App = () => (
  <div>
    {/* WhatsApp Floating Button */}
    <a
      href={`https://wa.me/${whatsappNumber}`}
      className="whatsapp_float"
      target="_blank"
      rel="noopener noreferrer"
    >
      <DotLottieReact
          src="/whatsapp.lottie"
          loop
          autoplay
          className="h"
        />
    </a>
    
    {/* Direct Call Button */}
    <a
      href={`tel:${callNumber}`}
      className="call_float"
    >
    <DotLottieReact
          src="/call.lottie"
          loop
          autoplay
          className="h1"
        />    </a>
  </div>
);

export default App;
