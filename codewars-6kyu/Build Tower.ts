export const towerBuilder = (nFloors: number): string[] => {
  // build here
  const length = 2 * nFloors - 1;
  const center = Math.floor(length / 2);
  let temp = [];
  for (let i = 1; i <= nFloors; i++) {
    let a = new Array(length);
    a.fill("1");
    a.splice(center - i + 1, 2 * i - 1, "*".repeat(2 * i - 1));
    temp.push(a.join("").replace(/1/gi, " "));
  }
  return temp;
}