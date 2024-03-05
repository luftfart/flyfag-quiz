import { writable } from "svelte/store";
import { subtracts } from "../routes/subtract/[n]/subtractQuestions";
import { adds } from "../routes/add/[n]/addQuestions";
import { tables } from "../routes/table/[n]/tableQuestions";
import { modules } from "../routes/m[nr]/[emne]/modulesQuestions";
import { useLocalStorage } from "./store-hooks";

const initialState = {
  // @ts-ignore
  tables: tables.initialState,
  adds: adds.initialState,
  subtracts: subtracts.initialState,
  modules: modules.initialState,
  practice: { today: {}, tomorrow: {}, nextWeek: {} },
};

function createStore() {
  const KEY = "tafels-app-v9";

  const { subscribe, update } = writable(initialState);

  useLocalStorage({ subscribe, update, key: KEY });

  return {
    subscribe,
    complete: ({ category, challenge }) =>
      update((state) => {
        state[category][challenge].completed = true;
        return state;
      }),
    unlockNext: ({ category, challenge }) =>
      update((state) => {
        const current = state[category][challenge];
        if (current.unlocks) state[category][current.unlocks].unlocked = true;
        return state;
      }),
  };
}

export const store = createStore();
