export class G964 {
  public static primeFactors = (n: number) => {
    const obj: { [key: string]: number } = {};

    let prime = 2; //定义从 2 开始的素数
    while (n > 1) {
      if (n % prime === 0) {
        n /= prime;
        // 动态给对象赋值
        if (obj.hasOwnProperty(prime.toString())) {
          obj[prime]++;
        } else {
          obj[prime] = 0;
          obj[prime]++;
        }
      } else {
        prime += 1;
        // 过滤掉偶数
        if (prime % 2 === 0) prime += 1;
      }
    }

    let result = "";
    Object.keys(obj).forEach((key) => {
      if (obj[key] === 1) {
        result += `(${key})`;
      } else {
        result += `(${key}**${obj[key]})`;
      }
    });
    return result;
  };
}