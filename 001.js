function a() {
  let x = 1
  function b() {
    x++
  }
  for (let i = 0; i < 10; i++) {
    b()
  }
  console.log(x)
}
a()