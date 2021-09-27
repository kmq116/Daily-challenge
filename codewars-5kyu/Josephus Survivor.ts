export function josephusSurvivor(n: number, k: number) {
  // your code here
  let list = [];
  for (let i = 1; i <= n; i++) {
    list.push(i);
  }

  let index = 0;
  // 递推公式 上一个人的索引值加三就是多一个人的索引
  // i 从二开始 因为任何数模 1 都为 0
  for (let i = 2; i <= n; i++) {
    index = (index + k) % i;
  }

  return list[index];
}