
import { useState, useEffect } from 'react';

export function getStoredValue<T>(storage: Storage | undefined, key: string, initialValue: T): T {
  if (!storage) {
    return initialValue;
  }

  try {
    const item = storage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  } catch (error) {
    console.error(error);
    return initialValue;
  }
}

export function syncFromStorageEvent<T>(
  event: Pick<StorageEvent, 'key' | 'newValue'>,
  key: string,
  initialValue: T,
  updateValue: (value: T) => void,
): void {
  if (event.key !== key) {
    return;
  }

  try {
    const parsedValue = event.newValue ? JSON.parse(event.newValue) : initialValue;
    updateValue(parsedValue);
  } catch (error) {
    console.error(error);
  }
}

function useLocalStorage<T,>(key: string, initialValue: T): [T, (value: T) => void] {
  const [storedValue, setStoredValue] = useState<T>(() =>
    getStoredValue(typeof window === 'undefined' ? undefined : window.localStorage, key, initialValue),
  );

  const setValue = (value: T) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const handleStorageChange = (event: StorageEvent) => {
      syncFromStorageEvent(event, key, initialValue, setStoredValue);
    };

    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key, initialValue]);


  return [storedValue, setValue];
}

export default useLocalStorage;
