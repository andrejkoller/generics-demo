import { getRandomItem } from "./utils/get-random-item.util.js";
import { mergeObjects } from "./utils/merge-objects.util.js";
import { filterByKey } from "./utils/filter-by-key.util.js";

// Example 1
const names = ["Andrej", "Lukas", "Maria"];
console.log("Random name:", getRandomItem(names));

// Example 2
const player = { name: "Andrej" };
const stats = { score: 100 };
console.log("Merged:", mergeObjects(player, stats));

// Example 3
const players = [
  { name: "Andrej", active: true },
  { name: "Lena", active: false },
];
console.log("Active players:", filterByKey(players, "active", true));
