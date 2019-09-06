var boys = ["Peter", "lars", "Ole"];
var girls = ["Janne", "hanne", "Sanne"];

var all;

all = boys.concat(girls);
// Part A + B
console.log(all);


// Part C
console.log(all.join(",") + " : " + all.join("-"));

// Part D, E
all.push("Lone", "Gitte");
all.unshift("Hans", "Kurt");
console.log(all);

// Part F, G
all.shift();
all.pop();
console.log(all);

// Part H
all.splice(3, 2);
console.log(all);

// Part I
var reversed = all.reverse();
console.log(reversed);

// Part J
console.log(all.sort());

// Part K (red)
console.log(all.sort(function(x, y) {
    return x.toLowerCase().localeCompare(y.toLowerCase());
}));

// Part L
console.log(all.map(x => x.toUpperCase()));

// Part M
var filtered = all.filter(x => x.toLowerCase().startsWith("l"));
console.log(filtered);