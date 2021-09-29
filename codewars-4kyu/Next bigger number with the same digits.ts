export function nextBigger(n: number): number {
  // your code here
  let str = n.toString();
  let list = str.split("").reverse();
  let dict: any = {};//定义索引字典
  for (let i = 0; i < str.length - 1; i++) {
    // 找到反转后 前置大于后值的 准备交换位置
    if (list[i] > list[i + 1]) {
      // 遍历交换位置之前的值 找出 大于 i + 1 的数据的最小值
      let j = 0;
      while (j < i + 1) {
        if (list[j] > list[i + 1]) {
          dict[list[j]] = j;
        }
        j++;
      }
      const min = Math.min(...Object.keys(dict).map((value) => Number(value)));
      const index = dict[min];

      // 将找出的最小值与 i + 1 位置交换
      let temp = list[index];
      list[index] = list[i + 1];
      list[i + 1] = temp;

      // 从 i + 1 处 把后面的数字 按照从小到大顺序排列
      let steal = list.splice(0, i + 1);
      let stealNum = steal.map((val) => Number(val)).sort((a, b) => b - a);
      list.unshift(...stealNum.map((val) => val.toString()));
      // return result
      return Number(list.reverse().join(""));
    }
  }
  // else
  return -1;
}