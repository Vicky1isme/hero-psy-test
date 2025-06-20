'use client';

import MobileFrame from '@/component/layout/MobileFrame'
import Image from 'next/image';
import bgImg from '@/../public/displayR/1.jpg';

export default function DisplayResultPage({nextStep}) {

  return (
    <>
      <MobileFrame>
        <div className='relative min-h-screen w-full flex flex-col justify-center items-center'>
          <Image src={bgImg} alt='display-bg' fill className='object-cover z-0 opacity-20 pointer-events-none' style={{zIndex:0}} />
         
            <div 
              className={` bg-[#89BCFF] w-full rounded-full text-white 
                py-[16px] text-sm flex justify-center items-center font-medium 
                shadow-[0px_4px_0px_1px_#1098EC] cursor-pointer hover:translate-y-0.5 transition`}
              onClick={nextStep}
            > 身分揭曉 </div>
        </div>
      </MobileFrame>
    </>
  );
}
