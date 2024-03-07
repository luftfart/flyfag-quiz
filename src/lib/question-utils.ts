import { rnd } from "./utils";
import type { Question } from "./types";
import { grabAttribute } from "$lib/utils/api";

type AddRndOptions = {
  table: Question[];
  total: number;
  min: number;
  max: number;
};

type MCQOptions = {
  table: Question[];
  total: number;
  min: number;
  max: number;
};

export function addRndOptions({ table, total, min, max }: AddRndOptions) {
  table.forEach((question) => {
    while (question.options.length < total) {
      const newOption = rnd({ from: min, to: max });
      const exists = question.options.find((option) => option === newOption);
      if (!exists) question.options.push(newOption);
    }
    question.options.sort((a, b) => a - b);
  });

  return table;
}
export function mcqOptions({ table, total, min, max }: MCQOptions) {
  /*table.forEach((question) => {
    while (question.options.length < total) {
      const newOption = rnd({ from: min, to: max });
      const exists = question.options.find((option) => option === newOption);
      if (!exists) question.options.push(newOption);
    }
    question.options.sort((a, b) => a - b);
  });*/

  return table;
}

type Generate = {
  definition: {
    title: string;
    category: string;
    slug: string;
  };
  initialState: {
    [key: number]: {
      unlocked?: boolean;
      unlocks: number;
    };
  };
  generateQuestions: (base: number) => Question[];
};

type GenerateMCQ = {
  module_id: number,
  definition: {
    title: string;
    category: string;
    slug: string;
  };
  initialState: {
    [key: number]: {
      unlocked?: boolean;
      unlocks: number;
    };
  };
  generateMCQQuestions: (module_q_objs: any) => Question[];
};


export function generate({
  definition,
  initialState,
  generateQuestions,
}: Generate) {
  const challenges: { [key: string]: any } = {};
  for (const n in initialState) {
    challenges[n] = {
      ...definition,
      ...initialState[n],
      id: n,
      questions: generateQuestions(parseInt(n, 10)),
    };
  }

  return {
    ...definition,
    initialState,
    challenges,
  };
}


export async  function generateMCQ({
  module_id,
  definition,
  initialState,
  generateMCQQuestions,
}: GenerateMCQ) {
  const challenges: { [key: string]: any } = {};
  //const qs = generateMCQQuestions(GetMCQ(module_id)); //GetMCQ(module_id)

  challenges[0] = {
    ...definition,
    ...initialState[0],
    id: 0,
    questions: generateMCQQuestions(await GetMCQ(module_id))

   
      // Example usage:
  };
  

  return {
    ...definition,
    initialState,
    challenges,
  };
}


async function GetMCQ(module_id: any) {
  const module_x_questions_set = await grabAttribute(
    'flyfag_quiz',
    'module',
    `${module_id}`,
    `${module_id}`,//'id'
  );
  //console.log("GetMCQ->", module_x_questions_set.data, module_id);
  return module_x_questions_set.data;

}
