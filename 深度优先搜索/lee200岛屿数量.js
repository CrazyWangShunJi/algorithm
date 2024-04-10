// 本题就是经典的dfs
// 选中一个点，如果这个点是陆地，那么就一直递归，一直递归到它的周围全都是水为止，递归完之后
// 就代表已经记录了一块陆地

var numIslands = function(grid) {
  let sum = 0 // 记录陆地数目
  
  const dfs = function(row, col) {
    if (row < 0 || col < 0 || row >= grid.length || col >= grid[0].length) {
      return false // 超出边界直接终止递归
    }

    if (grid[row][col] ===  '0') {
      return false // 递归到水 终止
    }

    grid[row][col] = '0'

    dfs(row + 1, col)
    dfs(row - 1, col)
    dfs(row, col + 1)
    dfs(row, col - 1)
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === '1') {
        sum++
        dfs(i, j)
      }
    }
  }

  return sum
};