import { createHash } from 'node:crypto';

/**
 * add the id back to the result object
 **/
export function mapIdToHash<T = unknown>(
  results: Array<[unknown, T]>,
  keys: string[]
) {
  return results.map((res: [number, T], idx) => ({
    ...res[1],
    id: keys[idx].split(':').at(-1),
  }));
}

/**
 * Sample function for creating ids.
 * A more robust system should most likely be used, Especially if uniqueness is required
 **/
export function createId(value: Record<string, string | number>) {
  const content = Object.values(value)
    .map((v) => v.toString())
    .join(':');

  return createHash('sha256').update(content).digest('hex').slice(0, 36);
}
