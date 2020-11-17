describe('Test svit namnet', () => {})

function f(a) {
  return a * 2;
}

// () => {}
const f = (a) => {
  return a * 2;
}
// const b = f(2)
// b = 4

const f = (a) => {
  a * 2;
}
// const b = f(2)
// b = null

// const x = 'Björn'
// return x

// Indentering
const f1 = () => {
  const a = '2';
  const f2 = () => {
    const b = 3 
    return b
  }
  if(true) {
    const b = 4
  }
  return a;
}
