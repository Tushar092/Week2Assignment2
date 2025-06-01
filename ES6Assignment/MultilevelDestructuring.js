const people = [
  {
    name: "Alice",
    address: { city: "New York", street: { name: "Broadway", number: 123 } },
  },
  {
    name: "Bob",
    address: {
      city: "Los Angeles",
      street: { name: "Sunset Boulevard", number: 456 },
    },
  },
];

let res = [];

for(let i = 0; i <= people.length - 1; i++) {
    let newObje = {};
    newObje.name = people[i].name;
    newObje.city = people[i].address.city;
    newObje.street = people[i].address.street.name;
    // console.log(newObje);
    res.push(`${newObje.name} lives in ${newObje.city} on ${newObje.street}`);
}

return res;