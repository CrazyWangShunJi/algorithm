let land = [
  [0, 2, 1, 0],
  [0, 1, 0, 1],
  [1, 1, 0, 1],
  [0, 1, 0, 1],
];
var pondSizes = function (land) {
  const res = [];
  let sum = 0;
  const next = [-1, 0, 1]
  const dfs = function (row, col) {
    if (
      row < 0 ||
      col < 0 ||
      row >= land.length ||
      col >= land[0].length ||
      land[row][col] > 0
    ) {
      return false;
    }

    // 此时递归到0，即遇到水域，此时祠堂面积sum+1
    sum++;
    land[row][col] = 1;

    // 对节点的周围继续进行递归
    for (let x of next) {
      for (let y of next) {
        if (x === 0 && y === 0) {
          // 节点本身不需要递归
          continue
        }
        dfs(row + x,col + y)
      }
    }
  };

  for (let i = 0; i < land.length; i++) {
    for (let j = 0; j < land[0].length; j++) {
      if (land[i][j] === 0) {
        dfs(i, j);
        // 每一次递归结束，都需要将池塘的面积放入数组
        res.push(sum);
        // 同时也要将面积清零，初始化下一次递归池塘的面积
        sum = 0;
      }
    }
  }

  return res.sort((a,b) => a - b);
};
pondSizes(land);
