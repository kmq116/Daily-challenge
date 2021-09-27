export class G964 {
  public static playPass(s: string, n: number): string {
    // your code
    let list = [],
      reg = /[A-Z]/,
      numReg = /[0-9]/;

    for (let i = 0; i < s.length; i++) {

      if (reg.test(s[i])) {
        let str = String.fromCharCode(
          (((s[i].charCodeAt(0) + n) % 65) % 26) + 65
        );
        str = i % 2 === 0 ? str : str.toLowerCase();
        list.push(str);

      } else if (numReg.test(s[i])) {
        list.push(9 - Number(s[i]));

      } else {
        list.push(s[i]);
      }
    }
    return list.reverse().join("");
  }
}