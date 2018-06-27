# Solidity Testing Checklist

[ ] Solc
[ ] Linter
[ ] Test coverage
[ ] Security best practices
[ ] Business Logic check on each PR

## Resources

[Mike Goldin's Testing Smart Contracts Presentation](https://docs.google.com/presentation/d/1mMC9VkZCVn4L4YKLiWJjInaQEj2lQK-iag3lM7_vGtU/edit#slide=id.p22)
[Great Test examples - Mike Goldin's DeadMan Switch Repo](https://github.com/skmgoldin/dead-mans-switch/blob/master/test/Dead.js)
[Okay Test Example - My EthDenver Truffle Demo](https://github.com/iamchrissmith/ethDenverTruffleDemo/blob/master/test/changeName.test.js)

## Tools

[Ethereum Foundation Safety Wiki](https://github.com/ethereum/wiki/wiki/Safety)
[ConsenSys Security Best Practices](https://github.com/ConsenSys/smart-contract-best-practices)
[Eth Gas Reporter](https://github.com/cgewecke/eth-gas-reporter)
[Sol Graph](https://github.com/raineorshine/solgraph) (maybe still too in-development)
[Advanced Truffle Testing](https://medium.com/coinmonks/using-truffle-framework-in-an-advanced-way-7e32c11c97a9)

-----------------

## AssetToken Standard

* Upgradability
* Factory
* Metadata
* Transfer restrictions
* * Investor Cap
* * Whitelist
* Modules

## Swaps

assigned: Parker

## Distributions (Airdrop)

assigned: James

## Module Registry

external calls to check whether a transfer is valid

### Approval Module

* test approval orders

## Airswap contract + Proxy

Can we set it up where the Airswap contract contains a proxy delegateCall function that allows the user authorize the airswap contract by calling the airswap contract directly

Then UserA calls Airswap to approve for a trade including the to user (UserB). Airswap delegates that to the ERC token to be traded for approval

UserB then calls Airswap to approve for a trade including the from user (UserA). Airswap delegates that call to ERC token then executes the trade

InvestorCap needs to account for when the to is a new investor but the from is sending all tokens
