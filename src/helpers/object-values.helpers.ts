export const objectValues = <T>(o: Record<string, T>): T[] =>
  Object.keys(o).map(key => o[key]);
