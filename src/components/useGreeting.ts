import { useSyncExternalStore } from "react";

const noopSubscribe = () => () => {};

function greetingFor(now: Date): string {
  const hour = now.getHours();
  const day = now.getDay(); // 0 = Sunday, 1 = Monday

  if (day === 1) return "Happy new week";
  if (day === 0) return "Happy Sunday";
  if (hour < 12) return "Good morning";
  if (hour < 17) return "Good afternoon";
  return "Good evening";
}

/**
 * Returns a contextual greeting based on the visitor's local time and day.
 * Returns null during prerender/hydration (the build machine's clock is
 * meaningless), then the real greeting straight after.
 */
export function useGreeting(): string | null {
  return useSyncExternalStore(
    noopSubscribe,
    () => greetingFor(new Date()),
    () => null
  );
}
