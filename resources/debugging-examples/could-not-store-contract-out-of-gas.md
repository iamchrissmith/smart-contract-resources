This was an error I ran into when I was trying to inherit a contract and had forgotten to implement a function signature.

```javascript
contract IMyContract {
  function myFunc1() returns(bool);
  function myFunc2() returns(bool);
}

contract MyContract is IMyContract {
  function myFunc1() returns(bool) {
    return true;
  }
}
```

results in `Error: The contract code couldn't be stored, please check your gas amount.`

When trying to create a new contract in a test and running `truffle test`

This is essentially the fallback error when web3 cannot launch a contract: https://github.com/ethereum/web3.js/blob/develop/lib/web3/contract.js#L145
