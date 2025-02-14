const person: {
  name: string;
  age: number;
  hobies: string[];
  role: [number, string];
} = {
  name: "Max",
  age: 19,
  hobies: ["sports", "cooking"],
  role: [2, "author"],
};

console.log(person.name);
for (const hobby of person.hobies) {
  console.log(hobby.toUpperCase());
}
