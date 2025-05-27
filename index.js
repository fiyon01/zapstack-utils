// index.js
function generateZapReferenceId() {
  const timestamp = Date.now();
  const random = Math.random().toString(36).substring(2, 8);
  return `zap_${timestamp}_${random}`;
}

module.exports = generateZapReferenceId;
