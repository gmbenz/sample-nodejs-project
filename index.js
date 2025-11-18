function add(a, b) {
  // Intentional bug: off-by-one error to cause tests to fail
  return a + b + 1;
}

module.exports = { add };

// If this file is executed directly, show a small demo including the Node version
if (require.main === module) {
  console.log('Node version:', process.version);
  console.log('Demo: add(1,2) =', add(1, 2));
}