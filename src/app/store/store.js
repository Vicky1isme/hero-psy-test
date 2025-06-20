import { create } from 'zustand'



// 建立 store hook
const usePsyStore = create((set) => ({
	// states and actions
  state: 0, //0:start, 1:question, 2:displayResult, 3: result
  questionState: 0,
  totalQuestions: 3,
  score: 0,
  updateState: (newState) => set( (state)=>({ state: newState}) ),
  updateQuestionState: (newState) => set( (state)=>({ questionState: newState}) ),
  updateTotalQuestions: (newState) => set( (state)=>({ totalQuestions: newState}) ),
  updateScore: (newState) => set( (state)=>({ score: newState}) )
}));


const useQuestionStore = create((set) => ({
  questions: {
    "1":{
      title: "如果你突然獲得一種超能力，你最希望是？",
      options: [
        {title: "能飛天遁地，想去哪就去哪", value: 2},
        {title: "擁有無敵力量，保護所有人", value: 3},
        {title: "讀心術，洞悉一切秘密", value: 1}
      ]
    },
    "2":{
      title: "遇到危險時，你的第一反應是？",
      options: [
        {title: "衝上前保護朋友，自己來扛", value: 3},
        {title: "冷靜分析，想出最佳對策", value: 1},
        {title: "用幽默化解尷尬，讓大家安心", value: 2}
      ]
    },
    "3":{
      title: "如果你是團隊的一員，你會？",
      options: [
        {title: "當領袖，帶領大家前進", value: 3},
        {title: "默默支援，讓團隊更強大", value: 2},
        {title: "提供創意點子，讓任務更有趣", value: 1}
      ]
    }
  },
}))



export { usePsyStore, useQuestionStore }