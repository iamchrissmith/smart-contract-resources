const isReverted = err =>
  err.includes('revert');

const isEVMException = err =>
  err.includes('VM Exception');

const isNotAFunction = err =>
  err.includes('not a function');

const didNotSaveContract = err =>
  err.includes('contract code couldn\'t be stored');

const invalidJump = err =>
  err.includes('invalid JUMP');

const invalidOpcode = err =>
  err.includes('invalid opcode');

const outOfGas = err =>
  err.includes('out of gas');

const expectThrow = async (promise, errMsg = 'Expected throw not received') => {
  let result;
  try {
    result = await promise;
  } catch (error) {
    const err = error.toString();
    assert.isTrue(
      isReverted(err) ||
      isEVMException(err) ||
      isNotAFunction(err) ||
      didNotSaveContract(err) ||
      invalidJump(err) ||
      invalidOpcode(err) ||
      outOfGas(err),
      'Expected throw, got \'' + error + '\' instead');
    return;
  }
  assert.isTrue(false, `${errMsg} ${result.toString()}`);
};

module.exports = {
  expectThrow
};
