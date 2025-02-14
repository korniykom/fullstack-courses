enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person: {
  name: string;
  age: number;
  hobies: string[];
  role: Role;
} = {
  name: "Max",
  age: 19,
  hobies: ["sports", "cooking"],
  role: Role.ADMIN,
};

console.log(person.name);
for (const hobby of person.hobies) {
  console.log(hobby.toUpperCase());
}
