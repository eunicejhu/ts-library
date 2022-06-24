const parseSentence = (words: string[]): string =>
  words.reduce(
    (chain, word, index) =>
      (chain += `${word}${index == words.length - 1 ? "" : " "}`),
    ""
  );

export { parseSentence };
