const person: {
  name: string;
  age: number;
  hobies: string[];
} = {
  name: "Max",
  age: 19,
  hobies: ["sports", "cooking"],
};

console.log(person.name);
for (const hobby of person.hobies) {
  console.log(hobby.toUpperCase());
}
