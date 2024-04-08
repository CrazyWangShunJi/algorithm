// 问题的本质就是让你在一副图中找到起点到终点的最终距离

const bfs = function(start, target) {
  let queue = [] // 核心数据结构
  let visited = new Set() // 避免走回头路
  let step = 0

  queue.push(start) // 将起点放入队列
  visited.add(satrt)

  while(queue.length > 0) {
    let size = queue.length
    for(let i = 0; i < size; i++) {
      let curNode = queue.shift()

      if (curNode === target) {
        return step
      }

      // 将当前节点的相邻节点加入队列
      let adj = curNode.adj()  // 相邻节点
      for (let j = 0; j < adj.length; j++) {
        let temp = adj[j]
        if (!visited.has(temp)) {
          queue.push(temp)
          visited.add(temp)
        }
      }
    }
    step++
  }

  return 'not find'  // 走到这一步说明没有找到目标节点
}