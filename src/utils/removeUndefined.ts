export const removeUndefined = (o: Record<string, unknown>) => {
  return Object.entries(o)
    .filter(([, val]) => {
      if (!val) {
        val = undefined;
      }
      return val !== undefined;
    })
    .reduce((result: any, [key, val]) => {
      result[key] = val;
      return result;
    }, {});
};
