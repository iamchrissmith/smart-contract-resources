// adapted from: https://github.com/gnosis/safe-contracts/blob/master/test/utils.js
const logGasUsage = (subject, transactionOrReceipt) => {
  let receipt = transactionOrReceipt.receipt || transactionOrReceipt;
  console.log(`Gas costs for ${subject}:`);
  console.log(`    ${receipt.gasUsed}`);
  console.log('');
}

const logEvents = (subject, receipt) => {
  console.log(`Events for: "${subject}"`);
  receipt.logs.forEach((log, index) => {
    console.log(`${index} ${log.event}:`);
    Object.keys(log.args).map(argKey => {
      console.log(`    ${argKey}: ${log.args[argKey]}`);
    })
    console.log('');
  });
}

module.exports = {
  logGasUsage,
  logEvents,
}