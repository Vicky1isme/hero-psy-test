'use client';

import MobileFrame from '@/component/layout/MobileFrame';
import Image from 'next/image';
import startBtn from '@/../public/0.start/startBtn.png';
import bgImg from '@/../public/0.start/6.jpg';

export default function StartPage({nextStep}) {

  return (
    <>
      <MobileFrame>
        <div className='relative w-full h-full flex flex-col items-center gap-[60px]'>
          <Image src={bgImg} alt='background' fill className='object-cover z-0 opacity-20 pointer-events-none' style={{zIndex:0}} />
          <div className='text-4xl font-extrabold text-center text-[#E53935] mt-4 mb-2'>你是哪位超級英雄？</div>
          <div className='relative z-10 bg-white/70 rounded-xl px-8 py-2 text-[#B95F0F] font-bold text-center text-[18px] leading-loose tracking-wide'>
           
            每個人心中都住著一位英雄，有的勇敢無畏，有的聰明機智，有的神秘莫測。<br/>
            在這個世界裡，你會是哪一位超級英雄？<br/>
            
          </div>
          <Image onClick={nextStep} className='w-[160px]' src={startBtn} alt='startBtn' />
        </div>
      </MobileFrame>
    </>
  );
}
