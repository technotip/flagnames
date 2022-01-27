"use strict";
exports.flagNames = function (accountflag) {
  const array = [];
  Object.keys(AccountRootFlags).forEach((flag) => {
    if ((accountflag & AccountRootFlags[flag]) === AccountRootFlags[flag]) {
      array.push(flag);
    }
  });
  return array;
};
const AccountRootFlags = {
  /**
   * The account has used its free SetRegularKey transaction.
   */
  lsfPasswordSpent: 65536,
  /**
   * Requires incoming payments to specify a Destination Tag.
   */
  lsfRequireDestTag: 131072,
  /**
   * This account must individually approve other users for those users to hold this account's issued currencies.
   */
  lsfRequireAuth: 262144,
  /**
   * Client applications should not send XRP to this account. Not enforced by rippled.
   */
  lsfDisallowXRP: 524288,
  /**
   * Disallows use of the master key to sign transactions for this account.
   */
  lsfDisableMaster: 1048576,
  /**
   * This address cannot freeze trust lines connected to it. Once enabled, cannot be disabled.
   */
  lsfNoFreeze: 2097152,
  /**
   * All assets issued by this address are frozen.
   */
  lsfGlobalFreeze: 4194304,
  /**
   * Enable rippling on this addresses's trust lines by default. Required for issuing addresses; discouraged for others.
   */
  lsfDefaultRipple: 8388608,
  /**
   * This account can only receive funds from transactions it sends, and from preauthorized accounts.
   * (It has DepositAuth enabled.)
   */
  lsfDepositAuth: 16777216,
};
