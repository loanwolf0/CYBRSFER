import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import YouTubeIcon from '@mui/icons-material/YouTube';

import './Footer.css'

const Footer = () => {
  return (
    <div>
        <footer className="bg-gray-900 w-100 text-white rounded-lg about-main-container">
            <div className="w-100 m-3 md:m-5 flex flex-col md:flex-row align-middle justify-center md:justify-between p-5  ">
                
                <div className="aboutusFooter w-full md:w-[40%] mb-10  md:ml-10 flex flex-col ">
                    <div className="flex items-center mb-2">
                        <h1 className="border-b-2 border-yellow-200 pb-1 font-bold text-2xl ">About Us</h1>
                    </div>
                    <p className='text-justify' >Welcome to CYBRSFER—where IT education meets empowerment. Offering free internships and training in web, Android, Java, and Python development. Join our LinkedIn community, CYBRSFER, for job updates and industry insights. Elevate your IT journey with quality education, community support, and future-focused initiatives. Your success is our mission</p>
                </div>
                
                <ul className="w-full md:w-[20%] mb-10  md:ml-10">
                    <div className="flex items-center mb-2">
                        <h1 className="border-b-2 border-yellow-200 pb-1 font-bold text-2xl ">Quick Links</h1>
                    </div>
                
                    <li className='mb-2'><a href="/" className="transition duration-300 ease-in-out hover:text-gray-400">Home</a></li>
                    <li className='mb-2'><a href="/" className="transition duration-300 ease-in-out hover:text-gray-400">About Us</a></li>
                    <li className='mb-2'><a href="/" className="transition duration-300 ease-in-out hover:text-gray-400">Services</a></li>
                    <li className='mb-2'><a href="/" className="transition duration-300 ease-in-out hover:text-gray-400">Contact</a></li>
                </ul>

                <div className=" w-full md:w-[20%] mb-10  md:ml-10 ">

                    <div className="flex items-center mb-2">
                        <h1 className="border-b-2 border-yellow-200 pb-1 font-bold text-2xl ">Follow Us</h1>
                    </div>
                    <div className="flex items-center mb-2 ">
                        <InstagramIcon className='mr-2'/>
                        <a href="https://instagram.com/cybrsfer?igshid=NzZlODBkYWE4Ng=="  className="transition duration-300 ease-in-out hover:text-gray-400">Instagram</a>
                    </div>
                    <div className="flex items-center mb-2">
                        <LinkedInIcon className='mr-2'/>
                        <a href="https://www.linkedin.com/company/cybersphereo/"  className="transition duration-300 ease-in-out hover:text-gray-400">LinkedIn</a>
                    </div>
                    <div className="flex items-center mb-2">
                        <EmailIcon className='mr-2'/>
                        <a href="mailto:cybrsfer@gmail.com" class="transition duration-300 ease-in-out hover:text-gray-400">Mail Us</a>
                    </div>
                    <div className="flex items-center">
                        <YouTubeIcon className='mr-2'/>
                        <a href="https://youtube.com/@Cyber-Sphere?si=_tNfodG6alsXY5-t"  className="transition duration-300 ease-in-out hover:text-gray-400">Youtube</a>
                    </div>
                </div>



            </div>

            <div className="disclaimer_footer w-full m-auto mb-5 md:m-5 md:pl-20 md:pr-20 pl-2 pr-2 text-[14px]">
                <p className='pl-5 pr-5 text-justify'> Disclaimer: CYBRSFER is an evolving information and service provider. While we endeavor to provide accurate and up-to-date content, users acknowledge that information may change and should be verified independently. CYBRSFER offers IT solutions and services, aiming for precision and reliability. However, we do not guarantee absolute accuracy. Users are encouraged to verify information for their specific needs. CYBRSFER is not liable for any consequences arising from the use of information or services provided. We reserve the right to modify, update, or discontinue our platform and services at our discretion. Links to third-party websites are provided for convenience and do not imply endorsement.</p>
            </div>

            <hr className='mb-5' />
            <div class="w-full flex align-middle justify-center mt-15 pb-5 items-center  transition duration-300 ease-in-out"> 
                <h1> &copy; 2023 CYBRSFER. All rights reserved. </h1>
            </div>

        </footer>
  
    </div>
  )
}

export default Footer