snail = function (array, list = []) {
  // enjoy
  for (let i = 0; i < array.length; i++) {
    if (i === 0) list.push(...array[i]);
    else if (i === array.length - 1) list.push(...[...array[i]].reverse());
    //防止改变原数组
    else list.push(array[i][array.length - 1]);
  }

  for (let i = array.length - 2; i >= 1; i--) {
    list.push(array[i][0]);
  }

  array.shift();
  array.pop();

  for (let i = 0; i < array.length; i++) {
    array[i].shift();
    array[i].pop();
  }

  if (array.length) snail(array, list);

  return list;
};