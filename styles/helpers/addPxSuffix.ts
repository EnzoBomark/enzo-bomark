export const addPxSuffix = (value: string | number) => {
  if (typeof value === 'number') return `${value}px`;
  else return value;
};
