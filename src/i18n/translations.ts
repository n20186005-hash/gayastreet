import type { Translation } from './types';
import { zh } from './zh';
import { en } from './en';
import { ms } from './ms';

export const translations: Record<string, Translation> = {
  zh,
  en,
  ms,
};

export type { Translation };
