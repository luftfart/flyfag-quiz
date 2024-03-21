import { writable } from "svelte/store";
import { browser } from "$app/environment";
import { subtracts } from "../routes/subtract/[n]/subtractQuestions";
import { adds } from "../routes/add/[n]/addQuestions";
import { tables } from "../routes/table/[n]/tableQuestions";
//import { modules } from "../routes/m[nr]/[emne]/modulesQuestions";
import { _modules } from "./modules-generator";
import { useLocalStorage } from "./store-hooks";


const initialState = {
  // @ts-ignore
  tables: tables.initialState,
  adds: adds.initialState,
  subtracts: subtracts.initialState,
  //modules: modules.initialState,
  practice: { today: {}, tomorrow: {}, nextWeek: {} },
};
_modules.forEach(module => {
  // @ts-ignore
  initialState[module.category] = module;  //specifies what come out of the store in public
})

//console.log('initialState:',initialState)

function createStore() {
  const KEY = "tafels-app-v9";

  let modules_data = writable(initialState);
  
  if (browser) {
    window.localStorage.setItem('demo', JSON.stringify(initialState));
  }







  return modules_data;
  

}

export const _module_data = initialState
export const store = createStore();


