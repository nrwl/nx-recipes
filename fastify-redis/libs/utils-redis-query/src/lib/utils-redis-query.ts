import { createHash } from 'node:crypto';

export function mapIdToHash<T = unknown>(
  results: Array<[any, T]>,
  keys: string[]
) {
  // TODO(caleb): type this better
  return results.map((res: [T, any], idx) => ({
    ...res[1],
    id: keys[idx].split(':').at(-1),
  }));
}

export function createId(value: Record<string, string | number>) {
  const content = Object.values(value)
    .map((v) => v.toString())
    .join(':');

  return createHash('sha256').update(content).digest('hex').slice(0, 36);
}
