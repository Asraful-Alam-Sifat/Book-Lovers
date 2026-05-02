import React from 'react';
import facebookLogo from '@/assets/Logo/facebook.png';
import twitterLogo from '@/assets/Logo/twitter.png';
import instagramLogo from '@/assets/Logo/instagram.png';
import Image from 'next/image';
import { Globe, Mailbox, Phone } from 'lucide-react';

const Footer = () => {
    return (
        <div className='bg-blue-900'>
            <div className='container mx-auto py-10 px-3'>

                <div className='sm:flex sm:justify-between px-10 space-y-10'>
                    <div>
                    <h1 className='text-white text-center font-semibold text-3xl uppercase'>follow us</h1>
                    <div className='flex justify-around mt-5'>
                        <Image src={facebookLogo} alt="Facebook" className='w-10 h-10' />
                        <Image src={twitterLogo} alt="Twitter" className='w-10 h-10' />
                        <Image src={instagramLogo} alt="Instagram" className='w-10 h-10' />
                    </div>
                </div>

                <div>
                    <h1 className='text-white uppercase font-semibold text-3xl'>contact us</h1>
                    <div className='space-y-3 font-medium text-base opacity-90 mt-4 ml-3'>
                        <div className='flex gap-3'>
                          <Phone size={25} className='text-white'  />
                          <p className='text-white'>+1 (123) 456-7890</p>
                        </div>
                        <div className='flex gap-3'>
                          <Mailbox size={25} className='text-white'  />
                          <p className='text-white'>info@bookslovers.com</p>
                        </div>
                        <div className='flex gap-3'>
                          <Globe size={25} className='text-white' />
                          <p className='text-white'>www.bookslovers.com</p>
                        </div>
                    </div>
                </div>
                </div>
<hr className='text-white opacity-30 my-8'/>
                <div className="flex justify-between text-white">
        <p className="font-normal opacity-50">
          <small>&copy; 2026 BooksLovers. All rights reserved.</small>
        </p>
        <div className="flex gap-2 sm:gap-4">
          <p className="font-normal opacity-50">
            <small>Privacy Policy</small>
          </p>
          <p className="font-normal opacity-50">
            <small>Terms of Service </small>
          </p>
          <p className="font-normal opacity-50">
            <small>Coolies</small>
          </p>
        </div>
      </div>
            </div>
        </div>
    );
};

export default Footer;