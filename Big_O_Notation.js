// 1부터 n까지 사이의 수를 모두 더하는 함수
function addUIpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}
let t1 = performance.now();
addUIpTo(1000000000);
let t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds`); //0.8936050000041723 seconds

// 위 함수보다 더 빠른 함수
function addUIpTo2(n) {
  return (n * (n + 1)) / 2;
}
let t3 = performance.now();
addUIpTo2(1000000000);
let t4 = performance.now();
console.log(`Time Elapsed: ${(t4 - t3) / 1000} seconds`); //0.000013099998235702514 seconds
