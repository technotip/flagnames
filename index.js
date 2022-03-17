"use strict";
exports.flagNames = function (objectType, accountflag) {
  const array = [];
  Object.keys(eval(objectType)).forEach((flag) => {
    if ((accountflag & eval(objectType)[flag]) === eval(objectType)[flag]) {
      array.push(flag);
    }
  });
  return array;
};
const AccountRoot = {
  lsfPasswordSpent: 65536,
  lsfRequireDestTag: 131072,
  lsfRequireAuth: 262144,
  lsfDisallowXRP: 524288,
  lsfDisableMaster: 1048576,
  lsfNoFreeze: 2097152,
  lsfGlobalFreeze: 4194304,
  lsfDefaultRipple: 8388608,
  lsfDepositAuth: 16777216,
};
const RippleState = {
  lsfLowReserve: 65536,
  lsfHighReserve: 131072,
  lsfLowAuth: 262144,
  lsfHighAuth: 524288,
  lsfLowNoRipple: 1048576,
  lsfHighNoRipple: 2097152,
  lsfLowFreeze: 4194304,
  lsfHighFreeze: 8388608,
};
