import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-16">
      <div className="container  px-2">
        <div className='mx-16'>
          <img src="arambh.png" alt="community" className="h-20 w-30" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4">
          <p>Aarambh is a website that provides resources
            and tutorials information for computer science
            and programming enthusiasts, assisting them in
            their learning journey.</p>
        </div>
        <div>
          <div className="flex space-x-4  justify-center px-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 ">Services</h3>
              <ul>
                <li>Sitemap</li>
                <li>Help</li>
                <li>Terms of Services</li>
                <li>Back to top</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Details</h3>
              <ul>
                <li>FAQ</li>
                <li>Feedback</li>
                <li>Terms & Conditions</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 ">Policies</h3>
              <ul>
                <li>Website Policy</li>
                <li>Disclaimer</li>
                <li>Copyright Policy</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center px-8 mt-8 text-xs ">
          <div>
            <p className='sm:inline'>All rights are reserved</p>
            <p className='sm:inline'> by ©conceptial 2023</p>
          </div>
          <div className="flex absolute right-0 mx-16">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="mx-3">
              <img src="githubicon.png" alt="GitHub Logo" className="h-5 w-5 sm:h-10 sm:w-10" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="mx-3">
              <img src="LinkedIn_icon.svg.png" alt="LinkedIn Logo" className="h-5 w-5 sm:h-10 sm:w-10" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
