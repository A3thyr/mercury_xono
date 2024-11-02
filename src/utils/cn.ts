import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * - мерж tailwind классов:
 *    cn('text-[10px] text-[#000000]', 'text-[20px] text-[#000000]') => "text-[20px] text-[#000000]"
 * - резолвинг условных стилей
 *    cn('foo', true && 'bar', 'baz') => 'foo bar baz'
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
