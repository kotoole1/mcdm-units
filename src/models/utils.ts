export function removeIf<T>(items: T[], predicate: (item: T) => boolean) {
  if (!items) {
    return;
  }
  for (let i = items.length - 1; i >= 0; i--) {
    if (predicate(items[i])) {
      items.splice(i, 1);
    }
  }
}
