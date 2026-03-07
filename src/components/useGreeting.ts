import { useMemo } from "react";

type Greeting = string;

/**
 * Returns a contextual greeting based on the time of day and day of week.
 * Memoised — recalculates only on mount.
 */
export function useGreeting(): Greeting {
  return useMemo<Greeting>(() => {
    const hour = new Date().getHours();
    const day = new Date().getDay(); // 0 = Sunday, 1 = Monday

    if (day === 1) return "Happy New Week 🌟";
    if (day === 0) return "Happy Sunday 🙏";
    if (hour < 12) return "Good Morning ☀️";
    if (hour < 17) return "Good Afternoon 🌤️";
    return "Good Evening 🌙";
  }, []);
}
