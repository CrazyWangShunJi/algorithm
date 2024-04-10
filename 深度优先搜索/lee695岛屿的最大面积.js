let grid = [
  [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
];
var maxAreaOfIsland = function (grid) {
  let maxSum = 0;
  let sum = 0;

  const dfs = function (row, col) {
    if (row < 0 || col < 0 || row >= grid.length || col >= grid[0].length || grid[row][col] === 0) {
      return;
    }

    sum++;
    grid[row][col] = 0;
    dfs(row + 1, col);
    dfs(row - 1, col);
    dfs(row, col + 1);
    dfs(row, col - 1);
  };

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        dfs(i, j)
        // 每一次递归结束，计算下最大面积maxSum, 并且将面积重置
        maxSum = maxSum >= sum ? maxSum : sum;
        sum = 0
      }
    }
  }

  return maxSum
};

console.log(maxAreaOfIsland(grid))
