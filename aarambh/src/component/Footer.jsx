import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="mb-8">
            <div className="flex space-x-4">
              <img src="aarambh.png" alt="community" className="h-24 w-30" />
            </div>
            {/* I have added some margin and padding to the paragraph element to create more space and balance */}
            <p className="m-4 p-4">Aarambh is a website that provides resources and tutorials information for computer science and programming enthusiasts, assisting them in their learning journey.</p>
          </div>
          <div className="mb-8">
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul>
              <li>Sitemap</li>
              <li>Help</li>
              <li>Terms of Services</li>
              <li>Back to top</li>
            </ul>
          </div>
          <div className="mb-8">
            <h4 className="text-lg font-semibold mb-4">Details</h4>
            <ul>
              <li>FAQ</li>
              <li>Feedback</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
          <div className="mb-8">
            <h4 className="text-lg font-semibold mb-4">Policies</h4>
            <ul>
              <li>Website Policy</li>
              <li>Disclaimer</li>
              <li>Copyright Policy</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
        <div className="flex justify-between items-center mt-8">
          <p>All rights are reserved by ©conceptial 2023</p>
          <div className="flex space-x-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <img src="/path/to/github-logo.png" alt="GitHub Logo" className="h-6 w-6" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src="/path/to/linkedin-logo.png" alt="LinkedIn Logo" className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
