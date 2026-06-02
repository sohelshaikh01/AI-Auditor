import React from 'react';
import AppIcon from './AppIcon';

const Footer = () => {
  return (
    <div className='flex flex-col items-start py-6 px-8 sm:px-10 bg-black text-white'>
        <div className='flex flex-row space-x-2'>
          <AppIcon size={24} color={"#f59e0b"} />
          <h1 className='font-semibold text-lg'> Ledger.ai</h1>
        </div>
        <div> All right reserved by Credex Organization 2026.</div>
    </div>
  )
}

export default Footer;
