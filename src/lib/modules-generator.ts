import { addRndOptions, mcqOptions, generate, generateMCQ } from "$lib/question-utils";
import { repository } from "$lib/utils/stores";
import type { Question } from "$lib/types";
export let emne: any;


emne = 1





function generateTableQuestions(base: number) {
  const TOTAL = 10;
  const table: Question[] = [];
  for (let i = 1; i <= TOTAL; i++) {

    const question = {
      q: `${base} x ${i}`,
      answer: base * i, //TODO given the true explanition. compress to short answer
      options: [base * i], //TODO given true lengthy answer generate x(~two) answer options
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


function generateMCQQuestions(module_q_objs: any) {

    module_q_objs =  module_q_objs;
    //module_q_objs = module_q_objs;
    const table_name = 'flyfag_quiz'
    const column_name = 'module'
    const cell_name = `${module_q_objs}`

    console.log("module_q_objs:",module_q_objs);

    const table: Question[] = [];


  if (module_q_objs && Array.isArray(module_q_objs)) {
		interface Question {
			q: string;
			answer: string;
			options: string[];
		}

      for (const module_q_obj of module_q_objs) {
		const options = module_q_obj.alternatives;
		let question: Question;
		if (module_q_obj.stage === "new") {
			question = {
			q: `${module_q_obj.question.trim()}`,
			answer: module_q_obj.answer.trim(), //TODO given the true explanition. compress to short answer
			options: generateAlternatives(options), //TODO given true lengthy answer generate x(~two) answer options
			};
		} else {
			question = {
				q: `${module_q_obj.question.trim()}`,
				answer: module_q_obj.answer.trim(), //TODO given the true explanition. compress to short answer
				options: showAlternatives(options), //TODO given true lengthy answer generate x(~two) answer options
			};
	
		

		}
      
        //console.log("-q_obj->",question);
        table.push(question);


      }
	  function showAlternatives(options: Record<string, string>): string[] {
		const optionValues = Object.values(options);
		const alternativeOptions: string[] = [];
		
		// Randomly select two options
		while (alternativeOptions.length < 3) {
		  const randomIndex = Math.floor(Math.random() * optionValues.length);
		  const randomOption = optionValues[randomIndex].trim();
		  
		  if (!alternativeOptions.includes(randomOption)) {
			alternativeOptions.push(randomOption);
		  }
		}
		
		return alternativeOptions;
	  }
	  function generateAlternatives(options: Record<string, string>): string[] {
		//TODO set stage to "edited"
		
		const optionValues = Object.values(options);
		const alternativeOptions: string[] = [];
		
		// Randomly select two options
		while (alternativeOptions.length < 3) {
		  const randomIndex = Math.floor(Math.random() * optionValues.length);
		  const randomOption = optionValues[randomIndex].trim();
		  
		  if (!alternativeOptions.includes(randomOption)) {
			alternativeOptions.push(randomOption);
		  }
		}
		
		return alternativeOptions;
	  }
    
    

  } else {
    const question_ = {
      q: `what is two born?`,
      answer: 'egypt', //TODO given the true explanition. compress to short answer
      options: [ 'egypt','ssf','asfga'], //TODO given true lengthy answer generate x(~two) answer options
    };
   
    table.push(question_);

  
  }

  
  return mcqOptions({
    table,
    total: 100,
    min: 100,
    max: 100,
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
  //console.log("--->",`m${emne+1}`, )
  
  const module_id = Number(i+1)

  let moduleData = (repository.find(item => item[module_id]) as any)[module_id];
  
  const  definition = {
    title: `M${module_id} ${moduleData.name}`, //| Part66 Prøveeksamen
    category: `module${module_id}`,
    slug: `m${module_id}`,
  };




  const module = await generateMCQ({
    module_id,
    definition,
    initialState,
    generateMCQQuestions: generateMCQQuestions,
  });

  
  _modules.push(module);
  //console.log('module:',module)


}


export {_modules}

