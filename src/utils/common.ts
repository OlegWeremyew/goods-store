export const shuffle = (arr) => [...arr].sort(() => 0.5 - Math.random());

export const buildUrl = (url: string, params: object): string => {
  let urlWithParams = url;

  Object.entries(params).forEach(([key, value], i) => {
    const sign = !i ? "?" : "&";
    urlWithParams += `${sign}${key}=${value}`;
  });

  return urlWithParams;
};

export const sumBy = (arr: number[]): number => arr.reduce((prev: number, cur: number) => prev + cur, 0);
