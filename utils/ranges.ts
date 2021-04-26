const isInSequense = (a, b, c) => a + 1 === b && b + 1 === c;

export const numberListToRanges = (numbers: number[]) => {
  return numbers
    .slice()
    .sort((a, b) => a - b)
    .reduce((acc: Array<number | [number, number]>, value: number) => {
      const lastIndex = acc.length - 1;
      const lastBut1 = acc[lastIndex - 1];
      const last = acc[lastIndex];

      if (last instanceof Array && last[1] + 1 === value) {
        acc[lastIndex][1] = value;
      } else if (isInSequense(lastBut1, last, value)) {
        acc[lastIndex - 1] = [lastBut1 as number, value];
        acc.pop();
      } else {
        acc.push(value);
      }
      return acc;
    }, []);
};