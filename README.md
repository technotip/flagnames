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

