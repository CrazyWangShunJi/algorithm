// 本题思路
// 有点类似于BFS 只不过step固定，取target,
// step 也即level为k, target也即目标好友
// 返回的值则是当前的队列，也即当前的好友id

let watchedVideos = [["ywt","m","ldgs","sgpdvmj"],["k","jafgkzs","kng","vdmrl"],["yrhcxbce","frg","yktqi","kkdjht","esrydkbn"]],
  friends = [[],[2],[1]],
  id = 1,
  level = 1;
const bfs = (arr, start, step) => {
  let queue = [];
  let visited = new Set(); // 用于记录已经遍历过的好友

  queue.push(start);
  visited.add(start);

  let count = 0;
  while (queue.length > 0) {
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      if (count === step) {
        return queue;
      }

      let curNode = queue.shift(); // 当前好友的id

      let curObj = arr[curNode]; // curNode 的 好友
      for (let j = 0; j < curObj.length; j++) {
        if (!visited.has(curObj[j])) {
          // 如果这个人没有被遍历过
          queue.push(curObj[j]);
          visited.add(curObj[j]);
        }
      }
    }
    count++;
  }
};
var watchedVideosByFriends = function (watchedVideos, friends, id, level) {
  const people = bfs(friends, id, level);
  let map = new Map(); // 用于记录视频观看过的次数
  people.forEach((id) => {
    watchedVideos[id].forEach((item) => {
      map.has(item) ? map.set(item, map.get(item) + 1) :  map.set(item, 0)
    })
  })

  let videoNums = [...map]
  videoNums.sort((a, b) => {
    return a[1] !== b[1] ? a[1] - b[1] : a[0] < b[0] ? -1 : 1
  })
  let res = videoNums.map((item) => item[0])
  return res
};

console.log(watchedVideosByFriends(watchedVideos, friends, id, level))