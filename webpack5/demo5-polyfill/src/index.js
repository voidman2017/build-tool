import 'babel-polyfill'
async function fnA() {
  const a = await 1;
  console.log("===debug=== a: ", a);
}
fnA();

const list = [1, 2, 3].map((item) => {
  return item + 1;
});
console.log("===debug=== list: ", list);

const list2 = [1, 2, 3].some((item) => {
  return item + 1;
});
console.log("===debug=== list2: ", list2);

const arrowFn = () => {};

