import test from 'node:test';
import assert from 'node:assert/strict';

import { getStoredValue, syncFromStorageEvent } from '../useLocalStorage.js';

class MemoryStorage implements Storage {
  private store = new Map<string, string>();

  get length(): number {
    return this.store.size;
  }

  clear(): void {
    this.store.clear();
  }

  getItem(key: string): string | null {
    return this.store.has(key) ? this.store.get(key)! : null;
  }

  key(index: number): string | null {
    return Array.from(this.store.keys())[index] ?? null;
  }

  removeItem(key: string): void {
    this.store.delete(key);
  }

  setItem(key: string, value: string): void {
    this.store.set(key, value);
  }
}

test('getStoredValue returns persisted data when available', () => {
  const storage = new MemoryStorage();
  storage.setItem('example', JSON.stringify({ greeting: 'hola' }));

  const value = getStoredValue(storage, 'example', { greeting: 'adiós' });

  assert.deepEqual(value, { greeting: 'hola' });
});

test('getStoredValue falls back to initial value on parse errors', () => {
  const storage = new MemoryStorage();
  storage.setItem('broken', 'not-json');

  const originalError = console.error;
  let logged = false;
  console.error = () => {
    logged = true;
  };

  const value = getStoredValue(storage, 'broken', { ok: true });

  console.error = originalError;

  assert.deepEqual(value, { ok: true });
  assert.equal(logged, true);
});

test('syncFromStorageEvent updates the value when keys match', () => {
  let nextValue: unknown = null;

  syncFromStorageEvent(
    { key: 'shared', newValue: JSON.stringify(['remote']) },
    'shared',
    [],
    (value) => {
      nextValue = value;
    },
  );

  assert.deepEqual(nextValue, ['remote']);
});

test('syncFromStorageEvent restores initial value on null payload', () => {
  let nextValue: unknown = null;

  syncFromStorageEvent(
    { key: 'shared', newValue: null },
    'shared',
    ['initial'],
    (value) => {
      nextValue = value;
    },
  );

  assert.deepEqual(nextValue, ['initial']);
});

test('syncFromStorageEvent ignores unrelated keys', () => {
  let called = false;

  syncFromStorageEvent(
    { key: 'other', newValue: JSON.stringify('value') },
    'shared',
    'initial',
    () => {
      called = true;
    },
  );

  assert.equal(called, false);
});
