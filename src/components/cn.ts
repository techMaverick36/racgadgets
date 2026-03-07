/**
 * Lightweight className joiner — combines class strings and filters falsy values.
 * Avoids adding clsx/classnames as a dependency for simple use cases.
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}
