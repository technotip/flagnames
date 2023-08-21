"use strict";
exports.flagNames = function (objectType, accountflag) {
  const array = [];
  Object.keys(Flags[objectType]).forEach((flag) => {
    if ((accountflag & Flags[objectType][flag]) === Flags[objectType][flag]) {
      array.push(flag);
    }
  });
  return array;
};
const Flags = {
  AccountRoot: {
    lsfRequireDestTag: 131072,
    lsfRequireAuth: 262144,
    lsfPasswordSpent: 65536,
    lsfNoFreeze: 2097152,
    lsfGlobalFreeze: 4194304,
    lsfDisallowXRP: 524288,
    lsfDisallowIncomingTrustline: 536870912,
    lsfDisallowIncomingPayChan: 268435456,
    lsfDisallowIncomingNFTokenOffer: 67108864,
    lsfDisallowIncomingCheck: 134217728,
    lsfDisableMaster: 1048576,
    lsfDepositAuth: 16777216,
    lsfDefaultRipple: 8388608,
  },
  RippleState: {
    lsfLowReserve: 65536,
    lsfHighReserve: 131072,
    lsfLowAuth: 262144,
    lsfHighAuth: 524288,
    lsfLowNoRipple: 1048576,
    lsfHighNoRipple: 2097152,
    lsfLowFreeze: 4194304,
    lsfHighFreeze: 8388608,
  },
  SignerList: {
    lsfOneOwnerCount: 65536,
  },
  NFTokenOffer: {
    lsfSellNFToken: 1,
  },
};
