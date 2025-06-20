'use client';

import MobileFrame from '@/component/layout/MobileFrame';
import { usePsyStore } from '@/app/store/store';
import Image from 'next/image';
import result1 from '@/../public/4.result/result-1.jpg';
import result2 from '@/../public/4.result/result-2.jpg';
import result3 from '@/../public/4.result/result-3.jpg';

export default function ResultPage() {

  const psyState = usePsyStore( (state) => state );


  const playAgain = function(){
    // todo: 重新整理頁面
    window.location.reload();
  }

  return (
    <>
      <MobileFrame>
        <div>
          
          {
            psyState.score < 6 &&
            <>
              <Image src={result1} alt='result1' />
              <div className='text-center text-2xl font-bold text-[#8F5FE8] my-4'>雷神索爾</div>
            </>
          }

          {
            (psyState.score >= 6 && psyState.score < 8) &&
            <>
              <Image src={result2} alt='result2' />
              <div className='text-center text-2xl font-bold text-[#BFA14A] my-4'>綠巨人</div>
            </>
          }

          {
            psyState.score >= 8 &&
            <>
              <Image src={result3} alt='result3' />
              <div className='text-center text-2xl font-bold text-[#7B2235] my-4'>超人</div>
            </>
          }

          <div 
            className={` bg-[#89BCFF] w-full rounded-full text-white 
              py-[16px] text-sm flex justify-center items-center font-medium 
              shadow-[0px_4px_0px_1px_#1098EC] cursor-pointer hover:translate-y-0.5 transition`}
            onClick={playAgain}
          > 再玩一次 </div>
        </div>
      </MobileFrame>
    </>
  );
}
