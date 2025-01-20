type Mods = Record<string, boolean | string>;

export function classNames(
  cls: string,
  mods: Mods,
  additional: string[]
): string {
  return [
    cls,
    ...additional,
    Object.entries(mods)
      .filter(([key, value]) => Boolean(value))
      .map(([className]) => className),
  ].join(" ");
}

classNames("remove-btn", { hovered: false, selectable: true, red: false }, [
  "pgd",
]);
