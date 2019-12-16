export function randomId(): string {
  return Math.random().toString(36).substr(2, 15) +
    Math.random().toString(36).substr(2, 15);
}
