## Approval
Event that will be emitted when an approval to operate over a user balance is given

|Name|Type|Description|
|--- |---|---|
|owner|address|The address of the token owner|
|spender|address|The address of the token spender|
|value|uint256|The amount of tokens|

## Paused
Event that will be emitted when all the contract operations are paused

|Name|Type|Description|
|--- |---|---|
|account|address|The account that paused the operations|

## Unpaused
Event that will be emitted when all the contract operations are unpaused

|Name|Type|Description|
|--- |---|---|
|account|address|The account that unpaused the operations|

## RoleAdminChanged
Emitted when newAdminRole is set as role's admin role, replacing previousAdminRole

|Name|Type|Description|
|--- |---|---|
|role|bytes32|The role which has been used for finding admin role|
|previousAdminRole|bytes32|The previous admin role|
|newAdminRole|bytes32|The new updated admin role|

## RoleGranted
Emitted when account is granted role

|Name|Type|Description|
|--- |---|---|
|role|bytes32|The role which has been granted to the account|
|account|address|The address of the account which was granted role|
|sender|address|The address of the account which granted role|

## RoleRevoked
Emitted when account is revoked role.

|Name|Type|Description|
|--- |---|---|
|role|bytes32|The role which has been revoked to the account|
|account|address|The address of the account which was revoked role|
|sender|address|The address of the account which revoked role|

## Transfer
Event that will be emitted when there is a token transfer between two accounts

|Name|Type|Description|
|--- |---|---|
|from|address|The address of the token owner|
|to|address|The address of the token receiver|
|value|uint256|The amount of tokens that will be sent|
