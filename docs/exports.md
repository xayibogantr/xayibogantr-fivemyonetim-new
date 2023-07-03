# Exports


#### Table of Contents
- [isRolePresent](#isrolepresent)
- [getDiscordId](#getDiscordId)
- [getRoles](#getroles)
- [getName](#getname)
- [log](#log)

### isRolePresent
Returns a true/false boolean if a role is present for a role id or array of role-ids

```js
// JAVASCRIPT EXAMPLE
// Source - Discord Role ID
const bool = global.exports.xayibogantr.isRolePresent(global.source, "897991948097433681");

// Discord ID - Array of Roles
const bool = global.exports.xayibogantr.isRolePresent("142831624868855808", [
    "897991948097433681",
    "897991948097433682"
]);
```
```lua
-- LUA EXAMPLE
-- Source - Discord Role ID
local bool = exports.xayibogantr:isRolePresent(source, "897991948097433681");

-- Discord ID - Array of Roles
local bool = exports.xayibogantr:isRolePresent("142831624868855808", {
    "897991948097433681",
    "897991948097433682"
});
```


### getDiscordId
Returns a player's discord id

```js
// JAVASCRIPT EXAMPLE
const id = global.exports.xayibogantr.getDiscordId(global.source);
```
```lua
-- LUA EXAMPLE
local id = exports.xayibogantr:getDiscordId(source);
```



### getRoles
Returns an array of roles for a discord id or source

```js
// JAVASCRIPT EXAMPLE
// Source
const roles = global.exports.xayibogantr.getRoles(global.source);

// Discord ID
const roles = global.exports.xayibogantr.getRoles("142831624868855808");
```
```lua
-- LUA EXAMPLE
-- Source
local roles = exports.xayibogantr:getRoles(source);

-- Discord ID
local roles = exports.xayibogantr:getRoles("142831624868855808");
```


### getName
Returns an string containing the discord name/nickname for a discord id or source

```js
// JAVASCRIPT EXAMPLE
// Source
const name = global.exports.xayibogantr.getName(global.source);

// Discord ID
const name = global.exports.xayibogantr.getName("142831624868855808");
```
```lua
-- LUA EXAMPLE
-- Source
local name = exports.xayibogantr:getName(source);

-- Discord ID
local name = exports.xayibogantr:getName("142831624868855808");
```


### log
send a message to a configured Log webhook

```js
// JAVASCRIPT EXAMPLE
// event, message, pingRole, color (optional)
global.exports.xayibogantr.log("modlog", "UserA Banned UserB for Reason", true, "#FF0000");

```
```lua
-- LUA EXAMPLE
-- event, message, pingRole, color (optional)
exports.xayibogantr:log("modlog", "UserA Banned UserB for Reason", true, "#FF0000");
```
