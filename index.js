function add(a, b) {
  return a + b;
}

module.exports = { add };

// If this file is executed directly, show a small demo including the Node version
if (require.main === module) {
  console.log('Node version:', process.version);
  console.log('Demo: add(1,2) =', add(1, 2));
}