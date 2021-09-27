export function isInteresting(n: number, awesomePhrases: number[]): number {
  // CODE HERE
  let currentVal = n;
  for (let i = 0; i < 3; i++) {
    const str = currentVal + "";
    if (currentVal < 100) {
      currentVal += 1;
      continue;
    }
    //   枚举出所有情况 然后按规则输出
    if (
      str.split("").reverse().join("") === str ||
      awesomePhrases.includes(currentVal) ||
      new RegExp(`[1-9][0]{${str.length - 1}}`, "g").test(str) ||
      "1234567890".includes(str.toString()) ||
      "9876543210".includes(str.toString())
    )
      return n !== currentVal ? 1 : 2;
    currentVal += 1;
  }
  return 0;
}