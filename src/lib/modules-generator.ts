import { addRndOptions, generate } from "$lib/question-utils";
import type { Question } from "$lib/types";

export let emne: any;


emne = 1



function generateTableQuestions(base: number) {

 
  const TOTAL = 10;
  const table: Question[] = [];
  for (let i = 1; i <= TOTAL; i++) {
    const question = {
      q: `${base} x ${i}`,
      answer: base * i,
      options: [base * i],
    };
    table.push(question);
  }
  return addRndOptions({
    table,
    total: 9,
    min: 1,
    max: base * TOTAL + 10,
  });
}



const initialState = {
  1: { unlocked: true, unlocks: 10 },
  10: { unlocks: 2 },
  2: { unlocks: 5 },
  5: { unlocks: 3 },
  3: { unlocks: 4 },
  4: { unlocks: 6 },
  6: { unlocks: 7 },
  7: { unlocks: 8 },
  8: { unlocks: 9 },
  9: { unlocks: 11 },
  11: { unlocks: 20 },
  20: { unlocks: null },
};
let total_modules = 17
let _modules: any[] = [];
for (let i = 0; i < total_modules; i++) {
  console.log("--->",`m${emne+1}`, )

  const  definition = {
    title: `Module ${i+1}`, //| Part66 Prøveeksamen
    category: `module${i+1}`,
    slug: `m${i+1}`,
  };


  const module = generate({
    definition,
    initialState,
    generateQuestions: generateTableQuestions,
  });

  _modules.push(module);
}


export {_modules}

