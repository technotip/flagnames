# flagnames
Outputs Flag Names on an XRPL Account


# Installation 
``` npm install flagnames```

# Usage Example:
``` 
 import { XrplClient } from "xrpl-client";
 import { flagNames } from "flagnames";
 
 const client = new XrplClient();
 
 const main = async () => {
 
  const { account_data } = await client.send({
    command: "account_info",
    account: "rHdkzpxr3VfabJh9tUEDv7N4DJEsA4UioT",
  });
  
  console.log(flagNames(account_data.Flags));
    
  }
  main();
  
  ```
  
  # Example Output
  > [ 'lsfRequireDestTag', 'lsfRequireAuth' ]

It outputs all the flag names on the XRPL account in the form of an array.  
Returns empty array if no flags are set on the provided XRPL account.

Currently the package works for all the AccountRoot flags mentioned here: https://xrpl.org/accountroot.html#accountroot-flags


# Future Updates
Will add more flags information to the package like:
OfferCreate flags, EnableAmendment flags, PaymentChannelClaim flags, RippleState flags, Offer flags etc.
