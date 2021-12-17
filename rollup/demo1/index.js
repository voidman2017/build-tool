import path from 'path'

const a = 1
console.log(a)
console.log(path.join('', 'hello'))

// rollup -i index.js --file dist.js --format [umd/cjs]