// 1
const groceries = [
  "apples",
  "tomatoes",
  "chocolate",
  "strawberries",
  "oranges",
  "bananas",
];
// 2
console.log(groceries[1]);
// 3
console.log(groceries.length);
// 4
const lastGroceriers = console.log(groceries[groceries.length - 1]);
// 5
const removedItem = groceries.pop;
console.log(removedItem);
// 6
groceries.push("raspberries", "grapes");
// 7
const firstThreeItems = groceries.slice(0, 3);
console.log(firstThreeItems);
// challenge 1
groceries.splice(2, 1);
// challenge 2
groceries.unshift("blueberries");
console.log(groceries);
// challenge 3
groceries.splice(0, 2, "ketchup", "chili");
console.log(groceries);
