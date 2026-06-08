// 1. Arrow functions (you already know these)
const add = (a, b) => a + b;
console.log(add(5, 10));

// 2. Optional chaining - safely access nested properties
const guild = { leader: { name: "Dan" } };
console.log(guild.leader?.name);
console.log(guild.officer?.name);

// 3. Nullish coalescing - default value if null/undefined
const playerName = null;
const displayName = playerName ?? "Unknown Player";
console.log(displayName);

// 4. Short circuit evaluation
const isLoggedIn = true;
isLoggedIn && console.log("Welcome back!");

// 5. Ternary operator
const level = 45;
const rank = level >= 60 ? "Endgame" : "Leveling";
console.log(rank);