'use client';

import MobileFrame from '@/component/layout/MobileFrame'
import Image from 'next/image';
import blur1 from '@/../public/1.question/blur-circle-1.png';
import blur2 from '@/../public/1.question/blur-circle-2.png';
import blur3 from '@/../public/1.question/blur-circle-3.png';
import { usePsyStore, useQuestionStore } from '@/app/store/store'
import bgQ1 from '@/../public/1.question/4.jpg';
import bgQ2 from '@/../public/1.question/5.jpg';
import bgQ3 from '@/../public/1.question/9.jpg';


export default function QuestionPage({questionIndex, nextStep}) {

  const questionData = useQuestionStore( (state)=> state );
  const psyData = usePsyStore( (state)=> state );


  const clickAnswer = function(option){
    nextStep();

    psyData.updateScore(psyData.score + option.value );

    console.log(option.title, option.value);
  }

  const getMainColor = function(prefix){
    
    let colorString = "";

    if(questionIndex == 0){
      colorString = prefix + "-[#90B62A]";
    }else if(questionIndex == 1){
      colorString = prefix + "-[#DD3E3E]";
    }else{
      colorString = prefix + "-[#1098EC]";
    }

    return colorString;

  }


  return (
    <>
      <MobileFrame>
        <div className='relative w-full h-full flex flex-col items-center'>
          {questionIndex === 0 && (
            <Image src={bgQ1} alt='bgQ1' fill className='object-cover z-0 opacity-20 pointer-events-none' style={{zIndex:0}} />
          )}
          {questionIndex === 1 && (
            <Image src={bgQ2} alt='bgQ2' fill className='object-cover z-0 opacity-20 pointer-events-none' style={{zIndex:0}} />
          )}
          {questionIndex === 2 && (
            <Image src={bgQ3} alt='bgQ3' fill className='object-cover z-0 opacity-20 pointer-events-none' style={{zIndex:0}} />
          )}

          {questionIndex === 0 && (
            <Image className='absolute top-0 -translate-y-1/2 scale-150' src={blur1} alt='blur1' />
          )}
          {questionIndex === 1 && (
            <Image className='absolute top-0 -translate-y-1/2 scale-150' src={blur2} alt='blur2' />
          )}
          {questionIndex === 2 && (
            <Image className='absolute top-0 -translate-y-1/2 scale-150' src={blur3} alt='blur3' />
          )}

          <div className='flex flex-col items-center gap-[26px] relative z-10 w-full'>
            {/* <Image src={q1Up} className='w-[88px]' alt='q1Up' /> */}

            <div
              className={
                questionIndex === 0 ? 'text-[#0057B8] border-2 border-[#0057B8] rounded-full w-[48px] h-[48px] flex justify-center items-center font-bold text-xl' :
                questionIndex === 1 ? 'text-[#BFA14A] border-2 border-[#BFA14A] rounded-full w-[48px] h-[48px] flex justify-center items-center font-bold text-xl' :
                'text-[#7B2235] border-2 border-[#7B2235] rounded-full w-[48px] h-[48px] flex justify-center items-center font-bold text-xl'
              }
            >
              Q{questionIndex+1}
            </div>
            

            <div
              className={
                questionIndex === 0 ? 'text-center font-bold text-3xl text-[#0057B8] mb-2' :
                questionIndex === 1 ? 'text-center font-bold text-3xl text-[#BFA14A] mb-2' :
                'text-center font-bold text-3xl text-[#7B2235] mb-2'
              }
            >
              {questionIndex === 0 && <>如果你突然獲得一種超能力，你最希望是？</>}
              {questionIndex === 1 && <>遇到危險時，你的第一反應是？</>}
              {questionIndex === 2 && <>如果你是團隊的一員，你會？</>}
            </div>


            {            
              questionData.questions[questionIndex+1].options.map((option, index) => (
                <div
                  className={
                    (questionIndex === 0
                      ? 'bg-[#B3D4F7] text-[#0057B8] shadow-[0px_4px_0px_1px_#0057B8]'
                      : questionIndex === 1
                      ? 'bg-[#F6EFD6] text-[#BFA14A] shadow-[0px_4px_0px_1px_#BFA14A]'
                      : 'bg-[#F5D1D6] text-[#7B2235] shadow-[0px_4px_0px_1px_#7B2235]')
                    + ' max-w-[95%] w-full rounded-full py-[16px] px-4 text-sm flex flex-col justify-center items-center font-medium break-words whitespace-normal text-center cursor-pointer hover:translate-y-0.5 transition'
                  }
                  onClick={() => clickAnswer(option)}
                  key={questionIndex + '-' + index}
                >
                  {questionIndex === 0 && index === 0 && <>能飛天遁地，想去哪就去哪</>}
                  {questionIndex === 0 && index === 1 && <>擁有無敵力量，保護所有人</>}
                  {questionIndex === 0 && index === 2 && <>讀心術，洞悉一切秘密</>}
                  {questionIndex === 1 && index === 0 && <>衝上前保護朋友，自己來扛</>}
                  {questionIndex === 1 && index === 1 && <>冷靜分析，想出最佳對策</>}
                  {questionIndex === 1 && index === 2 && <>用幽默化解尷尬，讓大家安心</>}
                  {questionIndex === 2 && index === 0 && <>當領袖，帶領大家前進</>}
                  {questionIndex === 2 && index === 1 && <>默默支援，讓團隊更強大</>}
                  {questionIndex === 2 && index === 2 && <>提供創意點子，讓任務更有趣</>}
                </div>
              ))
            }
            

            {/* <Image src={q1Down} className='w-[88px]' alt='q1Down' /> */}

          </div>

          {questionIndex === 0 && (
            <Image className='absolute bottom-0 translate-y-1/2 scale-150' src={blur1} alt='blur1' />
          )}
          {questionIndex === 1 && (
            <Image className='absolute bottom-0 translate-y-1/2 scale-150' src={blur2} alt='blur2' />
          )}
          {questionIndex === 2 && (
            <Image className='absolute bottom-0 translate-y-1/2 scale-150' src={blur3} alt='blur3' />
          )}
        </div>
      </MobileFrame>
    </>
  );
}
