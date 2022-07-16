const parseSentence = (words: (string | number)[]): string =>
  numberToString(words).reduce(
    (chain, word, index) =>
      (chain += `${word}${index == words.length - 1 ? "" : " "}`),
    ""
  );

const numberToString = (words: (string | number)[]): string[] =>
  words.map((word) => word.toString());
export { parseSentence };
