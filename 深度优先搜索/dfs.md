* dfs 本质上其实也就是回溯算法
* 回溯算法的框架：
```js
result = []
function backtrack(路径, 选择列表){
  if (满足结束条件) {
      result.add(路径)
      return
  }

  
  for (选择 in 选择列表) {
    做选择
    backtrack(路径, 选择列表)
    撤销选择
  }
}
```
* 其核心就是for循环里面的递归，在递归调用之前做选择，在递归调用之后撤销选择

## 形式一  组合 不考虑顺序 元素无重复不可复选
```js
const subsets = function(nums) {
  const res = []
  const track = [] // 用于记录回溯路径

  const dfs = function(start) => {
    res.push([...track])

    for (let i = start; i < nums.length; i++) {
      // 做选择
      track.push(nums[i])
      // 回溯遍历下一层节点
      dfs(i+1)
      // 撤销选择
      track.pop()
    }
  }

  dfs(0)
  return res
}
```


## 形式二 排列 考虑顺序  元素无重复不可复选·
```js
const subsets = function(nums) {
  const res = []
  const track = []
  const used = new Array(nums.length).fill(false)

  const dfs = function(nums) {
      if (track.length === nums.length) {
          res.push([...track])
          return
      }

      for (let i = 0; i < nums.length; i++) {
          if (used[i]) {
              continue
          }
          used[i] = true
          track.push(nums[i])
          dfs(nums)
          used[i] = false
          track.pop()
      }
  }

  dfs(nums)
  return res
}
```


## 形式三 组合 不考虑顺序   元素可以重复不可复选
```js
const subsets = function(nums) {
// 要先对数组进行排序，让相同的元素紧靠在一起，如果发现 nums[i] === nums[i-1], 则直接跳过
  const res = []
  const track = []
  nums.sort((a,b) => a - b)

  const dfs = function(start) {
    res.push([...track])

    for (let i = start; i < nums.length; i++) {
      if (i > start && nums[i] === nums[i-1]) {
        continue
      }

      track.push(nums[i])
      dfs(i+1)
      track.pop()
    }
  }

  dfs(0)
  return res
}
```


## 形式四  排列 考虑顺序  元素可以重复不能复选
```js
const subsets = function(nums) {
  const res = []
  const track = []
  const used = new Array(nums.length).fill(false)
  nums.sort((a,b) => a - b)

  const dfs = function(nums, used) {
    if (track.length === nums.length) {
      res.push([...track])
      return
    }

    for (let i = 0; i < nums.length; i++) {
      if (used[i]) {
        continue
      }

      if (i > 0 && nums[i] === nums[i-1] && used[i-1]) {
        continue
      }

      track.push(nums[i])
      used[i] = true
      dfs(nums, used)
      track.pop()
      used[i] = false
    }
  }

  dfs(nums, used)
  return
}
```


## 形式五 组合 不考虑顺序  元素无重复可以复选
```js
const subsets = function(nums) {
  const res = []
  const track = []

  const dfs = function(start) {
    res.push([...track])

    for (let i = starst; i < nums.length; i++) {
      track.push(nums[i])
      dfs(i)
      track.pop()
    }
  }

  dfs(0)
  return dfs
}
```