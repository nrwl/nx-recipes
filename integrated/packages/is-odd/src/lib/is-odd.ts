import { isEven } from '@myorg/is-even';

export function isOdd(x: number): boolean {
  return !isEven(x);
}
