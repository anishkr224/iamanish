import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faSquareXTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';

import '../css/social.css';

function Social() {
  return (
    <div className="social-media-links">
      <a href="https://github.com/anishkr224/" title="Github" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a href="https://www.linkedin.com/in/anishkr224/" title="Linkedin" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a href="https://twitter.com/anishkr224/" title="Twitter" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faSquareXTwitter} />
      </a>
      <a href="https://leetcode.com/u/anishkr224/" title="Leetcode" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faLaptopCode} />
      </a>
      <a href="https://www.instagram.com/anishkr224/" title="Instagram" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
    </div>
  );
}

export default Social;
