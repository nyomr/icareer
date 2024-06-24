"use client";
import Link from 'next/link';
import React from 'react';
import Button from './Button';

function Navbar() {
  return (
    <nav className="navbar-class flex-initial">
        <div className="flex justify-between items-center px-20 my-3">
            <Link href={'/'}>
              <div className="text-white font-inter">iCareer</div>
            </Link>
            
            <div className="hidden md:flex space-x-7">
              <Link href={'/about'} className="link">
                About
              </Link>
              <Link href={'/app'} className="button-link">
                <Button text="Launch App" style={{padding: '10px 20px', backgroundColor: 'blue', color: 'white', border: 'none', borderRadius: '5px'}}>
                </Button>
              </Link>
            </div>
        </div>
    </nav>
  )
}


export default Navbar