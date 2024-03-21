import { writable } from "svelte/store";
import merge from "lodash.merge";

export function useLocalStorage({ key }) {
  // Check if running in the browser
  const isBrowser = typeof window !== "undefined";

  // Create a writable store with an initial value
  const localStorageStore = writable(null);

  // Function to merge the stored data with the current state
  const mergeStoredData = () => {
    if (isBrowser) {
      const json = localStorage.getItem(key);
      if (json) {
        const stored = JSON.parse(json);
        localStorageStore.update((state) => merge(state, stored));
      }
    }
  };

  // Subscribe to the store changes and update localStorage on state change
  const unsubscribe = localStorageStore.subscribe((state) => {
    if (isBrowser && state) {
      localStorage.setItem(key, JSON.stringify(state));
    }
  });

  // Fetch and merge stored data on component mount
  if (isBrowser) {
    mergeStoredData();
  }

  // Return cleanup function to unsubscribe
  return () => unsubscribe;
}
